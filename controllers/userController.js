import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    console.error("Error finding user by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updatedUser)
    if(!updatedUser) {
        res.status(404).send({message:'user doesnt exist'})
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(deletedUser);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPost = async (req, res) => {
    try {
        console.log("creating new post")
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });

        await newPost.save();
        console.log("creating new post2")
        res.status(201).send(newPost);
    } catch (error) {
        console.log("creating new post")
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.status(200).send(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id).populate('author');
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).send(post);
    } catch (error) {
        console.error("Error finding post by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).send(updatedPost);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).send(deletedPost);
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const createComment = async (req, res) => {
    try {
        const { postId } = req.params; // Assuming you pass the post ID in the route
        const newComment = new Comment({
            text: req.body.text,
            author: req.body.author,
            post: postId
        });

        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Function to get comments by post ID
export const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ post: postId });
        res.status(200).send(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Function to update a comment
export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).send(updatedComment);
    } catch (error) {
        console.error("Error updating comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Function to delete a comment
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).send({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};