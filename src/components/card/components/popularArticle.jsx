import boy from 'Images/people/boyOne.png';
import girl from 'Images/people/girlOne.png';
import girl2 from 'Images/people/girlTwo.png';
import camping from 'Images/travel/camping.png';
import friends from 'Images/university/friendship.png';
import laptopGirl from 'Images/university/laptopGirl.png';
import carbon from 'Images/carbonMonoxide/carbonMonoxide.png';
import { Link } from 'react-router-dom';
import CardNews from '../cardNews';
import { useTranslation } from 'react-i18next';


export default function PopularArticles() {
    const { t } = useTranslation();

    const news = [
        {
            img: friends,
            badge: t("badge.university"),
            type: t("type.trending"),
            date: "4",
            title: t("news_list.title1"),
            author: t("names.name1"),
            avatar: boy
        },
        {
            img: laptopGirl,
            badge: t("badge.students"),
            type:  t("type.hot"),
            date: "2",
            title: t("news_list.title2"),
            author: t("names.name2"),
            avatar: girl2
        },
        {
            img: camping,
            badge: t("badge.camping"),
            type: t("type.trending"),
            date: "10",
            title: t("news_list.title3"),
            author: t("names.name3"),
            avatar: girl
        },
        {
            img: carbon,
            badge: t("badge.sickness"),
            type:  t("type.hot"),
            date: "2",
            title: t("news_list.title4"),
            author: t("names.name2"),
            avatar: girl2
        },
    ]

    return (
        <div className='mt-24'>
            <h2 className='text-3xl text-gray-800 font-medium'>{t("popular_articles.popular_article")}</h2>
            <div className='md:flex justify-between items-center mb-4'>
                <p className='text-gray-500 mt-2 font-light'>{t("popular_articles.desc")}</p>
                <Link to='' className=' outline-blue-500 h-full text-gray-400 text-sm  rounded-lg whitespace-nowrap'>{t("read_more")}</Link>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-2 grid-cols-1 gap-4">
                {
                    news.map(({ img, badge, type, date, title, author, avatar }) => <CardNews key={`${title}-${author}`} img={img} badge={badge} type={type} date={date} title={title} author={author} avatar={avatar} />)
                }

            </div>


        </div>
    )
}