import profile from 'Images/people/girlTwo.png'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const CardProfile = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div className="bg-white rounded-xl h-fit gap-4">
            <div className='bg-blue-500 rounded-tr-xl rounded-tl-xl p-12'>
            </div>
            <img src={profile} className="w-24 h-24 bg-white -mt-12 mb-4 rounded-full object-cover mx-auto border-2 border-blue-500 p-1" />
            <div>
                <span className="block text-center font-bold">
                    Setayesh Karimi
                </span>
                <span className="text-xs block text-center text-gray-500">FrontEnd Developer</span>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <span className="text-sm text-gray-500 text-center block leading-4">
                    Passionate about capturing all of life's important occasions.
                </span>
                <Link to="">
                    <span className="block text-center font-medium text-sm">
                    {auth.email}
                    </span>
                </Link>
                <span className="block text-center text-sm text-gray-700">
                    Tehran, Iran
                </span>

                <div className="grid grid-cols-3">
                    <div>
                        <span className="block text-center text-sm font-bold">404</span>
                        <span className="block text-center text-xs text-gray-500">Post</span>
                    </div>
                    <div>
                        <span className="block text-center text-sm font-bold">13k</span>
                        <span className="block text-center text-xs text-gray-500">Followers</span>
                    </div>
                    <div>
                        <span className="block text-center text-sm font-bold">325</span>
                        <span className="block text-center text-xs text-gray-500">Following</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProfile;