import express from 'express';
import fs from 'fs';
import {createPost,getPostById,getPosts,updatePost,deletePost} from '../Controllers/postController.js';

const router = express.Router();
//gets all posts
 router.get('/' , getPosts)
//gets post by id
 router.get('/:id',getPostById)
//creats a new post
router.post('/', createPost);
//updates a post
router.put('/:id', updatePost)
//deletes a post
router.delete('/:id', deletePost)

export default router;