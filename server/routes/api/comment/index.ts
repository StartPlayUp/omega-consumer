import { Router } from 'express';
import { loginRequired } from '../../middleware';
import {
    sendMemberComment,
    sendNonMemberComment,
    getComments
} from '../../controller/Comment.controller';
const router = Router()

router.post('/sendMemberComment', loginRequired, sendMemberComment);
router.post('/sendNonMemberComment', sendNonMemberComment);
router.get('/getComments', getComments);


export default router