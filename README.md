  Finance Data Processing and Access Control Backend
Project Description

This project is a backend system for a finance dashboard where different users can manage and view financial records based on their roles. The system implements role-based access control, financial record management, and dashboard summary APIs for analytics and reporting.

The main objective of this project is to demonstrate backend architecture, API design, data modeling, access control, and financial data processing using Node.js, Express, and MongoDB.

Tech Stack
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcryptjs
dotenv
Features
User Registration and Login
Role-Based Access Control (Admin, Analyst, Viewer)
Financial Records CRUD Operations
Dashboard Summary (Total Income, Expense, Net Balance)
Monthly Financial Reports
Record Filtering (type, category, date range)
Pagination for records
JWT Authentication
Error Handling and Validation
MongoDB Data Persistence
User Roles

Admin

Create financial records
Update financial records
Delete financial records
View all records
Access dashboard analytics

Analyst

View financial records
Access dashboard analytics
View monthly reports

Viewer

View financial records only
Financial Record Fields

Each financial record includes:

Amount
Type (Income or Expense)
Category
Date
Note / Description
Created By User
API Endpoints
User APIs
POST /api/users/register
POST /api/users/login
Record APIs
POST /api/records
GET /api/records
GET /api/records/filter
PUT /api/records/:id
DELETE /api/records/:id
Dashboard APIs
GET /api/dashboard/summary
GET /api/dashboard/monthly
Pagination Example

GET /api/records?page=1&limit=5

Filter Example

/api/records/filter?type=expense
/api/records/filter?category=food
/api/records/filter?startDate=2026-04-01&endDate=2026-04-30

Project Structure

finance-backend
│
├── config
├── controllers
├── models
├── routes
├── middleware
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md


MONGO_URL = your mongodb connection string
JWT_SECRET = your jwt secret key
PORT = 5000

Assumptions
Only Admin can create, update and delete financial records
Analyst can view records and dashboard analytics
Viewer can only view records
Authentication is handled using JWT tokens
MongoDB is used for data storage
Pagination is implemented for large record lists
Filtering is implemented for searching records
