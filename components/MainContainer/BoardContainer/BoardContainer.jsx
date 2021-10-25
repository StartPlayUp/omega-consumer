import React from "react";
import BestBoard from "./Boards/bestBoard";
import MainNoticeBaord from "./Boards/MainNoticeBoard";
import MainGameReviewBaord from "./Boards/MainGameReviewBoard";
const BoardContainer = () => {
    return (
        <div className="flex justify-center mt-8">
            <div className="flex flex-row">
                <MainNoticeBaord />
                <BestBoard />
            </div>
            <div>
                <MainGameReviewBaord />
            </div>


        </div>
    )
}

export default BoardContainer;