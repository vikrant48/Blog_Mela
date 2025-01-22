import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
import service from '../appwrite/services.js'

function EditPost() {
    const [ post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    if (!post) {
        return <div>Loading...</div>  
    }

    return (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
}

export default EditPost