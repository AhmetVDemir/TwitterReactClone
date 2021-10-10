import React from 'react'

export const SideLink = ({name,Icon,aktif,onMenuItemClick}) => {
    const isActive = aktif === name;
    
    return (
        <li onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="cursor-pointer block text-xl group pointer-events-auto">
                <div className="inline-block">
                <div className={`flex items-center group-hover:bg-blue-100 group-hover:text-blue-300 rounded-full pl-3 pr-8 py-3
                ${isActive ? "text-blue-500":""}
                `}>
                    <Icon/>
                    <span className="ml-6 font-bold" >{name}</span>
                </div>
                </div>
            </a>
        </li>
    )
}
