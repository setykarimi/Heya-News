import { Link } from "react-router-dom";
import { CardArticle } from "./cardArticle";

const RecentArticles = () => {
    return ( 
        <div className='mt-24'>
            <h2 className='text-3xl text-blue-950 font-bold mb-4'>Recent Articles</h2>
            <div className='flex justify-between items-center mb-8'>
                <p className='text-gray-800 mt-2 w-1/2'>Here's what we've been up to recently</p>
                <Link to='' className='border border-blue-600 h-full text-blue-600 text-sm font-medium py-2 px-4 rounded-md'>View all </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <CardArticle titleFont="text-xl"/>
                <CardArticle titleFont="text-xl"/>
                <CardArticle titleFont="text-xl"/>
            </div>
        </div>
     );
}
 
export default RecentArticles;