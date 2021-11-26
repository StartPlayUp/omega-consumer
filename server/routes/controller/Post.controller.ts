import { Request, Response } from 'express';
import {
    createPost,
    getPostFromUuid,
    getPostsSortByTime,
    getLikeItPost,
    getCategoryPostsSortByTime,
    likeItPost
} from '../../service/post.service';

const sendPost = async (req: Request, res: Response) => {
    const { title, content, ipAddress, userUuid } = req.body;
    console.log(title)
    const result = await createPost({
        title, content, ipAddress, userUuid,
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const getPost = async (req: Request, res: Response) => {
    const postUuid = req.query.postUuid as string;
    const result = await getPostFromUuid({
        postUuid
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const getPosts = async (req: Request, res: Response) => {
    const result = await getPostsSortByTime();
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const getCategoryPosts = async (req: Request, res: Response) => {
    const category = req.query.category as string;
    const result = await getCategoryPostsSortByTime({ category });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const likeIt = async (req: Request, res: Response) => {
    const { postUuid, userUuid, likeIt } = req.body;
    const result = await likeItPost({
        postUuid,
        userUuid,
        likeIt,
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const getLikeIt = async (req: Request, res: Response) => {
    const postUuid = req.query.postUuid as string;
    const result = await getLikeItPost({
        postUuid
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


export { sendPost, getPost, getPosts, likeIt, getLikeIt, getCategoryPosts }
