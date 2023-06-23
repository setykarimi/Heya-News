import { More } from 'iconsax-react';
import { useState } from 'react';

const CardNews = ({ img, badge, type, date, title, author, avatar }) => {
    const [dropDown, setDropDown] = useState(false)
    
    const openDropDown = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className="p-1 rounded-2xl relative bg-white w-full">
            <img src={img} alt="" className='h-36 rounded-2xl w-full object-cover' />

            {badge && <span className="badge rounded-full bg-blue-500 text-white text-xs font-light block absolute top-3 left-3 py-1 px-2">
                {badge}</span>}

            <div className='flex flex-col gap-2 p-3'>
                <div className='flex justify-between'>
                    <span className=' text-gray-400 text-xs block font-light'>{type} News</span>
                    <span className='text-gray-400 text-xs font-light'>{date} Days Ago</span>
                </div>

                <span className='text-lg block font-medium'>
                    {title}
                </span>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <img src={avatar} alt="" className='w-6 h-6 object-cover rounded-full' />
                        <span className='text-sm'>{author}</span>
                    </div>

                    <button onClick={openDropDown}>
                        <More size="16" color="#3B82F6" />
                    </button>
                </div>
            </div>

            <div className={`absolute bottom-12 -right-6 bg-white p-5 rounded-lg shadow-xl flex flex-col gap-3 transition-all
            ${dropDown ? "block z-10" : "hidden"}`}>
                <button className='text-sm text-left'>Like</button>
                <button className='text-sm text-left'>Read more</button>
            </div>
        </div>
    );
}

export default CardNews;