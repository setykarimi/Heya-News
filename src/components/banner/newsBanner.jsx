import { Link } from 'react-router-dom';
import Image from '../../assets/images/Banner.png';
import avatar from '../../assets/images/people/boyOne.png';

const NewsBanner = () => {
    return (
        <div className='p-1 rounded-2xl'>
            <div className="md:grid flex flex-col grid-cols-2 gap-6">
                <img src={Image} alt="NewsBanner" className='rounded-2xl md:h-full h-60 object-cover' />
                <div className='flex flex-col gap-2 justify-between'>
                    <h2 className='text-gray-950 font-bold xl:text-5xl md:text-2xl text-xl'>Cheap Airline Tickets Great Ways To Save</h2>
                    <p className='text-gray-800 font-light text-justify'><span className='font-medium block'>In this digital generation where information can be easily obtained within seconds, business cards since the 1500s.</span> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dived not only five  <Link to="" className='font-medium'>Read more ...</Link></p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} alt="avatar" className='rounded-full h-8 w-8 object-cover'/>
                            <div>
                                <span className='block font-medium text-sm'>Viola Manisa</span>
                            </div>
                        </div>
                        <span className='text-sm text-gray-400'>02 May</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsBanner;