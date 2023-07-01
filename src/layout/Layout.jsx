import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { i18n  } = useTranslation();

    return (
        <div style={{direction: i18n.language == "fa" ? "rtl":"ltr", fontFamily: i18n.language == "fa"  && "Calibri"}}>
            <ToastContainer position="top-center"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored" />
            <div className={`overlay cursor-pointer ${showMenu ? "show" : ""}`} onClick={() => setShowMenu(false)}></div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <main className="xl:container mx-auto xl:px-0 px-4">
                <div className="xl:w-10/12 lg:w-10/12 md:w-full mx-auto">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;