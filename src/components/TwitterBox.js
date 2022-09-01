import React,{useState} from 'react';
import { Gallery,Gif,Line,Smile,Calendar,Location } from '../Icons/Icon';
import db from "./firebase";
import firebase from "firebase/compat/app";

const TwitterBox = () => {
    const [text,setText] = useState("");

    const sendTweet = ()=>{
        if(text !== ""){
            db.collection("reels").add({
                displayName : "Elvin Isazade",
                username: "@elvin_isazade",
                thumbnail : "https://pbs.twimg.com/profile_images/1562550999092342784/QJ3RyZ8l_400x400.png",
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                content : text,
                image: "https://images.unsplash.com/photo-1611657291636-c141ee8cf7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80"
            })
            setText("");
        }
    }

    return (
        <div className='flex flex-col flex-1 mt-2 px-2'>
            <textarea className='w-full placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent'
                placeholder='What`s happening?'
                onChange={(e)=>setText(e.target.value)}
                value={text}
                />
            <div className='flex justify-between items-center'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Gallery />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Gif />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Line />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Smile />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Calendar />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-300'>
                        <Location />
                    </div>
                </div>
                <button onClick={sendTweet} className='bg-primary-base text-white rounded-full px-4 py-2'>Tweet</button>
            </div>
        </div>
    )
}

export default TwitterBox