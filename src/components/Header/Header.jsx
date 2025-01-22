import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Logo, LogoutBtn } from '../index'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
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
                <nav className="flex items-center">
                    <div className="mr-6">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    <ul className="flex ml-auto space-x-6">
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
