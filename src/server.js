const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRoutes = require("./routes/authroutes");
const sequelize = require("./config/db");

require("dotenv").config();

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes); // Register routes

sequelize.sync({ force: false }).then(() => console.log("✅ Database Synced"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));