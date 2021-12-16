import React, { useState } from "react";
import { CATEGORY_LIST } from "../../../constants/constant/category";
const Posts = ({ posts }) => {
    return (
        <div className="bg-gray-100 w-full h-full">
            {Object.keys(posts).map((i) => {
                const timeArray = posts[i].post_createdAt.slice(0, posts[i].post_createdAt.length - 5).split('T');
                return (
                    <div key={posts.uuid}>
                        <div>
                            <button className="flex">
                                <div>{CATEGORY_LIST[posts[i].post_category]}</div>
                                <div>{posts[i].post_title}</div>
                                <div className="">
                                    <div>{timeArray[0]}</div>
                                    <div>{timeArray[1]}</div>

                                </div>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;
