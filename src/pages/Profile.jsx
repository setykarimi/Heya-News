import CardLanguage from "Components/card/cardLanguage";
import CardProfile from "Components/card/cardProfile";
import LatestNews from "Components/card/components/latestNews";
import MyBlog from "Components/card/components/myBlogs";
import MyLikes from "Components/card/components/myLikes";
import Navbar from "Layout/Navbar";

const Profile = () => {
    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
            <div>
                <CardProfile />
                <CardLanguage />
            </div>
            <div className="lg:col-span-3 md:col-span-2">
                <LatestNews />
                <MyBlog />
            </div>
            <div className="xl:col-span-1 lg:col-span-4 md:col-span-3">
                <MyLikes />
            </div>
        </div>
    );
}

export default Profile;