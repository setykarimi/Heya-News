import { Link } from 'react-router-dom';
import CardNews from './cardNews';
import friends from '../../assets/images/university/friendship.png';
import laptopGirl from '../../assets/images/university/laptopGirl.png';
import camping from '../../assets/images/travel/camping.png';
import boy from '../../assets/images/people/boyOne.png';
import girl from '../../assets/images/people/girlOne.png';
import girl2 from '../../assets/images/people/girlTwo.png';


export default function PopularArticles() {
    const news = [
        { 
            img: friends,
            badge: "University",
            type: "Trending",
            date: "4",
            title: "Report reveals ‘disturbing’ trends in academic salaries",
            author: "Pouria Makhdoomi",
            avatar: boy
        },
        { 
            img: laptopGirl,
            badge: "Students",
            type: "Hot",
            date: "2",
            title: "Homesickness. One of the first challenges",
            author: "Ashvaria Miza",
            avatar: girl2
        },
        { 
            img: camping,
            badge: "Camping",
            type: "Trending",
            date: "10",
            title: "Camping is a broad term but in its essence",
            author: "Ava Moun",
            avatar: girl
        },
        { 
            img: friends,
            badge: "University",
            type: "Trending",
            date: "4",
            title: "Report reveals ‘disturbing’ trends in academic salaries",
            author: "Pouria Makhdoomi",
            avatar: boy
        },
    ]
    
    return (
        <div className='mt-24'>
            <h2 className='text-3xl text-gray-800 font-medium'>Popular Articles</h2>
            <div className='md:flex justify-between items-center mb-4'>
                <p className='text-gray-500 mt-2 font-light'>We share common trends, startegies ideas, opinions, short & long stories from the team behind company.</p>
                <Link to='' className=' outline-blue-500 h-full text-gray-400 text-sm  rounded-lg whitespace-nowrap'>See more</Link>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 lg:gap-2 grid-cols-1 gap-4">
                {
                    news.map(({img, badge, type, date, title, author, avatar}) => <CardNews img={img} badge={badge} type={type} date={date} title={title} author={author} avatar={avatar}/>)
                }
                
            </div>

            
        </div>
    )
}