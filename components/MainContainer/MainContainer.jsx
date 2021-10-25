import React from "react";
import MainDoor from "./MainDoor/MainDoor";
import BoardContainer from './BoardContainer/BoardContainer'
function MainContainer() {
    return (
        <div className="w-screen h-screen bg-gray-300 ml-2">
            <div className="flex flex-col">
                <MainDoor />
                <BoardContainer />
            </div>
        </div>
    )
}

export default MainContainer;