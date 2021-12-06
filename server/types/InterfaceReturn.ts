import { User } from './../typeorm/entity/User';

interface returnApi {
    success: boolean,
    error?: string
}

interface returnUser extends returnApi {
    user?: any
    nickname?: string
}

interface returnPost extends returnApi {
    post?: any
}
interface returnPosts extends returnApi {
    posts?: Array<Object>
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

export type { returnApi, returnUser, returnPost, returnComment, returnPostLikeIt, returnGetPostLikeIt, returnPosts, }