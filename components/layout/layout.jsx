import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";



export default function Layout({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}