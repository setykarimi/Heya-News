import TodayHeadlines from "Cards/components/todayHeadlines";
import PopularArticles from "Components/card/components/popularArticle";
import NewsBanner from "Components/banner/newsBanner";

const Home = () => {
    return (
        <div className="xl:w-10/12 lg:w-11/12 md:w-full mx-auto">
            <NewsBanner />
            <PopularArticles />
            <TodayHeadlines />
        </div>
    )
}

export default Home;