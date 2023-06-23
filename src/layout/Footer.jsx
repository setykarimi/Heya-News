import girl from '../assets/images/people/girlThree.png';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialMedia = [
        {
            title: "Twitter",
            to: ""
        },
        {
            title: "Linkedin",
            to: ""
        },
        {
            title: "Instagram",
            to: ""
        },
        {
            title: "Google",
            to: ""
        },
        {
            title: "Youtube",
            to: ""
        },
    ]

    const product = [
        "LandingPage", "Features", "Documention", "Referral Program", "Pricing"
    ]

    const services = [
        "Documention", "Design", "Themes", "Illustration", "UI Kit"
    ]

    const company = [
        "About", "Terms", "Privacy Policy", "Careers"
    ]

    const more = [
        "Documention", "License", "Changelog"
    ]
    return (
        <div className="bg-gray-900 lg:py-20 lg:px-0 md:py-16 md:px-4 p-4 mt-24">
            <div className="xl:container mx-auto">

                <div className="items-center grid md:grid-cols-2 grid-cols-1 gap-4 pb-20 border-b border-b-gray-800">
                    <div className="flex flex-col gap-8">
                        <span className="block font-medium lg:text-3xl md:text-2xl text-xl text-white">
                            Get our stories delivered From us to your inbox weekly.
                        </span>

                        <div className="flex gap-1 w-full">
                            <input type="text" className="bg-white w-2/3 rounded-lg py-2 px-4 text-sm placeholder:text-xs outline-none" placeholder="Your Email" />
                            <button className="bg-blue-500 h-full text-white py-2 px-4 text-sm rounded-lg font-light">Get Started</button>
                        </div>
                        <span className="block font-light text-gray-400 text-xs">
                            Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following day.
                        </span>
                    </div>

                    <div className="flex justify-center items-center relative">
                        <div className="bg-white p-1 lg:w-1/2 z-10 rounded-2xl">
                            <img src={girl} alt="email" className='w-full rounded-2xl object-cover object-top h-56' />
                            <div className='p-3'>
                                <span className='block font-medium text-lg mb-2'>The best articles every week</span>
                                <span className='block font-light text-gray-400'>Our insurance plans offers are priced the same everywhere else.</span>
                            </div>
                        </div>
                        <div className='lg:block hidden bg-blue-700 w-40 h-40 absolute rounded-lg -top-10 right-28'></div>
                        <div className='lg:block hidden bg-gray-800 w-40 h-40 absolute rounded-lg -bottom-10 left-24'></div>
                    </div>
                </div>

                <div className='grid md:grid-cols-5 grid-cols-2 mt-10 gap-4'>
                    <div className='md:col-span-1 col-span-2 flex flex-col gap-4'>
                        <img src={logo} alt='logo' className='w-20' />
                        <span className='block text-gray-500'>
                            Build a modern and creative website with crealand
                        </span>
                        <div className='flex flex-wrap text-gray-500 gap-4 text-sm'>
                            {socialMedia.map(({ title, to }) => <Link to={to}>{title}</Link>)}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span className='font-medium block text-gray-400'>Product</span>
                        <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                            {product.map((title) => <Link>{title}</Link>)}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span className='font-medium block text-gray-400'>Services</span>
                        <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                            {services.map((title) => <Link>{title}</Link>)}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span className='font-medium block text-gray-400'>Company</span>
                        <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                            {company.map((title) => <Link>{title}</Link>)}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span className='font-medium block text-gray-400'>More</span>
                        <div className='text-gray-500 flex flex-col gap-2 text-sm'>
                            {more.map((title) => <Link>{title}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;