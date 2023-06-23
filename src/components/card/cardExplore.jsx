import { More } from 'iconsax-react';
import { useState } from 'react';

const CardExplore = ({ type, date, title, avatar, author, img }) => {
    const [dropDown, setDropDown] = useState(false)

    const openDropDown = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className="bg-white grid grid-cols-3 rounded-xl p-1">
            <div className="col-span-2 flex flex-col gap-2 p-3 ">
                <div className="flex justify-between">
                    <span className='text-gray-400 text-xs block font-light'>{type}</span>
                    <span className='text-gray-400 text-xs block font-light'>Today, {date}</span>
                </div>

                <span className="block text-lg font-medium">
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

            <img src={img} alt="" className="rounded-xl h-[8.5rem] w-full object-cover" />
        </div>
    );
}

export default CardExplore;