import React, { useState } from 'react';
import NoticeBoard from './NoticeBoard';
function NoticeContainer() {
    return (
        <div className="w-screen h-full flex flex-col justify-center">
            <div className="flex justify-center">
                <NoticeBoard />
            </div>
            
        </div>
    )
}

export default NoticeContainer;