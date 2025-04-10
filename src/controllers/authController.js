const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Tenant = require("../models/Tenant");

exports.register = async (req, res) => {
  try {
    const { tenantName, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const tenant = await Tenant.create({ name: tenantName });

    const user = await User.create({
      tenantId: tenant.id,
      email,
      password: hashedPassword,
      role: "admin",
    });

    const token = jwt.sign({ userId: user.id, tenantId: tenant.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id, tenantId: user.tenantId, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
