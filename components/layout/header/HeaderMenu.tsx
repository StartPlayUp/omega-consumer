import React from "react";
import Link from "next/link"
function HeaderMenu() {
    return (
        <div className="h-1/2">
            <div className="flex flex-row text-center text-2xl p-4">
                <button className="pl-5 pr-5 border-l-2"><Link href="/Notice">공지사항</Link></button>
                <button className="pl-5 pr-5 border-l-2 border-r-2"><Link href="/board/reviewBoard">게시판</Link></button>
            </div>
        </div>
    )
}

export default HeaderMenu;