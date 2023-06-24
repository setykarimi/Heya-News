import Bg from '../assets/images/Background.png';
import NewsBanner from '../components/banner/newsBanner';
import PopularArticles from '../components/card/popularArticle';
import SearchArticle from '../components/form/Search';
import TodayHeadlines from '../components/card/components/todayHeadlines';
const Home = () => {

    return (
<>
            <NewsBanner />
            <PopularArticles />
            {/* <CaseStudies />*/}
            <TodayHeadlines />
</>
   )
}

export default Home;