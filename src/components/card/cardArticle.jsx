import { TickCircle } from 'iconsax-react';

export const CardArticle = ({  img, title, author, date, height= "md:h-[36rem] h-[20rem]" }) => {
    console.log(img);
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className={`rounded-xl flex flex-col justify-between ${height} `}>
            <div className='xl:p-5 p-2'>
                <span className="badge bg-green-50 text-green-600 font-medium w-fit px-3 py-1 rounded-full text-xs block">FEATURED</span>
            </div>
            <div className="bg-gradient-to-t from-[#152532] xl:p-10 p-5 rounded-bl-xl rounded-br-xl">
                <h3 className={`text-white font-semibold xl:text-2xl text-xl leading-normal`}>
                    {title}
                </h3>

                <div className='flex justify-between items-center '>
                    <div className='flex'>
                        <img src="" alt="" />
                        <div className='mt-4'>
                            <span className='block text-white text-sm'>{author}</span>
                            <span className='text-gray-200 mt-1 text-xs flex gap-1 items-center italic'>
                                <TickCircle size="19" color="#36B37E" variant="Bulk" />
                                Verified writer</span>
                        </div>
                    </div>
                    <span className='text-white text-sm'>{date}</span>
                </div>
            </div>
        </div>
    );
}