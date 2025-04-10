const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Tenant = require("./Tenant");

const User = sequelize.define("User", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  tenantId: { type: DataTypes.UUID, allowNull: false, references: { model: "Tenants", key: "id" } },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM("admin", "manager", "user"), defaultValue: "user" },
});

Tenant.hasMany(User, { foreignKey: "tenantId" });
User.belongsTo(Tenant, { foreignKey: "tenantId" });

module.exports = User;
