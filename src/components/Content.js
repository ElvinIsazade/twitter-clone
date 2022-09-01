import React,{useEffect,useState} from 'react';
import {Star} from "../Icons/Icon";
import TwitterBox from './TwitterBox';
import Divider from './Divider';
import db from "./firebase";
import ReelsList  from './ReelsList';

const Content = () => {

  const [tweets,setTweets] = useState([]);

  

  useEffect(()=>{
    db.collection("reels")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot) =>{
      // console.log(snapshot.docs);
      setTweets(snapshot.docs.map((doc)=>{
        return doc.data()
      }))
      
      
    })
  },[])
  
  console.log(tweets);
  

  
  return (
    <main className="flex-1 flex flex-col border-r border-l">
      <header className='flex justify-between items-center border-b border-gray-extralight p-4 sticky top-0 z-10 bg-white'>
        <span className='font-bold text-lg'>Home</span>
        <Star />
      </header>
      <div className='flex space-x-4 px-4 py-4'>
        <img src="https://pbs.twimg.com/profile_images/1562550999092342784/QJ3RyZ8l_400x400.png" alt="User Logo"
              className='w-11 h-11 rounded-full'
          />
          <TwitterBox />
      </div>
      <Divider />
      <ReelsList tweets={tweets} />
    </main>
    
  )
}

export default Content