import { Heart, Message, Profile2User } from "iconsax-react";
import DashboardSidebar from "./Sidebar";
import profile from 'Images/people/girlTwo.png'
import { Link } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <main className="xl:container mx-auto p-4 ">
            <div className="grid grid-cols-5 gap-4">
                <DashboardSidebar />
                <div className="col-span-4">
                    <div className="grid grid-cols-4">
                        <div className="col-span-3 ">
                            <h1 className="font-bold text-xl text-blue-500 mb-4">Overview</h1>
                            <div className="grid gap-4 grid-cols-3">
                                <div className="bg-white p-4 rounded-xl flex items-center gap-2">
                                    <div className="bg-blue-100 rounded-full p-4">
                                        <Profile2User size="22" color="#3B82F6" />
                                    </div>
                                    <div>
                                        <span className="block font-bold">2,567</span>
                                        <span className="block text-sm text-gray-600">Weekly Followers</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl flex items-center gap-2">
                                    <div className="bg-blue-100 rounded-full p-4">
                                        <Heart size="22" color="#3B82F6" />
                                    </div>
                                    <div>
                                        <span className="block font-bold">32,167</span>
                                        <span className="block text-sm text-gray-600">Weekly Likes</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl flex items-center gap-2">
                                    <div className="bg-blue-100 rounded-full p-4">
                                        <Message size="22" color="#3B82F6" />
                                    </div>
                                    <div>
                                        <span className="block font-bold">8,543</span>
                                        <span className="block text-sm text-gray-600">Weekly Comments</span>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
                                    <img src={profile} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-blue-500 p-1" />
                                    <div>
                                        <span className="block text-center font-bold">
                                            Setayesh Karimi
                                        </span>
                                        <span className="text-xs block text-center text-gray-500">FrontEnd Developer</span>
                                    </div>
                                    <span className="text-sm text-gray-500 text-center block leading-4">
                                        Passionate about capturing all of life's important occasions.
                                    </span>
                                    <Link to="">
                                        <span className="block text-center font-medium text-sm">
                                            www.setyDev.ir
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;