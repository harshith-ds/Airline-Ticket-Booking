import { useSelector } from "react-redux";
import Login2 from "./Modals/Login2"
import { useEffect, useState } from "react";
import ProfileDrop from "./Modals/ProfileDrop";
import { Link } from "react-router-dom";


function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);
    // Access the user profile state from redux
    const userProfile = useSelector((state) => state.userprofile);
    const { user_name, profile_image, isLoggedIn } = userProfile


    useEffect(() => {


    }, [userProfile]);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img
                        // src="https://5.imimg.com/data5/NU/VZ/AY/SELLER-2624985/flight-air-ticket-booking-api-500x500.png"
                        src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=740&t=st=1686710311~exp=1686710911~hmac=f8c117b2e6da4931aba051ec70ca4d52412d71af5f3838d992ff0e5cc2ba5fe7"
                        className="h-14 mr-3"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        AirBooking
                    </span>
                </Link>

                <div className="flex items-center md:order-2">


                    {isLoggedIn ? (
                        <>
                            <button
                            onClick={()=> setShowDropdown(!showDropdown)}
                             className="pr-2" >{user_name}</button>
                            <button
                                type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                                onClick={()=> setShowDropdown(!showDropdown)}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    // src="https://flowbite.com/docs/images/logo.svg"
                                    src={profile_image}
                                    alt="user photo"
                                />
                            </button>
                           


                        </>

                    ) : (

                        <Login2 />
                    )}


                    {/* Dropdown menu */}
                    {showDropdown && <ProfileDrop showDropdown={()=> setShowDropdown(!showDropdown)} />}


                    {/* mobile menu side hamburger menu */}
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="http://localhost:3000"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:3000/about"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:3000/recent"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Recent Bookings
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:3000/contact"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar