import { Router } from 'express';
import { loginRequired, emailVerified } from '../../middleware';
import {
    sendMemberComment,
    sendNonMemberComment,
    deleteMemberComment,
    deleteNonmemberComment,
    updateMemberComment,
    updateNonMemberComment,
    getComments
} from '../../controller/Comment.controller';
const router = Router()

router.post('/sendMemberComment',
    loginRequired,
    emailVerified,
    sendMemberComment
);
router.post('/deleteMemberComment',
    loginRequired,
    emailVerified,
    deleteMemberComment
);
router.post('/updateMemberComment',
    loginRequired,
    emailVerified,
    updateMemberComment
);


router.post('/sendNonMemberComment', sendNonMemberComment);
router.post('/deleteNonmemberComment', deleteNonmemberComment);
router.post('/updateNonMemberComment', updateNonMemberComment);

router.get('/getComments', getComments);


export default router