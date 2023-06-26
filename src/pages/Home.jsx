import NewsBanner from "Components/banner/newsBanner";
import TodayHeadlines from "Cards/components/todayHeadlines";
import PopularArticles from "Cards/popularArticle";


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