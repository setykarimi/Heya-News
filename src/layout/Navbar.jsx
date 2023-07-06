import { ArrowCircleDown, ArrowDown, ArrowDown2, CloseCircle, Flag, LanguageCircle, Menu, Profile, ProfileCircle, SearchNormal1 } from 'iconsax-react';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from 'Images/Logo.svg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Navbar = ({ showMenu, setShowMenu }) => {
    const auth = useSelector(state => state.auth)
    const { t, i18n } = useTranslation();
    const inputRef = useRef()
    const navigate = useNavigate()

    const menuItem = [
        {
            title: t("navbar.home"),
            link: '/'
        },
    
        {
            title: t("navbar.pages"),
            link: ''
        },
        {
            title: t("navbar.docs"),
            link: ''
        },
        
    ]

    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }

    const searchHandler = () => {
        navigate('/news', {
            state: {
                search: inputRef.current.value
            }
        })
    }

    const changeLangHandler = () => {
        localStorage.setItem("lang", i18n.language == "en" ? "fa" : "en")
        i18n.changeLanguage(i18n.language == "en" ? "fa" : "en");
    }

    return (
        <nav className="mx-auto sticky shadow-sm top-0 text-gray-900 bg-white xl:px-12 px-6 py-4 mb-10 z-10">
            <div className="xl:container mx-auto flex justify-between items-center">
                <img src={Logo} alt='heya' className='w-16' />

                <div className={`flex lg:flex-row flex-col lg:static fixed top-0 bottom-0 transition-all z-50 ${!showMenu ? "-right-[100rem]" : "right-0 p-4"}  lg:w-2/3 md:w-1/2 w-3/4 bg-white text-gray-900 lg:h-fit h-[103vh] gap-4 items-center`}>
                    <div className=' w-full mx-auto '>
                        <div className="items-center bg-gray-100 rounded-full p-1 flex gap-2 ">
                            <SearchNormal1 size="24" color="#959EAD" className='mx-2' />
                            <input className="w-full py-1 px-2 bg-gray-100 outline-none text-gray-700 placeholder:text-gray-600 placeholder:text-sm" type='search' placeholder={t("navbar.searchArticle")} ref={inputRef} />
                            <button className="bg-blue-500 h-full text-white py-2 px-4 text-sm rounded-full font-light" onClick={searchHandler}>{t("navbar.search")}</button>
                        </div>
                    </div>
                    {menuItem.map(({ title, link }) => <Link key={title} to={link} className='font-light'>{title}</Link>)}
                    {
                        auth.email ? <Link to="/profile" className='border border-gray-200 text-sm whitespace-nowrap py-1 ml-4 rounded-full font-medium flex items-center px-2'>
                            <ProfileCircle size="28" color="#3B82F6" variant="Bulk" />
                           <span className='block px-2'> Profile</span>
                        </Link> :
                            <Link to="/login" className='border border-gray-200 text-sm whitespace-nowrap py-2 px-6 ml-4 rounded-full font-medium'>{t("navbar.login")}</Link>
                    }
                    <button onClick={changeLangHandler} className='font-bold text-sm flex items-center'>
                    <Flag size="25" color="#B1CDFB" variant="Bulk"/>
                   {i18n.language}
                    </button>
                </div>

                <button className='lg:hidden' onClick={showMenuHandler}>
                    <Menu size="24" color="#444" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;