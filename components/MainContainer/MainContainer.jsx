import React from "react";
import MainDoor from "./MainDoor/MainDoor";
import BoardContainer from './Board/BoardContainer'
function MainContainer() {
    return (
        <div className="w-screen h-full bg-gray-300 ml-2">
            <MainDoor />
            <BoardContainer />
        </div>
    )
}

export default MainContainer;