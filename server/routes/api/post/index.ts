import express, { Router } from 'express';
import { sendPost, getCategoryPosts, getPost, getPosts, likeIt, getLikeIt } from '../../controller/Post.controller';
const router = Router()


// 카테고리 추가해야함

router.post('/sendPost', sendPost);
router.get('/getPost', getPost);
router.get('/getCategoryPosts', getCategoryPosts);
router.get('/getPosts', getPosts);
router.put('/likeIt', likeIt);
router.get('/getLikeIt', getLikeIt);


export default router