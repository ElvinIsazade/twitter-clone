import React from 'react';
import {Comment,Cycle,Like,Download} from "../Icons/Icon";

const ReelsItems = ({
    displayName,username,thumbnail,timestamp,content,image
}) => {
  return (
    <article className='flex space-x-3 border-b border-gray-extralight px-4 py-4 cursor-pointer'>
      <img src={thumbnail} alt=" ProfileThumbnail" className='w-11 h-11 rounded-full' />
      <div className='flex-1'>
        <div className='flex items-center'>
          <h3 className='font-bold'>{displayName}</h3>
          <span className='ml-2 text-gray-dark'>{username}</span>
          <div className='w-1 h-1 bg-gray-dark ml-3 rounded-full mx-2' />
          <span>
            {timestamp?.toDate().toLocaleTimeString("az-AZ")}
          </span>
        </div>
        <p className='text-sm'>{content}</p>
        {image && <img src={image} alt="photo" className='my-2 rounded-xl' />}
        <ul className='flex -ml-1 mt-2 justify-between max-w-md'>
          <li className='group flex items-center space-x-2'>
            <div className='w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-primary-light'>
              <Comment />
            </div>
            <span className='group-hover:text-primary-base'>5</span>
          </li>
          <li className='group flex items-center space-x-2'>
            <div className='w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-primary-light'>
              <Cycle />
            </div>
            <span className='group-hover:text-primary-base'>6</span>
          </li>
          <li className='group flex items-center space-x-2'>
            <div className='w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-primary-light'>
              <Like />
            </div>
            <span className='group-hover:text-primary-base'>2</span>
          </li>
          <li className='group flex items-center space-x-2'>
            <div className='w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-primary-light'>
              <Download />
            </div>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ReelsItems