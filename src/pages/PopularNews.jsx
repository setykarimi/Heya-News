import CardNewsDetail from "Cards/cardNewsDetail";
import CardTitle from "Cards/cardTitle";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const PopularNews = () => {
    const { t } = useTranslation();

    async function fetchData() {
        const { data } = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&context=embed&search=popular`);
        return data;
    }

    const { data, isError, isLoading } = useQuery("news", fetchData);

    useEffect(()=> {
        fetchData()
    },[])

    return (
        <div className="xl:w-10/12 lg:w-11/12 md:w-full mx-auto">
            <CardTitle title={t("popular_articles.popular_article")} description={t("popular_articles.desc")} />
            <div className="flex flex-col gap-8 mt-12">
            {isLoading ? <div>Loading</div> : isError ? <div>Error</div> :
                data.map((item, index) => <CardNewsDetail key={item.id} data={item} index={index}/>)}
                </div>
        </div>
    );
}

export default PopularNews;