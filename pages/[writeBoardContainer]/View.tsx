import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import HomepagePost from '../../components/homePageContainer/contents/homepagePost'

const Home: NextPage = ({ posts }: any): any => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row justify-center">
                <HomepagePost mainPageContentTitle={posts} />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/post/getPosts");
        console.log("asdf", res, "asdf")
        if (res.data.success) {
            const posts = res.data.post;
            return {
                props: {
                    posts
                }
            }
        } else {
            console.log("서버가 이상이 생겨 포스트를 못가져옴");
            return {
                props: {
                    posts: []
                }
            }
        }
    } catch (err) {
        console.log("post get error : ", err);
        console.log("서버가 이상이 생겨 포스트를 못가져옴");
        return {
            props: {
                posts: []
            }
        }
    }
}

// export const getStaticProps: GetStaticProps = async () => {
//     try {
//         const res = await axios.get("http://localhost:5000/api/post/getPosts");
//         if (res.data.success) {
//             const posts = res.data.post;
//             return {
//                 props: {
//                     posts
//                 }
//             }
//         } else {
//             console.log("서버가 이상이 생겨 포스트를 못가져옴");
//             return {
//                 props: {
//                     posts: []
//                 }
//             }
//         }
//     } catch (err) {
//         console.log("post get error : ", err);
//         console.log("서버가 이상이 생겨 포스트를 못가져옴");
//         return {
//             props: {
//                 posts: []
//             }
//         }
//     }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             // String variant:
//             '/noticeBoard/View',
//             // Object variant:
//             // { params: { slug: 'View' } },
//         ],
//         fallback: true,
//     }
// }


export default Home
