import NewsBanner from '../components/banner/newsBanner';
import TodayHeadlines from '../components/card/components/todayHeadlines';
import PopularArticles from '../components/card/popularArticle';

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