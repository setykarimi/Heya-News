import { TickCircle } from "iconsax-react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../assets/images/newsBanner.webp';

const Card = () => {
    return (
        <div className="mx-auto md:grid flex flex-col grid-cols-2 shadow-xl rounded-xl bg-white">
            <img src={Image} alt="NewsBanner" className='rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tr-xl md:h-auto h-64 object-cover' />
            <div className='rounded-tr-xl rounded-br-xl bg-white p-8 flex flex-col justify-between'>
                <span className="badge bg-blue-100 text-blue-800 font-semibold w-fit px-2 py-1 rounded-full text-sm block">FEATURED</span>
                <h4 className='text-blue-950 font-bold xl:text-4xl text-2xl leading-normal'>Cheap Airline Tickets Great Ways To Save</h4>
                <p className='text-gray-800 xl:text-lg'>In this digital generation where information can be easily obtained within seconds, business cards ...</p>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <img src="" alt="" />
                        <div>
                            <span className='block text-blue-950 font-medium'>Viola Manisa</span>
                            <span className='text-gray-800 mt-1 text-sm flex gap-1 italic'>
                                <TickCircle size="20" color="#36B37E" variant="Bulk" />
                                Verified writer</span>
                        </div>
                    </div>
                    <span className='text-gray-800 font-medium'>02 May</span>
                </div>
            </div>
        </div>
    )
}

const CaseStudies = () => {
    return (<div className='mt-24'>
        <h2 className='text-3xl text-blue-950 font-bold mb-4'>Case Studies</h2>
        <div className='flex justify-between items-center mb-8'>
            <p className='text-gray-800 mt-2 w-1/2'>Here's what we've been up to recently</p>
            <Link to='' className='border border-blue-600 h-full text-blue-600 text-sm font-medium py-2 px-4 rounded-md'>View all </Link>
        </div>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
        </Swiper>


    </div>);
}

export default CaseStudies;