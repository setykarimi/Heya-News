import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)

    console.log(showMenu);
    return (
        <>
            <div className={`overlay cursor-pointer ${showMenu ? "show" : ""}`} onClick={()=> setShowMenu(false)}></div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
            <main className="xl:container mx-auto xl:px-0 px-4">
                <div className="xl:w-10/12 lg:w-10/12 md:w-full mx-auto">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Layout;