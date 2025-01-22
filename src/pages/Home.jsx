import React, { useEffect, useState } from 'react'
import service from '../appwrite/services.js'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await service.getPosts()
                if (response) {
                    setPosts(response.documents)
                }
            } catch (err) {
                setError("You need to log in to view the posts. Please log in or sign up to continue.")
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return <div className="text-center text-white py-16 text-lg font-semibold">Loading posts...</div>
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <Container>
                    <div className="bg-red-100 p-6 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-red-600">Oops!</h1>
                        <p className="text-lg text-gray-700 mt-2">{error}</p>
                        <div className="mt-4 space-x-4">
                            <Link
                                to="/login"
                                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-block px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-gray-700 hover:text-gray-500">
                                No posts available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="p-6 w-full sm:w-1/2 lg:w-1/4"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

