import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/services.js'

function PostCard({ $id, title, image }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full max-w-[300px] sm:max-w-full bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200">

        <div className="w-full h-[200px] sm:h-[150px] overflow-hidden flex justify-center items-center mb-4 bg-gray-200 rounded-lg">
          <img
            src={service.getFilePreview(image)}
            alt={title || "Post image preview"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h2 className="text-lg sm:text-base font-bold text-gray-800 truncate">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard