import { TickCircle } from 'iconsax-react';

export const CardArticle = ({ data }) => {
    return (
        <div>
            <img src={data.img} alt={data.title} className='w-full object-cover rounded-lg' />
            <div className='bg-white border border-gray-200 flex flex-col gap-2 p-4 rounded-lg mt-4'>
                <h3 className='font-medium text-gray-800'>
                    {data.title}
                </h3>
                <p className='text-sm line-clamp-5 text-justify text-gray-800'>
                    {data.content}
                </p>
                <span className='text-xs text-gray-500'>{data.date}</span>
            </div>
        </div>
    );
}