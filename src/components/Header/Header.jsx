import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Logo, LogoutBtn } from '../index'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return (
        <header className="py-4 shadow-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
            <Container>
                <nav className="flex items-center flex-wrap">
                    {/* Logo Section */}
                    <div className="mr-6">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    {/* Hamburger Menu for Small Screens */}
                    <div className="ml-auto lg:hidden">
                        <button
                            id="menu-toggle"
                            className="text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <ul
                        className={`flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:ml-auto lg:space-x-6 items-center transition-all duration-300 ${menuOpen ? "flex" : "hidden"
                            } lg:flex`}
                    >
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <Link
                                            to={item.slug}
                                            className="inline-block px-6 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-teal-400 shadow-md hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:shadow-lg transition-all duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
