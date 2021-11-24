import express, { Router } from 'express';
import { sendPost, getPost, getPosts, likeIt, getLikeIt } from '../../controller/Post.controller';
const router = Router()

router.post('/sendPost', sendPost);
router.get('/getPost', getPost);
router.get('/getPosts', getPosts);
router.put('/likeIt', likeIt);
router.get('/getLikeIt', getLikeIt);


export default router