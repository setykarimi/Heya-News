import CardProfile from "Components/card/cardProfile";
import LatestNews from "Components/card/components/latestNews";
import MyLikes from "Components/card/components/myLikes";

const DashboardLayout = () => {
    return (
        <main className="xl:container mx-auto p-4 ">
            <div className="grid grid-cols-5 gap-4 ">
                <CardProfile />
                <div className="col-span-3">
                    <LatestNews />
                </div>
                <div>
                    <MyLikes />
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;