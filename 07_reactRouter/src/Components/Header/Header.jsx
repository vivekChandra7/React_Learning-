import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link to="#" className="text-gray-800 px-4 py-2">
                            Log in
                        </Link>
                        <Link to="#" className="text-white bg-orange-700 px-4 py-2 rounded">
                            Get started
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:w-auto lg:order-1">
                        <ul className="flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                      `${isActive ? "text-orange-700 " : "text-gray-700 "}
                                      block py-2 pr-4 pl-3 duration-200 hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
