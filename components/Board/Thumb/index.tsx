import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
const Thumb = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { postContent: postUuid } = router.query;
    const { isLoading, error, data, isFetching } = useQuery(["getLikeIt", postUuid],
        () => axios.get(`http://localhost:5000/api/post/getLikeIt?postUuid=${postUuid}`).then((res) => {
            return res.data;
        })
    );
    const mutation = useMutation(
        ({ postUuid }: any) =>
            axios
                .put("http://localhost:5000/api/comment/likeIt", {
                    postUuid
                })
                .then((res) => {
                    return res.data;
                }),
        {
            onMutate: async ({ postUuid }) => {
                await queryClient.cancelQueries(["getLikeIt", postUuid]);
                const previousValue = queryClient.getQueryData([
                    "getLikeIt",
                    postUuid,
                ]);
                queryClient.setQueryData(["getLikeIt", postUuid], (old) => {

                });

                return previousValue;
            },
            // onError: (err, variables, previousValue) =>
            //     queryClient.setQueryData(["getLikeIt", postUuid], previousValue),
            // onSettled: () => {
            //     queryClient.invalidateQueries(["getLikeIt", postUuid]);
            // },
        }
    );

    if (isLoading) {
        return <div>...loading</div>
    }
    if (error) {
        return <div>error.message</div>
    }
    if (data) {
        return <div>{data.countAll}</div>
    }
    return <div>{0}</div>
}
export default Thumb;