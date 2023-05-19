import React from 'react'
import image from "../../../public/user.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
// import { MdPublishedWithChanges } from "react-icons/md";
import { VscKey } from "react-icons/vsc";

function Header() {

    const [isMenu, setismenu] = React.useState(false)

    function handleToggle() {
        setismenu(!isMenu);
    }

    function handleLogoutButton() {
    }

    return (
        <div className="h-14 z-[101] lg:h-16 sticky top-0 bg-white w-full flex justify-end items-center px-3 lg:px-5 drop-shadow-md">
            <div>
                <div
                    onClick={handleToggle}
                    className="flex justify-center items-center space-x-1 lg:space-x-3 cursor-pointer">
                    <div className="right w-10 lg:w-10">
                        <img src={image} alt="" className="rounded-full border-2" />
                    </div>
                    <div className='hidden xl:block'>
                        <h1 className="text-sm">Nasir</h1>
                        <p className="text-xs text-slate-500">shadrajput6@gmail.com</p>
                    </div>
                    <div className="text-lg text-slate-600 hidden xl:block">
                        <BiDotsVerticalRounded />
                    </div>
                </div>

                {
                    isMenu && (
                        <div
                            className={` bottom absolute z-[999] top-20 right-5 bg-white drop-shadow-xl rounded-xl w-1/5 `}
                            id="profileTable"
                        >
                            <div className="">
                                <div className="mt-3 mb-3 ">
                                    <NavLink
                                        to="/admin/Updateprofile"
                                        onClick={handleToggle}
                                    >
                                        <div className="bg-white hover:bg-slate-200 text-gray-800 h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6 items-center">
                                            <div className="bg-blue-200 p-2.5 flex justify-center items-center rounded-full">
                                                <FaRegUserCircle className="text-blue-500 text-xl " />
                                            </div>
                                            <span className="md:text-sm xl:text-base font-roboto">
                                                Admin Profile
                                            </span>
                                        </div>
                                    </NavLink>
                                    {/* <NavLink className="nav-link" >
                                        <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6  items-center">
                                            <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                                                <VscKey className="text-blue-500 text-xl" />
                                            </div>
                                            <span className="md:text-sm xl:text-base">
                                                Change Passoword
                                            </span>
                                        </div>
                                    </NavLink> */}

                                    {/* {myData?.is_super_admin ? ( */}
                                    <NavLink to="/admin/Addadmin"
                                        onClick={handleToggle}
                                    >
                                        <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-xl ml-4 mr-4 space-x-6  items-center">
                                            <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                                                <BiUserPlus className="text-blue-500 text-xl" />
                                            </div>
                                            <span className="md:text-sm xl:text-base font-roboto">Add Admin</span>
                                        </div>
                                    </NavLink>
                                    {/* ) : null} */}

                                    {/* {myData?.is_super_admin ? ( */}
                                    <NavLink to="/admin/List"
                                    onClick={handleToggle}
                                    >
                                        <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-xl ml-4 mr-4 space-x-6  items-center">
                                            <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                                                <BiUserPlus className="text-blue-500 text-xl" />
                                            </div>
                                            <span className="md:text-sm xl:text-base font-roboto">
                                                Admin List
                                            </span>
                                        </div>
                                    </NavLink>
                                    {/* ) : null} */}
                                    <hr></hr>
                                    <div
                                        onClick={handleLogoutButton}
                                        className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6  items-center"
                                    >
                                        <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                                            <RiLogoutCircleRLine className="text-blue-500 text-xl" />
                                        </div>
                                        <span className="md:text-sm xl:text-base font-roboto">Logout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default Header