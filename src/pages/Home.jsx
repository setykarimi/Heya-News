import Bg from '../assets/images/Background.png';
import NewsBanner from '../components/banner/newsBanner';
import AllArticles from '../components/card/allArticles';
import PopularArticles from '../components/card/popularArticle';
import SearchArticle from '../components/form/Search';
import CaseStudies from '../components/slider/caseStudies';
const Home = () => {

    return (
        <div>
            <div style={{ background: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }} className='md:pt-60 pt-24 lg:px-10 px-4 bg-transparent'>
                <SearchArticle />
                <NewsBanner />
            </div>

            <div className='xl:w-9/12 lg:w-10/12 md:w-full mx-auto lg:px-0 px-4'>
                <PopularArticles />
                {/* <RecentArticles /> */}
                {/* <CaseStudies /> */}
                <AllArticles />
            </div>
        </div>
    )
}

export default Home;