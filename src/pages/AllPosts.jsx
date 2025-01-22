import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/services.js'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await service.getPosts()
                if (response) {
                    setPosts(response.documents)
                }
            } catch (err) {
                setError("All post Loading failed! ")
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return <div className="text-center text-white py-16 text-lg font-semibold">Loading posts...</div>
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

export default AllPosts