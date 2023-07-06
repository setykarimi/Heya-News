import CardLanguage from "Components/card/cardLanguage";
import CardProfile from "Components/card/cardProfile";
import LatestNews from "Components/card/components/latestNews";
import MyBlog from "Components/card/components/myBlogs";
import MyLikes from "Components/card/components/myLikes";

const DashboardLayout = () => {
    return (
        <main className="xl:container mx-auto p-4 ">
            <div className="grid grid-cols-5 gap-4">
                <div>
                    <CardProfile />
                    <CardLanguage />
                </div>
                <div className="col-span-3">
                    <LatestNews />
                    <MyBlog />
                </div>
                <MyLikes />
            </div>
        </main>
    );
}

export default DashboardLayout;