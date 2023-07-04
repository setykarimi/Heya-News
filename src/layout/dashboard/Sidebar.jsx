import { Blogger, HomeTrendUp, LanguageSquare, Lock1, Profile } from "iconsax-react";
import Logo from 'Images/Logo.svg';
import { Link } from "react-router-dom";
const DashboardSidebar = () => {
    const menus = [
        {
            title: "Overview",
            icon: <HomeTrendUp size="22" />
        },
        {
            title: "My blog",
            icon: <Blogger size="22" />
        },
        {
            title: "Profile",
            icon: <Profile size="22" />
        },
        {
            title: "Change password",
            icon: <Lock1 size="22" />
        },
        {
            title: "Change language",
            icon: <LanguageSquare size="22" />
        }
    ]

    return (
        <div className="bg-white rounded-xl p-4 h-full">
            <Link to="/">
                <div className="flex justify-center flex-col items-center mb-10 mt-4">
                    <img src={Logo} alt="Profile" className="w-1/2" />
                </div>
                </Link>

            <ul className="list-none flex flex-col gap-4">
                {
                    menus.map(({ title, icon }) => <li key={title} className={`flex items-center gap-2 px-2 py-3 transition-all rounded-xl  ${title == "Overview" ? "bg-blue-100 font-bold text-blue-500" : "text-gray-800 text-sm"}`}>
                        {icon}
                        <span className="">{title}</span>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default DashboardSidebar;