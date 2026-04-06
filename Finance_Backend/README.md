# Finance Data Processing and Access Control Backend

## Overview
This project is a backend system for managing financial records with role-based access control and dashboard analytics. The system supports different user roles and financial data processing with summary insights.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Features
- User Registration and Login
- Role Based Access Control (Admin, Analyst, Viewer)
- Financial Records CRUD Operations
- Dashboard Summary APIs
- Monthly Financial Reports
- Record Filtering
- Pagination
- Input Validation and Error Handling

## User Roles
### Admin
- Create, update, delete financial records
- Manage users
- View dashboard analytics

### Analyst
- View financial records
- View dashboard analytics

### Viewer
- View financial records only

## API Endpoints

### User APIs
- POST /api/users/register
- POST /api/users/login

### Record APIs
- POST /api/records
- GET /api/records
- GET /api/records/filter
- PUT /api/records/:id
- DELETE /api/records/:id

### Dashboard APIs
- GET /api/dashboard/summary
- GET /api/dashboard/monthly

## Setup Instructions
1. Clone repository
2. Run npm install
3. Create .env file
4. Add MongoDB URL and JWT Secret
5. Run npm run dev

## Environment Variables
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000


## Assumptions
- Only Admin can create and modify records
- Analyst can view records and analytics
- Viewer can only view records
- Authentication is handled using JWT