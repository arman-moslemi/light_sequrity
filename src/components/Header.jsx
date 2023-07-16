import React , {useState} from "react";
import Alert from "../assets/icon/alert";
import User from "../assets/icon/user";
import { MagnifyingGlassIcon , ArrowLeftOnRectangleIcon} from "@heroicons/react/24/solid";
import DashboardMenuIcon from "../assets/icon/dashboardMenu";
import UserMenuIcon from "../assets/icon/userMenu";
import './components.css';
import { Link } from "react-router-dom";
import Avatar from "../assets/img/avatar.jpg"
const Header = () =>{

    const [showBox , setShowBox] =useState(false);
    return(
    <div className=" h-20 bg-white shadow-grayShadow backdrop-blur mx-4 mt-5 rounded-xl flex justify-between items-center px-10">
            <button>
            <MagnifyingGlassIcon className="w-[25px] h-[25px] text-[#637381]"/>
            </button>
          <div className="flex">
          <div className="relative">
          <Alert className="w-[32px] h-[32px] mr-5"/>
          <div className="w-[20px] h-[20px] bg-[#ff3d57] rounded-full -top-2 flex justify-center items-center absolute right-3">
            <span className="text-white text-xs">
                5
            </span>
          </div>
          </div>
          <button onClick={()=>setShowBox(!showBox)}>
          <User className="w-[32px] h-[32px]"/>
          </button>
          {
            showBox ? 
            <div className="z-50  absolute  right-[30px] top-[65px]">
            <div className="triangle"></div>
             <div className="z-50 w-[260px] h-auto pb-4 bg-white shadow-whiteShodow  rounded-lg mBg">

               <div className="flex items-center px-4 w-full border-b border-b-borderGray">
                <img src={Avatar} alt="avatar" className="w-[25px] h-[25px] rounded-full"/>
                <div className=" flex flex-col p-4">
                    <p className="font-medium text-[#000] text-sm">
                        Yasaman Taheri
                    </p>
                    <p className="font-normal text-menuItem text-sm">
                       yasaman.taheri76@gmail.com
                    </p>
                </div>
                </div>
                <ul>
                    <li className="my-1 px-4 py-2 hover:bg-hoverBackground">
                       <Link to={'/'} className="flex items-center ">
                        <DashboardMenuIcon className="w-[24px] h-[24px]"/>
                        <span className="ml-3 text-menuItem font-medium text-sm">
                            Dashboard
                        </span>
                        </Link> 
                    </li>
                    <li className="my-1 px-4 py-2 hover:bg-hoverBackground">
                       <Link to={'/'} className="flex items-center ">
                        <UserMenuIcon className="w-[24px] h-[24px]"/>
                        <span className="ml-3 text-menuItem font-medium text-sm">
                            Profile
                        </span>
                        </Link> 
                    </li>
                    <li className="my-1 px-4 pt-2  border-t border-t-borderGray border-dashed">
                       <Link to={'/'} className="flex items-center ">
                        <ArrowLeftOnRectangleIcon className="w-[24px] h-[24px] text-[#ff3d57]"/>
                        <span className="ml-3 text-[#ff3d57] font-bold text-sm">
                            Logout
                        </span>
                        </Link> 
                    </li>
                    </ul>    
            </div>
               </div>
            :
            <></>
          }
          </div>
            
    </div>
    )
}

export default Header;