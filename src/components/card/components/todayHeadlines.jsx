import { Link } from "react-router-dom";
import motherHood from 'Images/motherhood/motherhood.png';
import avatar2 from 'Images/people/girlFive.png';
import avatar1 from 'Images/people/girlFour.png';
import avatar3 from 'Images/people/girlThree.png';
import camping from 'Images/travel/camping.png';
import friends from 'Images/university/freinds.png';
import rent from 'Images/travel/rent.png';
import carbon from 'Images/carbonMonoxide/carbonMonoxide.png';
import university from 'Images/university/university.png';
import CardExplore from "../cardExplore";
import { useTranslation } from "react-i18next";

export default function TodayHeadlines  () {
    const { t } = useTranslation();

    const news = [
        {
            type: t('badge.family'),
            date: "11:20",
            title: t('today_headlines.list.1'),
            avatar: avatar1,
            author: t('names.name3'),
            img: motherHood
        },
        {
            type: t('badge.travel'),
            date: "09:30",
            title: t('today_headlines.list.2'),
            avatar: avatar2,
            author: t('names.name4'),
            img: camping
        },
        {
            type: t('badge.university'),
            date: "10:00",
            title:t('today_headlines.list.3'),
            avatar: avatar3,
            author: t('names.name5'),
            img: friends
        },
        {
            type: t('badge.travel'),
            date: "14:50",
            title: t('today_headlines.list.4'),
            avatar: avatar2,
            author: t('names.name6'),
            img: rent
        },
        {
            type: t('badge.other'),
            date: "09:30",
            title: t('today_headlines.list.5'),
            avatar: avatar2,
            author:t('names.name1'),
            img: carbon
        },
        {
            type: t('badge.university'),
            date: "10:00",
            title:t('today_headlines.list.6'),
            avatar: avatar1,
            author: t('names.name2'),
            img: university
        }
    ]

    return (
        <div className='mt-24'>
            <h2 className='text-3xl text-gray-800 font-medium'>{t('today_headlines.title')}</h2>
            <div className='md:flex justify-between items-center mb-4'>
                <p className='text-gray-500 mt-2 font-light'>{t('today_headlines.desc')}</p>
                <Link to='' className=' outline-blue-500 h-full text-gray-400 text-sm  rounded-lg whitespace-nowrap'>{t("read_more")}</Link>
            </div>
            <div className="grid lg:md:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mb-8">
                {news.map(({type, date, title, avatar, author, img})=> <CardExplore key={title}
                type={type} date={date} title={title} avatar={avatar} author={author} img={img}/>)}
            </div>
        </div>
    );
}

