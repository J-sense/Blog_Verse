# Blog Project: Assignment-3

## Overview

This project is a backend application for a blogging platform. The system is designed to allow users to write, update, and delete their blogs while providing role-based access control. Admins have special permissions to manage users and their blogs. The platform supports secure authentication, role-based authorization, and public APIs for viewing blogs with search, sort, and filter functionalities.

## Technologies Used

- **Programming Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose

## Features

### User Roles

1. **Admin**:
   - Manually created in the database with predefined credentials.
   - Can delete any blog.
   - Can block any user by updating the `isBlocked` property.
   - Cannot update any blog.
2. **User**:
   - Can register and log in.
   - Can create blogs (only when logged in).
   - Can update and delete their own blogs.
   - Cannot perform admin actions.

### Authentication & Authorization

- **Authentication**:
  - Users must log in to perform write, update, and delete operations.
- **Authorization**:
  - Admin and User roles are differentiated and secured.

### Blog API

- Public API for reading blogs:
  - Includes blog title, content, author details, and other necessary information.
  - Supports search, sorting, and filtering functionalities.

## Models

### User Model

- **name**: Full name of the user.
- **email**: Email address used for authentication and communication.
- **password**: Securely stored password.
- **role**: Either "admin" or "user". Default is "user".
- **isBlocked**: Boolean flag indicating whether the user is blocked. Default is `false`.
- **createdAt**: Timestamp when the user was created.
- **updatedAt**: Timestamp of the last update to the user.

### Blog Model

- **title**: Title of the blog post.
- **content**: Main body or content of the blog post.
- **author**: Reference to the User model, indicating the author of the blog post.
- **isPublished**: Boolean flag indicating whether the blog post is published. Default is `true`.
- **createdAt**: Timestamp when the blog post was created.
- **updatedAt**: Timestamp of the last update to the blog post.

## API Endpoints

### Authentication

1. **Register User**

   - **Endpoint**: `POST /api/auth/register`
   - **Description**: Registers a new user with the platform. Validates user data and saves it to the database.

2. **Login User**
   - **Endpoint**: `POST /api/auth/login`
   - **Description**: Authenticates a user with their email and password and generates a JWT token.

### Blog Management

1. **Create Blog**

   - **Endpoint**: `POST /api/blogs`
   - **Description**: Allows a logged-in user to create a blog by providing a title and content.

2. **Update Blog**

   - **Endpoint**: `PATCH /api/blogs/:id`
   - **Description**: Allows a logged-in user to update their own blog by its ID.

3. **Delete Blog**

   - **Endpoint**: `DELETE /api/blogs/:id`
   - **Description**: Allows a logged-in user to delete their own blog by its ID.

4. **Get All Blogs (Public)**
   - **Endpoint**: `GET /api/blogs`
   - **Description**: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.

### Admin Actions

1. **Block User**

   - **Endpoint**: `PATCH /api/admin/users/:userId/block`
   - **Description**: Allows an admin to block a user by updating the `isBlocked` property to `true`.

2. **Delete Blog**
   - **Endpoint**: `DELETE /api/admin/blogs/:id`
   - **Description**: Allows an admin to delete any blog by its ID.

---

## Description

This project implements a robust blogging platform backend with features such as secure user authentication, role-based access control, and comprehensive CRUD operations for blogs. Admins can manage users and their blogs, while regular users can manage their own content. The public API supports advanced functionalities like search, sorting, and filtering to enhance usability and accessibility.
