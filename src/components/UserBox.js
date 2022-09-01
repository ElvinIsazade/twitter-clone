import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center hover:bg-primary-light cursor-pointer transform transition-colors duration-300 rounded-full py-3 px-4'>
        <img src="https://pbs.twimg.com/profile_images/1562550999092342784/QJ3RyZ8l_400x400.png" alt="User Logo"
            className='w-11 h-11 rounded-full'
        />
        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>Elvin Isazade</span>
            <span className='text-sm text-gray-dark'>@elvin_isazade</span>
        </div>
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
        </div>
    </div>
  )
}

export default UserBox