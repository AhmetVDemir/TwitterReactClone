import React,{useState} from 'react'
import { SideLink } from '../componenets/SideLink';
import UserBox from '../componenets/UserBox';
import { HomeIcon,ExplorerIcon,NotifyIcon,MessageIcon,AreasIcon,ListsIcon,ProfileIcon } from '../icon/icon'
import tl from "../img/tw.png"

const linkler = [
    {
        name:'Home',
        icon: HomeIcon
    },
    {
        name:'Explorer',
        icon: ExplorerIcon
    },
    {
        name:'Notifycons',
        icon: NotifyIcon
    },
    {
        name:'Messages',
        icon: MessageIcon
    },
    {
        name:'Areas',
        icon: AreasIcon
    },
    {
        name:'List',
        icon: ListsIcon
    },
    {
        name:'Profile',
        icon: ProfileIcon
    }

];

const Sidebar = () => {

    const [aktif,setAktif] = useState('Home')

    const handleMenuItemClick = (name) =>{
        setAktif(name)

    }

    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between w-72 border-green-700 px-2">
          <div>
              <div className=" mt-2 ml-2 mb-4 flex items-center justify-self-center w-12 h-12 rounded-full hover:bg-gray-300" >
              <img src={tl} alt="Twitter" className="w-9 h-9" />
              </div>
              
              <nav className="mb-4" >
                  <ul>
                      {linkler.map(({name,icon})=>(
                          <SideLink key={name} name={name} Icon={icon} aktif={aktif} onMenuItemClick={handleMenuItemClick} />
                      ))}
                  </ul>
              </nav>
              <button className="bg-blue-400 hover:bg-blue-500 text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 " >Tweet</button>
          </div>


          <div>
              <UserBox/>
          </div>

        </div>
    )
}

export default Sidebar
