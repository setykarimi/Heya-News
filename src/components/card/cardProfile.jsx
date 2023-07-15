import profile from 'Images/people/girlTwo.png'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const CardProfile = () => {
    const { t } = useTranslation();

    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()
    const logoutHandler = () => {   
        localStorage.removeItem('auth')
        navigate('/')
        window.location.reload()
    }
    return (
        <div className="bg-white rounded-xl h-fit gap-4">
            <div className='bg-blue-500 rounded-tr-xl rounded-tl-xl p-12'>
            </div>
            <img src={profile} className="w-24 h-24 bg-white -mt-12 mb-4 rounded-full object-cover mx-auto border-2 border-blue-500 p-1" />
            <div>
                <span className="block text-center font-bold">
                    {t("profile.name")}
                </span>
                <span className="text-xs block text-center text-gray-500"> {t("profile.job")}</span>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <span className="text-sm text-gray-500 text-center block leading-4">
                {t("profile.desc")}
                </span>
                <Link to="">
                    <span className="block text-center font-medium text-sm">
                    {auth.email}
                    </span>
                </Link>
                <span className="block text-center text-sm text-gray-700">
                {t("profile.location")}
                </span>

                <div className="grid grid-cols-3">
                    <div>
                        <span className="block text-center text-sm font-bold">404</span>
                        <span className="block text-center text-xs text-gray-500">{t("profile.post")}</span>
                    </div>
                    <div>
                        <span className="block text-center text-sm font-bold">13k</span>
                        <span className="block text-center text-xs text-gray-500">{t("profile.followers")}</span>
                    </div>
                    <div>
                        <span className="block text-center text-sm font-bold">325</span>
                        <span className="block text-center text-xs text-gray-500">{t("profile.following")}</span>
                    </div>
                </div>

                <button onClick={logoutHandler} className='text-sm border border-gray-100 w-fit text-gray-500 mx-auto px-4 py-1 rounded-full'>{t("profile.exit")}</button>
            </div>
        </div>
    );
}

export default CardProfile;