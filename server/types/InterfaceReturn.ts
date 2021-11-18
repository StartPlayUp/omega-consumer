import { User } from './../typeorm/entity/User';

interface returnApi {
    success: boolean,
    error?: string
}

interface returnUser extends returnApi {
    user?: any
}

interface returnPost extends returnApi {
}
interface returnPostLikeIt extends returnPost {
    message?: string
}

interface returnGetPostLikeIt extends returnPost {
    likeItCount?: number
    countAll?: number
}

interface returnComment extends returnApi {
    comment?: any,
}

export type { returnApi, returnUser, returnPost, returnComment, returnPostLikeIt, returnGetPostLikeIt }