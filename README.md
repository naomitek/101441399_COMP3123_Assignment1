# COMP3123 Assignment 1: User & Employee API

## Overview
A backend API built with **Node.js**, **Express**, and **MongoDB** to manage users and employees with full CRUD functionality.

## Features
- **User Sign Up & Login**
- **Employee CRUD Operations**: Create, read, update, and delete employees.

## API Endpoints

### User:
- **POST /api/users/signup**: Sign up a new user.
- **POST /api/users/login**: Log in an existing user.

### Employee:
- **GET /api/employees**: Get all employees.
- **GET /api/employees/:id**: Get employee by ID.
- **POST /api/employees**: Create a new employee.
- **PUT /api/employees/:id**: Update employee by ID.
- **DELETE /api/employees**: Delete employee by query param.

## Setup

1. Clone repo:  
   `git clone https://github.com/naomitek/101441399_COMP3123_Assignment1.git`
2. Install dependencies:  
   `npm install`
3. Update MongoDB URI in `server.js`.
4. Run the app:  
   `npm start`

Server runs at `http://localhost:3001'.## Testing
- Use **Postman** for API testing.
- Submit **MongoDB screenshots** and **GitHub link**.
