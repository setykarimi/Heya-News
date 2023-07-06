import TodayHeadlines from "Cards/components/todayHeadlines";
import PopularArticles from "Components/card/components/popularArticle";
import NewsBanner from "Components/banner/newsBanner";

const Home = () => {
    return (
        <>
            <NewsBanner />
            <PopularArticles />
            <TodayHeadlines />
        </>
    )
}

export default Home;