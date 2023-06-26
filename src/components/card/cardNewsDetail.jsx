import { Link } from "react-router-dom";

const CardNewsDetail = ({ data,index }) => {

    return (
        <div className={`flex p-1 gap-4 ${index % 2 ? "md:flex-row-reverse flex-col": "md:flex-row flex-col"} bg-white rounded-xl`}>
            <img src={data.jetpack_featured_media_url} alt="Image" className="md:h-[25rem] h-[15rem] rounded-xl lg:w-1/2 md:w-1/3 w-full object-cover" loading="lazy"/>
            <div className='flex flex-col gap-2 justify-between p-6 lg:w-1/2'>
                <h2 className='text-gray-950 font-bold md:text-2xl text-xl'>{data.title.rendered}</h2>
                <p className='text-gray-800 font-light text-justify'>{(data.excerpt.rendered).replace('<p>', "").replace('</p>', "").replace('[&hellip;]', "")} <Link to={data.link} className='font-medium'>Read more ...</Link></p>
                <div className='flex md:flex-row flex-col gap-2 justify-between md:items-center'>
                        <div className="flex lg:flex-row flex-col gap-2 lg:w-1/2">
                            <span className='block bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs truncate overflow-hidden md:w-1/2 max-w-[20rem]	 w-full'>#{data.slug}</span>
                            <span className='block bg-blue-100 w-fit px-2 py-1 rounded-full font-medium text-blue-800 text-xs'>#{data.type}</span>
                        </div>
                    
                    <span className='text-xs text-gray-400 whitespace-nowrap  block'>{data.date}</span>
                </div>
            </div>
        </div>
    );
}

export default CardNewsDetail;