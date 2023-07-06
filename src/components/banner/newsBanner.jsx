import { Link } from 'react-router-dom';
import Image from 'Images/Banner.png';
import avatar from 'Images/people/boyOne.png';
import { useTranslation } from 'react-i18next';

const NewsBanner = () => {
    const { t } = useTranslation();

    return (
        <div className='p-1 rounded-2xl bg-white'>
            <div className="md:grid flex flex-col grid-cols-2">
                <img src={Image} alt="NewsBanner" loading="lazy" className='rounded-2xl md:h-full h-60 object-cover' />
                <div className='flex flex-col gap-2 justify-between p-6'>
                    <h2 className='text-gray-950 font-bold xl:text-4xl md:text-2xl text-xl'>{t('banner.title')}</h2>
                    <p className='text-gray-800 font-light text-justify'>
                    {t('banner.content')}
                        <Link to="" className='font-medium'> {t('read_more')}...</Link></p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} alt="avatar" className='rounded-full h-8 w-8 object-cover'/>
                            <div>
                                <span className='block font-medium text-sm'> {t('banner.author')}</span>
                            </div>
                        </div>
                        <span className='text-sm text-gray-400'> {t('banner.date')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsBanner;