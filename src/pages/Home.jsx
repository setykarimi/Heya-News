import Bg from '../assets/images/Background.png';
import NewsBanner from '../components/banner/newsBanner';
import PopularArticles from '../components/card/popularArticle';
import SearchArticle from '../components/form/Search';
import TodayHeadlines from '../components/card/components/todayHeadlines';
const Home = () => {

    return (
        <div className='xl:w-10/12 lg:w-10/12 md:w-full mx-auto '>

            <SearchArticle />
            <NewsBanner />
            <PopularArticles />
            {/* <CaseStudies />*/}
            <TodayHeadlines />

        </div>
    )
}

export default Home;