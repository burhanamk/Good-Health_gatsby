import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/global-module.css"


export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
            <div className="copyright">
            <p>Copyright © 2023 good health</p>
            </div>
        </div>
    )
}