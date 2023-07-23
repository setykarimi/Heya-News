import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { i18n } = useTranslation();

    return (
        <div style={{ direction: i18n.language == "fa" ? "rtl" : "ltr", fontFamily: i18n.language == "fa" && "Calibri" }}>
            <div className={`overlay cursor-pointer ${showMenu ? "show" : ""}`} onClick={() => setShowMenu(false)}></div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="xl:container mx-auto xl:px-0 px-4">
                <Outlet />
            </div>
            <Footer />
        </div>

    );
}

export default Layout;