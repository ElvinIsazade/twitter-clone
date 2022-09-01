import React from 'react'

const SideLink = ({name,Icon,active,handlerActive}) => {

  return (
    <li className='group cursor-pointer' onClick={()=>handlerActive(name)}>
        <a href={name.toLowerCase()} className='cursor-pointer block text-xl mb-2 pointer-events-none'>
            <div className='inline-block'>
              <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full py-3 px-3 transform transition-colors duration-300
              ${active==name ? "text-primary-base" : ""}
              `}>
                  <span>
                      <Icon />
                  </span>
                  <span className='ml-4 font-bold'>{name}</span>
              </div>
            </div>
        </a>
    </li>
  )
}

export default SideLink