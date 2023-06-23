import Image from '../../assets/images/newsBanner.webp';

const NewsBanner = () => {
    return (
        <div className='xl:w-9/12 lg:w-10/12 md:w-full mx-auto p-1 bg-white rounded-2xl lg:mt-32 md:mt-12 mt-10'>
            <div className="lg:grid flex flex-col grid-cols-2">
                <img src={Image} alt="NewsBanner" className='rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none rounded-tr-2xl lg:h-full h-64 object-cover' />
                <div className='rounded-tr-2xl rounded-br-2xl md:rounded-bl-none rounded-bl-2xl bg-white md:p-4 p-3 flex flex-col md:gap-0 gap-2 justify-between '>
                    <span className="font-light bg-green-600 text-white w-fit px-2 py-1 rounded-full text-xs block">FEATURED</span>
                    <h4 className='text-gray-950 font-bold  text-2xl '>Cheap Airline Tickets Great Ways To Save</h4>
                    <p className='text-gray-800 font-light text-justify'>In this digital generation where information can be easily obtained within seconds, business cards since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <img src="" alt="" />
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