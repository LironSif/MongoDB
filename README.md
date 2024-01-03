### UserAPI - A Comprehensive User, Post, and Comment Management System
# Introduction
Welcome to UserAPI, an advanced and efficient system designed for comprehensive management of users, posts, and comments. This system is built to handle data seamlessly, offering a robust solution for managing a blog-like platform.

## Getting Started
Access the UserAPI interface: UserAPI Interface

## API Endpoints
Base URL
### https://mongodb-first-app.onrender.com/api/v1

# User Endpoints
Get All Users
GET /users
Retrieves a list of all users.

# Get User by ID
GET /users/:id
Retrieves a specific user by their ID.

# Create New User
POST /users
Creates a new user. (req.body => {"name": "","email": ""})

# Update User
PUT /users/:id
Updates an existing user's information by ID.

# Delete User
DELETE /users/:id
Deletes a user by ID.

## Post Endpoints

# Get All Posts
GET /posts
Retrieves all posts.

# Get Post by ID
GET /posts/:id
Retrieves a specific post by ID.

# Create New Post
POST /posts
Creates a new post. (req.body => {"title": "","content": "", "author": "userId"})

# Update Post
PUT /posts/:id
Updates an existing post by ID.

# Delete Post
DELETE /posts/:id
Deletes a post by ID.

## Comment Endpoints

# Get All Comments for a Post
GET /posts/:postId/comments
Retrieves all comments for a specific post.

# Create New Comment
POST /posts/:postId/comments
Adds a new comment to a post. (req.body => {"text": "","author": "userId"})

# Update Comment
PUT /comments/:commentId
Updates an existing comment by ID.

# Delete Comment
DELETE /comments/:commentId
Deletes a comment by ID.
# MongoDB
