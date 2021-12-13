import StylePaginationDiv from './PagingStyle'
import Pagination from "react-js-pagination";

const Paging = ({ page, count, setPage }) => {
    return (
        <StylePaginationDiv>
            <Pagination
                activePage={page}
                itemsCountPerPage={15}
                totalItemsCount={count}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={setPage}
            />
        </StylePaginationDiv>
    );
};

export default Paging;