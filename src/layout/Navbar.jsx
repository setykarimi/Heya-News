import { CloseCircle, Menu, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
const Navbar = ({ showMenu, setShowMenu }) => {
    const menuItem = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Landings',
            link: ''
        },
        {
            title: "Pages",
            link: ''
        },
        {
            title: 'Docs',
            link: ''
        },
        {
            title: 'Help',
            link: ''
        }
    ]

    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="mx-auto sticky shadow-sm top-0 text-gray-900 bg-white xl:px-12 px-6 py-4 mb-10" style={{zIndex: '9999'}}>
            <div className="xl:container mx-auto flex justify-between items-center">
                <img src={Logo} alt='heya' className='w-16' />

                <div className={`flex lg:flex-row flex-col lg:static fixed top-0 bottom-0 transition-all z-50 ${!showMenu ? "-right-96" : "right-0 p-4"}  lg:w-2/3 w-3/4 bg-white text-gray-900 lg:h-fit h-[103vh] gap-4 items-center`}>
                    <div className=' w-full mx-auto '>
                        <div className="items-center bg-gray-100 rounded-full p-1 flex gap-2 ">
                            <SearchNormal1 size="24" color="#959EAD" className='ml-2' />
                            <input className="w-full py-1 px-2 bg-gray-100 outline-none text-gray-700 placeholder:text-gray-600 placeholder:text-sm" type='search' placeholder='Search article' />
                            <button className="bg-blue-500 h-full text-white py-2 px-4 text-sm rounded-full font-light">Search</button>
                        </div>
                    </div>
                    {menuItem.map(({ title, link }) => <Link key={title} to={link} className='font-light'>{title}</Link>)}
                    <button className='border border-gray-200 whitespace-nowrap py-2 px-6 ml-4 rounded-full font-medium'>Get it Now</button>
                </div>

                <button className='lg:hidden' onClick={showMenuHandler}>


                    <Menu size="24" color="#444" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;