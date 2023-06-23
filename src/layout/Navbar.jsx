import { CloseCircle, Menu } from 'iconsax-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
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
        <nav className="mx-auto sticky top-0 text-gray-900 bg-white px-12 py-4 z-50 ">
            <div className="container mx-auto flex justify-between ">
                <img src={Logo} alt='heya' className='w-16' />

                <div className={`flex md:flex-row flex-col md:static fixed top-0 bottom-0 transition-all z-50 ${!showMenu ? "-right-56" : "right-0 p-4"} md:bg-transparent bg-white md:text-gray-900 text-gray-900 md:h-fit h-[103vh] gap-4 items-center`}>
                    {menuItem.map(({ title, link }) => <Link key={title} to={link} className='font-light'>{title}</Link>)}
                    <button className='border border-white py-2 px-6 ml-4 rounded-full font-medium'>Get it Now</button>
                </div>

                <button className={`md:hidden ${showMenu ? "mr-32" : "mr-0"}`} onClick={showMenuHandler}>
                    {showMenu ?
                        <CloseCircle size="24" color="#FFFFFF" />
                        : <Menu size="24" color="#FFFFFF" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;