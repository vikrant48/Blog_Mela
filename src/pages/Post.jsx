import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/services'
import { Button, Container } from '../components'
import parse from 'html-react-parser'

function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate("/")
                }
            }).catch((error) => {
                console.error("Error fetching post:", error)
                navigate("/")
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage).then(() => {
                    navigate("/")
                }).catch((error) => {
                    console.error("Error deleting file:", error)
                });
            }
        }).catch((error) => {
            console.error("Error deleting post:", error)
        })
    };

    return post ? (
        <div className="py-8">
            <Container>
                {/* Image and Action Buttons */}
                <div className="w-full max-w-2xl mx-auto flex justify-center mb-6 relative border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={service.getFilePreview(post.image)}
                        alt={post.title}
                        className="rounded-t-xl w-full max-h-[300px] object-cover"
                    />

                    {/* Edit/Delete Buttons */}
                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex space-x-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-500 hover:bg-green-600"
                                    className="text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-500 hover:bg-red-600"
                                onClick={deletePost}
                                className="text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="w-full mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-100 leading-tight">{post.title}</h1>
                </div>

                <div className="w-full text-lg bg-gray-200 text-gray-900 leading-relaxed prose prose-indigo rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-200 hover:shadow-lg min-h-[300px]">
                    {parse(post.content)}
                </div>


            </Container>

        </div>
    ) : (
        <div className="py-8">
            <Container>
                <h1>Post not found</h1>
            </Container>
        </div>
    );
}

export default Post
