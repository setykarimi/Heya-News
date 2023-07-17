import motherHood from 'Images/motherhood/motherhood.png';
import camping from 'Images/travel/camping.png';
import friends from 'Images/university/freinds.png';
import { Link2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { CardArticle } from "../cardArticle";
import { useTranslation } from 'react-i18next';

const LatestNews = () => {

    const { t } = useTranslation();

    const news = [
        {
            date: t("latest_news.news1.date"),
            title: t("latest_news.news1.title"),
            content: t("latest_news.news1.desc"),
            img: motherHood
        },
        {
            date: t("latest_news.news2.date"),
            title: t("latest_news.news2.title"),
            content: t("latest_news.news2.desc"),
            img: camping
        },
        {
            date: t("latest_news.news3.date"),
            title: t("latest_news.news3.title"),
            content: t("latest_news.news3.desc"),
            img: friends
        },
    ]
    return (
        <div className="bg-white rounded-xl">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 md:p-8 p-4 border-b border-gray-100'>
            {t("latest_news.title")}
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:p-8 p-4">
                {news.map((item) => <CardArticle key={item.title} data={item} />)}
            </div>
            <div className='flex items-center justify-center pb-4'>
                <Link to="/news/popular" className='text-sm flex items-center gap-1 text-gray-700 font-light'>
                    <Link2 color='#3B82F6' size="20" />
                    See More
                </Link>
            </div>
        </div>
    );
}

export default LatestNews;