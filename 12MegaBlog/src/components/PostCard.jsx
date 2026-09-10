import React from 'react'
import appwriteService from '../appwrite/blogServices'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}){
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full h-70 flex justify-center items-center mb-4 overflow-hidden rounded-xl'>
                    <img 
                        src={featuredImage ? appwriteService.getFilePreview(featuredImage) : ''} 
                        alt={title}
                        className='rounded-xl w-full h-full object-cover'
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard