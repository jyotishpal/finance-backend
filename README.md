
# Finance Data Processing and Access Control Backend

## Project Description

This project is a backend system for a finance dashboard where different users can manage and view financial records based on their roles. The system supports role-based access control, financial record management, and dashboard summary APIs for analytics and reporting.

The purpose of this project is to demonstrate backend architecture, API design, database modeling, access control, and financial data processing. The backend is designed in a modular way using controllers, routes, models, and middleware.

---

## Tech Stack Used

This project is built using the following technologies:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs for password hashing
* dotenv for environment variables

---

## Features Implemented

The backend includes the following main features:

* User Registration and Login
* Role-Based Access Control (Admin, Analyst, Viewer)
* Financial Records CRUD Operations
* Dashboard Summary (Total Income, Total Expense, Net Balance)
* Monthly Financial Reports
* Record Filtering (type, category, date range)
* Pagination for record listing
* Authentication using JWT
* Input validation and error handling
* MongoDB data persistence

---

## User Roles and Permissions

### Admin

Admin has full access to the system. Admin can create, update, and delete financial records. Admin can also view all records and dashboard analytics.

### Analyst

Analyst can view financial records and access dashboard analytics such as summary and monthly reports. Analyst cannot create or delete records.

### Viewer

Viewer can only view financial records. Viewer cannot modify records or access analytics.

---

## Financial Record Fields

Each financial record contains the following fields:

* Amount
* Type (Income or Expense)
* Category
* Date
* Note or Description
* Created By User

---

## API Endpoints

### User APIs

* **POST /api/users/register** → Register a new user
* **POST /api/users/login** → Login user and get JWT token

### Record APIs

* **POST /api/records** → Create financial record (Admin only)
* **GET /api/records** → Get all records with pagination
* **GET /api/records/filter** → Filter records by type, category, date
* **PUT /api/records/:id** → Update record (Admin only)
* **DELETE /api/records/:id** → Delete record (Admin only)

### Dashboard APIs

* **GET /api/dashboard/summary** → Total income, total expense, net balance
* **GET /api/dashboard/monthly** → Monthly financial report

---

## Pagination Example

Records API supports pagination using query parameters like **page** and **limit**.

**Example:**

```
/api/records?page=1&limit=5
```

---

## Filter Example

Records can be filtered using query parameters:

```
/api/records/filter?type=expense
/api/records/filter?category=food
/api/records/filter?startDate=2026-04-01&endDate=2026-04-30
```

---

## Project Folder Structure

The project is organized into different folders for better structure and maintainability:

```
config       → Database configuration
controllers  → Business logic
models       → Database schemas
routes       → API routes
middleware   → Authentication and role middleware
server.js    → Entry point
README.md    → Project documentation
```

---

## Environment Variables

Create a **.env** file and add the following:

```
MONGO_URL = your mongodb connection string
JWT_SECRET = your jwt secret key
PORT = 5000
```

---

## Assumptions Made

While building this project, the following assumptions were made:

* Only Admin can create, update and delete financial records
* Analyst can view records and dashboard analytics
* Viewer can only view records
* Authentication is handled using JWT tokens
* MongoDB is used for data storage
* Pagination is implemented for large record lists
* Filtering is implemented for searching records
