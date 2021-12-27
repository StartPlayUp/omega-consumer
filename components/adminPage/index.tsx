import SearchComponent from './SearchComponent';
import UserComponent from './UserComponent';
import { useQuery } from 'react-query'
import axios from 'axios';
import { Key } from 'react';
import { useRouter } from "next/router";

const AdminPage = () => {
    const router = useRouter();
    const { postContent } = router.query;
    const { isLoading, refetch, error, data } = useQuery(['getPosts', ""], () =>
        axios.get(`http://localhost:5000/api/post/getPosts`)
            .then(res => {
                console.log(res.data)
                return res.data
            })
        , {
            enabled: false
        }
    )
    const onSearchHandler = () => {
        refetch();
    }
    return (
        <div className=" w-full m-10" >
            <div className=" w-full" >
                <SearchComponent onSearchHandler={onSearchHandler} loading={isLoading} />
            </div>
            <div>
                {data && <UserComponent users={data.posts} />}
            </div>
        </div>
    )
}
const index = () => (
    <AdminPage />
);
export default index