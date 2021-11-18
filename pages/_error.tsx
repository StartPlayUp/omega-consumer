import { NextPageContext } from "next";
import Router from "next/router";
import React, { Component, useEffect } from "react";



const Error = ({ statusCode }: any) => {

    useEffect(() => {
        Router.push("/test");
    }, [])

    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
        </p>
    );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error