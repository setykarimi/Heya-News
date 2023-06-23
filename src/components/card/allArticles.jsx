import { Link } from "react-router-dom";
import motherHood from '../../assets/images/motherhood/motherhood.png';
import girl from '../../assets/images/people/girlFour.png';
import camping from '../../assets/images/travel/camping.png';
import rent from '../../assets/images/travel/rent.png';
import friends from '../../assets/images/university/freinds.png';
import avatar1 from '../../assets/images/people/girlFour.png';
import avatar2 from '../../assets/images/people/girlFive.png';
import avatar3 from '../../assets/images/people/girlThree.png';
import { CardArticle } from "./cardArticle";
import CardExplore from "./cardExplore";

const AllArticles = () => {
    const news = [
        {
            type: "Family",
            date: "11:20",
            title: "Woman Up: It's about time we redefine what ",
            avatar: avatar1,
            author: "Mona Sadri",
            img: motherHood
        },
        {
            type: "Travel",
            date: "09:30",
            title: "Camping Up: It's about time we redefine what ",
            avatar: avatar2,
            author: "Sina Mip",
            img: camping
        },
        {
            type: "University",
            date: "10:00",
            title: "Get Mental Health Content from Therapy",
            avatar: avatar3,
            author: "Sosha Kari",
            img: friends
        }
    ]
    return (
        <div className='mt-24'>
            <h2 className='text-3xl text-gray-800 font-medium'>Today Headlines</h2>
            <div className='md:flex justify-between items-center mb-4'>
                <p className='text-gray-500 mt-2 font-light'>Top today news in the US right now</p>
                <Link to='' className=' outline-blue-500 h-full text-gray-400 text-sm  rounded-lg whitespace-nowrap'>See more</Link>
            </div>
            <div className="grid lg:md:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mb-8">
                {news.map(({type, date, title, avatar, author, img})=> <CardExplore 
                type={type} date={date} title={title} avatar={avatar} author={author} img={img}/>)}
                
            </div>
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <CardArticle
                    img={motherHood}
                    title="Woman Up: It's about time we redefine what being a supermum means"
                    author="Riha Sanire"
                    date="3 december" />
                <CardArticle
                    img={girl}
                    title="Get Mental Health Content from GoodTherapy.org in Your Inbox"
                    author="Mina Sinai"
                    date="4 october" />
                <CardArticle
                    img={friends}
                    title="Get Mental Health Content from GoodTherapy.org in Your Inbox"
                    author="Mina Sinai"
                    date="4 october" />

            </div> */}
            <Link to='' className='mt-4 block w-fit mx-auto border border-blue-600 h-full text-blue-600 text-sm font-medium py-2 px-4 rounded-md'>More Article</Link>
        </div>
    );
}

export default AllArticles;