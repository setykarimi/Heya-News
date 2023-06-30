import NewsBanner from "Components/banner/newsBanner";
import TodayHeadlines from "Cards/components/todayHeadlines";
import PopularArticles from "Cards/popularArticle";
import { useTranslation } from "react-i18next";


const Home = () => {
    const { t } = useTranslation();

    return (
        <>
        <h1>{t("welcome")}</h1>
            <NewsBanner />
            <PopularArticles />
            <TodayHeadlines />
        </>
    )
}

export default Home;