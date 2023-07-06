import motherHood from 'Images/motherhood/motherhood.png';
import camping from 'Images/travel/camping.png';
import friends from 'Images/university/freinds.png';
import { Link2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { CardArticle } from "../cardArticle";

const LatestNews = () => {

    const news = [
        {
            date: "2020 - present",
            title: "Woman Up: It's about time we redefine what ",
            content: "Delaware Democrat Sarah McBride, who in 2020 became the nation’s first openly transgender state senator, is setting out to make history again — this time as the first out transgender person elected to Congress.",
            img: motherHood
        },
        {
            date: "2020 - 2022",
            title: "Camping Up: It's about time we redefine what ",
            content: "A Christian-owned wellness center, Braidwood, is exempted from the federal law prohibiting employers from discriminating on the basis of sexual orientation and gender identity, a federal appeals court ruled last week.",
            img: camping
        },
        {
            date: "2022 - present",
            title: "Get Mental Health Content from Therapy",
            content: "A federal court blocked Florida’s new drag show law, ruling the state’s effort to bar children from attending “adult live performances,” is overly vague and likely unconstitutional",
            img: friends
        },
    ]
    return (
        <div className="bg-white rounded-xl">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 p-8 border-b border-gray-100'>
                Latest News
            </h2>
            <div className="grid grid-cols-3 gap-8 p-8">
                {news.map((item) => <CardArticle data={item} />)}
            </div>
            <div className='flex items-center justify-center pb-4'>
                <Link to="" className='text-sm flex items-center gap-1 text-gray-700 font-light'>
                    <Link2 color='#3B82F6' size="20" />
                    See More
                </Link>
            </div>
        </div>
    );
}

export default LatestNews;