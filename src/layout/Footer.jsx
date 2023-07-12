import logo from 'Images/Logo.svg';
import girl from 'Images/people/girlThree.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    const socialMedia = [
        {
            title: t("social_media.linkedin"),
            to: ""
        },
        {
            title:t("social_media.twitter"),
            to: ""
        },
        {
            title: t("social_media.google"),
            to: ""
        },
        {
            title: t("social_media.instagram"),
            to: ""
        },
        {
            title: t("social_media.youtube"),
            to: ""
        },
    ]

    const product = [
        t("product.landing"), t("product.features"),
        t("product.documentions"),t("product.referral_program"),t("product.pricing")
    ]

    const services = [
        t("services.documentions"), t("services.design"), t("services.themes"), t("services.illustration"), t("services.ux_kit")
    ]

    const company = [
        t("company.about"), t("company.terms"), t("company.privacy_policy"), t("company.careers")
    ]

    const more = [
        t("more.documention"),t("more.license"),t("more.change_log")
    ]
    return (
        <div className="bg-gray-900 lg:py-20 lg:px-0 md:py-16 md:px-4 p-4 mt-24">
            <div className="xl:container mx-auto">
                <div className='xl:w-10/12 lg:w-10/12 md:w-full mx-auto'>
                    <div className="items-center grid md:grid-cols-2 grid-cols-1 gap-4 pb-20 border-b border-b-gray-800">
                        <div className="flex flex-col gap-8">
                            <span className="block font-medium lg:text-3xl md:text-2xl text-xl text-white">
                                {t("footer.title")}
                            </span>

                            <div className="flex gap-1 w-full">
                                <input type="text" className="bg-white w-2/3 rounded-lg py-2 px-4 text-sm placeholder:text-xs outline-none" placeholder={t("footer.your_email")} />
                                <button className="bg-blue-500 h-full text-white py-2 px-4 text-sm rounded-lg font-light">{t("footer.get_started")}</button>
                            </div>
                            <span className="block font-light text-gray-400 text-xs">
                              {t("footer.desc")}
                            </span>
                        </div>

                        <div className="flex justify-center items-center relative">
                            <div className="bg-white p-1 lg:w-1/2 rounded-2xl" style={{zIndex: '1'}}>
                                <img src={girl} alt="email" className='w-full rounded-2xl object-cover object-top h-56' />
                                <div className='p-3'>
                                    <span className='block font-medium text-lg mb-2'>{t("footer.card.title")}</span>
                                    <span className='block font-light text-gray-400 text-sm'>{t("footer.card.desc")}</span>
                                </div>
                            </div>
                            <div className='lg:block hidden bg-blue-700 w-40 h-40 absolute rounded-lg -top-10 right-28'></div>
                            <div className='lg:block hidden bg-gray-800 w-40 h-40 absolute rounded-lg -bottom-10 left-24'></div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-5 grid-cols-2 mt-10 gap-4'>
                        <div className='md:col-span-1 col-span-2 flex flex-col gap-4'>
                            <img src={logo} alt='logo' className='w-20 filter grayscale contrast-0' />
                            <span className='block text-gray-500'>
                               {t("footer.build")}
                            </span>
                            <div className='flex flex-wrap text-gray-500 gap-4 text-sm'>
                                {socialMedia.map(({ title, to }) => <Link key={title} to={to}>{title}</Link>)}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <span className='font-medium block text-gray-400'>{t("product.title")}</span>
                            <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                                {product.map((title) => <Link key={title}>{title}</Link>)}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <span className='font-medium block text-gray-400'>{t("services.title")}</span>
                            <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                                {services.map((title) => <Link key={title}>{title}</Link>)}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <span className='font-medium block text-gray-400'>{t("company.title")}</span>
                            <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                                {company.map((title) => <Link key={title}>{title}</Link>)}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <span className='font-medium block text-gray-400'>{t("more.title")}</span>
                            <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                                {more.map((title) => <Link key={title}>{title}</Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;