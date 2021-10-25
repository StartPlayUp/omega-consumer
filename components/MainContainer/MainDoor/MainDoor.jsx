import React from "react";
import Image from "next/image"
import testGame from "../../../public/img/testImage.jpg"
function MainDoor() {
    return (
        <>
            <div className=" h-96">
                {/* <div className="bg-center h-full w-auto text-3xl"
                    style={{ backgroundImage: "url('img/testGame.jpg')", }}
                > */}
                <div className="h-full w-auto text-3xl z-0">
                    <Image src={testGame} alt="testImage" height={400}  objectFit="cover"/>
                </div>
            </div>
        </>
    )

}

export default MainDoor;