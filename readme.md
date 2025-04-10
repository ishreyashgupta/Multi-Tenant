# Multi-Tenant SaaS Backend System

This is a backend system for a Multi-Tenant SaaS (Software as a Service) application. It supports user authentication, tenant isolation, role-based access control (RBAC), and is built with scalability and extensibility in mind.

---

## 🚀 Features

- Multi-Tenant Architecture with tenant-based data isolation
- JWT Authentication for secure user sessions
- Role-Based Access Control (RBAC) to restrict access by roles (Admin, Manager, User)
- RESTful API structure following best practices
- Modular Codebase with clean folder structure
- Future-ready: Payment integration, CI/CD, Docker, Kubernetes

---

## 🛠 Tech Stack

- **Backend**: Node.js (Express.js)
- **Database**: MySQL with Sequelize ORM
- **Caching**: Redis *(planned)*
- **Message Queues**: RabbitMQ / Kafka *(planned)*
- **Payment Integration**: Stripe / Razorpay *(upcoming)*
- **Deployment**: Docker, Kubernetes (with CI/CD pipeline)

---
## 📁 Folder Structure

|-- package.json               # Project metadata and dependencies  
|-- .env                       # Environment configuration (not included in repo)  
|-- README.md                  # Project documentation  
|-- src/                       
|   |-- config/
|   |   |-- db.js              # Database connection using Sequelize  
|   |-- controllers/
|   |   |-- authController.js  # Handles user registration and login logic  
|   |-- middleware/
|   |   |-- auth.js            # Middleware for JWT auth and role/tenant-based authorization  
|   |-- models/
|   |   |-- Tenant.js          # Tenant schema  
|   |   |-- User.js            # User schema with roles  
|   |-- routes/
|   |   |-- authroute.js       # Auth-related routes  
|   |-- server.js              # Main API routes entrypoint  

