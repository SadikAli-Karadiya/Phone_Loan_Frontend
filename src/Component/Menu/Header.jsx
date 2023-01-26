import React from 'react'
import image from "../../../public/user.png"


function Header() {

    const [isMenu, setismenu] = React.useState(false)

    return (
        <div className="h-14 lg:h-16 w-full flex justify-end items-center px-3 lg:px-5 shadow-2xl">
            <div>
                <div
                    onClick={() => setismenu(true)}
                    className="flex justify-center items-center space-x-1 lg:space-x-3 cursor-pointer">
                    <div className="right w-10 lg:w-11">
                        <img src={image} alt="" className="rounded-full" />
                    </div>
                    <div className='hidden xl:block'>
                        <h1 className="">Nasir</h1>
                        <p className="text-sm text-slate-500">shadrajput6@gmail.com</p>
                    </div>
                    <div className="text-xl text-slate-600 hidden xl:block">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                </div>

                {
                    isMenu &&
                    <div className='bg-white shadow-md p-2 absolute right-2  w-60 h-48 rounded-md mt-4'>
                        <ul>
                            <li onClick={() => setismenu(false)}
                                className="flex items-center justify-between px-3 my-2 cursor-pointer hover:bg-gray-200 py-1 duration-100 rounded-md hover:text-blue-500">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-200 text-blue-500 rounded-full w-9 h-9 flex justify-center items-center text-lg">
                                        <ion-icon name="person-outline"></ion-icon>
                                    </div>
                                    <h1>Admin Profile</h1>
                                </div>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                            <li onClick={() => setismenu(false)}
                                className="flex items-center justify-between px-3  my-2 cursor-pointer hover:bg-gray-200 py-1 duration-100 rounded-md hover:text-blue-500">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-200 text-blue-500 rounded-full w-9 h-9 flex justify-center items-center text-lg">
                                        <ion-icon name="key-outline"></ion-icon>
                                    </div>
                                    <h1>Change Password</h1>
                                </div>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                            <li onClick={() => setismenu(false)}
                                className="flex items-center justify-between px-3  my-2 cursor-pointer hover:bg-gray-200 py-1 duration-100 rounded-md hover:text-blue-500">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-200 text-blue-500 rounded-full w-9 h-9 flex justify-center items-center text-lg">
                                        <ion-icon name="log-out-outline"></ion-icon>
                                    </div>
                                    <h1>Logout</h1>
                                </div>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header