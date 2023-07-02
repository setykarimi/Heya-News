import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import Footer from "Layout/Footer";
import Navbar from "Layout/Navbar";

const DashboardLayout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { i18n } = useTranslation();
    return (
        <div style={{ direction: i18n.language == "fa" ? "rtl" : "ltr", fontFamily: i18n.language == "fa" && "Calibri" }}>
            <div className={`overlay cursor-pointer ${showMenu ? "show" : ""}`} onClick={() => setShowMenu(false)}></div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <main className="xl:container mx-auto xl:px-0 px-4">
                <div className="grid grid-cols-4 gap-6">
                    <DashboardSidebar />
                    <div className="col-span-3 bg-black">
                    <div className=" p-5">
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DashboardLayout;