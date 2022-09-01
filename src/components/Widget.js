import React from 'react';
import { Search } from '../Icons/Icon';
import {Timeline} from "react-twitter-widgets";

const Widget = () => {
  return (
    <div className="w-80">
      <div className='flex items-center bg-gray-200 rounded-full space-x-4 p-3 m-3 text-gray-dark focus-within:bg-white focus-within:text-primary-base focus-within:ring-1 focus-within:ring-primary-base'>
        <Search />
        <input type="text" placeholder='Search Twitter' className='placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm' />
      </div>
      <div className='mt-4'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs'
          }}
          options={{
            height: '1000'
          }}
        />
      </div>
    </div>
  )
}

export default Widget