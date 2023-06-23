import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="xl:container mx-auto xl:px-0 px-4">
            <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;