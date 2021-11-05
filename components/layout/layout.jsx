import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";



export default function Layout({children}) {
    return (
        <div className="h-full">
            <Header />
            <div className="pt-16 pb-16 mx-auto h-full">{children}</div>
            <Footer/>
        </div>
    );
}