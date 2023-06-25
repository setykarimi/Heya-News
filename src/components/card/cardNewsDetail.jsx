import { Link } from "react-router-dom";

const CardNewsDetail = ({ data }) => {
    console.log(data);
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 p-1 bg-white rounded-xl">
            <img src={data.jetpack_featured_media_url} alt="Image" className="h-42 rounded-xl" />
            <div className='flex flex-col gap-2 justify-between p-6'>
                    <h2 className='text-gray-950 font-bold xl:text-5xl md:text-2xl text-xl'>{data.title.rendered}</h2>
                    <p className='text-gray-800 font-light text-justify'>{data.excerpt.rendered} <Link to={data.link} className='font-medium'>Read more ...</Link></p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className="flex gap-2">
                                <span className='block bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs'>{data.slug}</span>
                                <span className='block bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs'>{data.type}</span>
                            </div>
                        </div>
                        <span className='text-sm text-gray-400'>{data.date}</span>
                    </div>
                </div>
        </div>
    );
}

export default CardNewsDetail;