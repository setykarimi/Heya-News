import { Heart, Message, Profile2User } from "iconsax-react";
import DashboardSidebar from "./Sidebar";
import CardProfile from "Components/card/cardProfile";

const DashboardLayout = () => {
    return (
        <main className="xl:container mx-auto p-4 ">
            <div className="grid grid-cols-5 gap-4 ">
            <CardProfile />
            <div className="col-span-3">
                Latest news
            </div>
            <div>
                Likes
            </div>
            </div>
        </main>
    );
}

export default DashboardLayout;