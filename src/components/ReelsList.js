import React from 'react';
import ReelsItems from './ReelsItems';

const ReelsList = ({tweets}) => {
    console.log(tweets);
  return (
    <div>
        {
            tweets.map((tweet,index)=>{
                return <ReelsItems {...tweet} key={index} />
            })
        }
    </div>
  )
}

export default ReelsList