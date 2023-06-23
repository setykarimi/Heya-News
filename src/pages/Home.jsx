import Bg from '../assets/images/Background.png';
import NewsBanner from '../components/banner/newsBanner';
import PopularArticles from '../components/card/popularArticle';
import SearchArticle from '../components/form/Search';
import TodayHeadlines from '../components/card/components/todayHeadlines';
const Home = () => {

    return (
        <div>
            <div style={{ background: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: '100%' }} className='md:pt-60 pt-24 lg:px-10 px-4 bg-transparent'>
                <SearchArticle />
                <NewsBanner />
            </div>

           
                <PopularArticles />
                {/* <RecentArticles /> */}
                {/* <CaseStudies /> */}
                <TodayHeadlines />
            
        </div>
    )
}

export default Home;