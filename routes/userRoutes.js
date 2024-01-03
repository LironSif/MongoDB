import express from "express";
import {
    getAllUsers, getUserById, createUser, updateUser, deleteUser,
    createPost, getAllPosts, getPostById, updatePost, deletePost,
    createComment, getCommentsByPostId, updateComment, deleteComment
} from "../controllers/userController.js"; 


const router = express.Router();

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Post routes
router.post('/posts', createPost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

// Comment routes
router.post('/posts/:postId/comments', createComment); 
router.get('/posts/:postId/comments', getCommentsByPostId); 
router.put('/comments/:commentId', updateComment); 
router.delete('/comments/:commentId', deleteComment); 

export default router;
