import { SearchNormal1 } from 'iconsax-react'
import Hashtags from '../hashtag/Hashtag';

const SearchArticle = () => {
    return (
        <div className='bg-gray-200 w-11/12 mx-auto mb-10 p-5 rounded-bl-2xl rounded-br-2xl'>
        <div className='lg:w-1/2 md:w-3/4 w-full mx-auto '>
            <div className="items-center bg-white rounded-full p-1 flex gap-2 ">
                <SearchNormal1 size="24" color="#959EAD" className='ml-2' />
                <input className="w-full py-1 px-2 outline-none text-gray-700 placeholder:text-gray-600 placeholder:text-sm" type='search' placeholder='Search article' />
                <button className="bg-blue-500 h-full text-white py-2 px-4 text-sm rounded-full font-light">Search</button>
            </div>
            <Hashtags />
        </div>
        </div>
    );
}

export default SearchArticle;