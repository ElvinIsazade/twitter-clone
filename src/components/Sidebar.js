import React,{useState} from 'react'
import TwitterLogo from "../image/Twitter-logo.svg.png"
import { HomeIcon,Explore,Notification,More,Messages,Lists,Profile,Bookmarks,Gallery,Gif,Line,Smile,Location,Search,Calendar,Star,Like,Comment,Cycle } from '../Icons/Icon'
import SideLink from "./SideLink";
import UserBox from './UserBox';

const links =[
  {
    name : "Home",
    icon : HomeIcon
  },
  {
    name : "Explore",
    icon : Explore
  },
  {
    name : "Notification",
    icon : Notification
  },
  {
    name : "Messages",
    icon : Messages
  },
  {
    name : "Lists",
    icon : Lists
  },
  {
    name : "Profile",
    icon : Profile
  },
  {
    name : "More",
    icon : More
  }
]

const Sidebar = () => {
  const [active,setActive] = useState("Home");
  const handlerActive = (name)=>{
    setActive(name)
  }

  return (
    <>
        <div className='flex flex-col justify-between w-72 h-screen sticky top-0'>
          <div>
            <div className='pl-3 hover:bg-gray-lightest w-12 h-12 flex items-center justify-center rounded-full transform transition-colors duration-300'>
              <img src={TwitterLogo} alt="Twitter Logo" />
            </div>
            <nav className='mb-4'>
              <ul>
                {links.map(link =>{
                  return <SideLink 
                  key={link.name}
                  name={link.name} 
                  Icon ={link.icon}
                  active={active}
                  handlerActive={handlerActive}
                    />
                })}
              </ul>
            </nav>
            <button className='bg-primary-base w-11/12 text-white py-3 px-8 rounded-full hover:bg-primary-dark transform transition-colors duration-300 shadow-lg '>Tweet</button>
          </div>
          <UserBox />
        </div>
        
        
    </>
  )
}

export default Sidebar