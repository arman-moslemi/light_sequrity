import React ,{useState} from "react";
import {ReactComponent as Logo} from "../assets/icon/logo.svg"
import Bag from "../assets/icon/bag";
import DashboardIcon from "../assets/icon/dashboard";
import QuestionIcon from "../assets/icon/question";
import AgencyIcon from "../assets/icon/agencyIcon";
import { Link ,useLocation } from "react-router-dom";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/solid';
import BulletIcon from "../assets/icon/bullet";
import UserListIcon from "../assets/icon/userListIcon";
import TicketsIcon from "../assets/icon/ticket";
import './components.css';
const LeftMenu =(props) =>{
   
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [leftMenustyle, setLeftMenustyle] = useState(true);
    const [showAgencyDropDown,setShowAgencyDropDown] = useState(false);
    const [showUserDropDown,setShowUserDropDown] = useState(false);
    const changeStyle = () => {
        console.log("you just clicked");
      
        setLeftMenustyle(!leftMenustyle);
      };
    return(
        <div className={leftMenustyle ? "leftMenu transition-all ease-in-out duration-5000 lg:hidden" : "leftMenuMinimize transition-all ease-in-out duration-5000 lg:hidden"} >

                <button onClick={changeStyle} className="changeWidth flex justify-center items-center rounded-full h-[26px] w-[26px] border border-borderGray border-dashed absolute -right-3 top-8 bg-white">
                {
                    leftMenustyle ?
                    <ChevronLeftIcon className="h-4 w-4 text-['rgb(99, 115, 129)']" />
                    :
                    <ChevronRightIcon className="h-4 w-4 text-['rgb(99, 115, 129)']" />
                }
               
                </button>
                <Logo className={leftMenustyle ? " w-[40px] h-[40px] mt-6 ml-8 mb-6 " : " w-[40px] h-[40px] mt-6 ml-5 mb-6" } />

                <div className={leftMenustyle ? "px-4 " : "px-1"}>
                <span className={leftMenustyle? "block text-[#919eab] font-bold text-sm px-4 pt-4 pb-2" : "hidden"}>
                    Agency
                </span>
                <ul className="my-2">
                <li className="my-5" >
                    <Link to={'/'} className={leftMenustyle && splitLocation[1] ===""   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive ":
                       leftMenustyle && splitLocation[1]!=="" ?
                       "flex flex-row  items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md":
                       !leftMenustyle &&  splitLocation[1] ===""?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive "       
                       : "flex flex-col justify-center items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                       <DashboardIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="" ? "  text-activeText font-bold" : " font-semibold text-base text-[#919eab]"}>
                           Dashboard
                        </span>
                       </Link>
                    </li>
                <li className="my-5">
                    <Link to={'/userList'} className={leftMenustyle && splitLocation[1] ==="userList"   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive ":
                       leftMenustyle && splitLocation[1]!=="userList" ?
                       "flex flex-row  items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md":
                       !leftMenustyle &&  splitLocation[1] ==="userList"?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive "       
                       : "flex flex-col justify-center items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                       <UserListIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="userList" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="userList" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="userList" ? "  text-activeText font-bold" : " font-semibold text-base text-[#919eab]"}>
                           User List
                        </span>
                       </Link>
              
                    </li>
                    <li className="my-5">
                     <div className={leftMenustyle && splitLocation[1] ==="agencyList"   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive justify-between":
                       leftMenustyle && splitLocation[1]!=="agencyList" ?
                       "flex flex-row  items-center  hover:bg-hoverBackground px-3 py-2 rounded-md justify-between":
                       !leftMenustyle &&  splitLocation[1] ==="agencyList"?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive justify-between"       
                       : "flex flex-col justify-center items-center hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                        <div className="flex items-center">
                        <AgencyIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="agencyList" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="agencyList" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="agencyList" ? "  text-activeText font-bold " : " font-semibold text-base text-[#919eab]"}>
                       Agency
                        </span>
                        </div>
                       <button onClick={() =>setShowAgencyDropDown(!showAgencyDropDown)}>
                       {
                        showAgencyDropDown?
                        <ChevronRightIcon className="w-[18px] h-[18px] rotate-90 text-[#919eab]"/>
                        : 
                        <ChevronRightIcon className="w-[18px] h-[18px] text-[#919eab]"/>
                       }
                       </button>
                     </div>
                    {
                     showAgencyDropDown ? 
                     <div className="w-full">
                     <ul className="">
                        <li>
                           <Link to={'/agencyList'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
                             {
                              splitLocation[1] ==="agencyList" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyList" ? "#00a76f" : "#637381"}/>
                              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyList" ? "#00a76f" : "#637381"}/>
                              
                             }
                             <span className={splitLocation[1] ==="agencyList" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
                       Agency List
                        </span>
                           </Link>
                        </li>
                        <li>
                           <Link to={'/agencyCapability'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
                             {
                              splitLocation[1] ==="agencyCapability" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyCapability" ? "#00a76f" : "#637381"}/>
                              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyCapability" ? "#00a76f" : "#637381"}/>
                              
                             }
                             <span className={splitLocation[1] ==="agencyCapability" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
                       Capability
                        </span>
                           </Link>
                        </li>
                        <li>
                           <Link to={'/agencyInstruction'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
                             {
                              splitLocation[1] ==="agencyInstruction" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyInstruction" ? "#00a76f" : "#637381"}/>
                              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyInstruction" ? "#00a76f" : "#637381"}/>
                              
                             }
                             <span className={splitLocation[1] ==="agencyInstruction" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
                       Instructions
                        </span>
                           </Link>
                        </li>
                        <li>
                           <Link to={'/agencyEquipment'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
                             {
                              splitLocation[1] ==="agencyEquipment" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyEquipment" ? "#00a76f" : "#637381"}/>
                              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyEquipment" ? "#00a76f" : "#637381"}/>
                              
                             }
                             <span className={splitLocation[1] ==="agencyEquipment" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
                       Equipment
                        </span>
                           </Link>
                        </li>
                        <li>
                           <Link to={'/agencyShiftType'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
                             {
                              splitLocation[1] ==="agencyShiftType" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyShiftType" ? "#00a76f" : "#637381"}/>
                              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyShiftType" ? "#00a76f" : "#637381"}/>
                              
                             }
                             <span className={splitLocation[1] ==="agencyShiftType" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
                       Shift Type
                        </span>
                           </Link>
                        </li>
                     </ul>
                    </div>
                    :
                    null
                    }
                    </li>
                    <li className="my-5">
                    <Link to={'/object'} className={leftMenustyle && splitLocation[1] ==="object"   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive ":
                       leftMenustyle && splitLocation[1]!=="object" ?
                       "flex flex-row  items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md":
                       !leftMenustyle &&  splitLocation[1] ==="object"?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive "       
                       : "flex flex-col justify-center items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                       <Bag className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="object" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="object" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="object" ? "  text-activeText font-bold" : " font-semibold text-base text-[#919eab]"}>
                           Object
                        </span>
                       </Link>
                    </li>
                    <li className="my-5">
                    <Link to={'/questions'} className={leftMenustyle && splitLocation[1] ==="questions"   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive ":
                       leftMenustyle && splitLocation[1]!=="questions" ?
                       "flex flex-row  items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md":
                       !leftMenustyle &&  splitLocation[1] ==="questions"?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive "       
                       : "flex flex-col justify-center items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                       <QuestionIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="questions" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="questions" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="questions" ? "  text-activeText font-bold " : " font-semibold text-base text-[#919eab]"}>
                       Questions
                        </span>
                       </Link>
                    </li>
                 
                  
                    <li className="my-5">
                    <Link to={'/ticketList'} className={leftMenustyle && splitLocation[1] ==="ticketList"   ?
                       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive ":
                       leftMenustyle && splitLocation[1]!=="ticketList" ?
                       "flex flex-row  items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md":
                       !leftMenustyle &&  splitLocation[1] ==="ticketList"?
                       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive "       
                       : "flex flex-col justify-center items-center align-middle hover:bg-hoverBackground px-3 py-2 rounded-md"}>
                       <TicketsIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="ticketList" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="ticketList" ? "#00a76f" : "#637381"}/>
                        <span className={splitLocation[1] ==="ticketList" ? "  text-activeText font-bold" : " font-semibold text-base text-[#919eab]"}>
                          Tickets
                        </span>
                       </Link>
                    </li>
                </ul>
                </div>
        </div>
    )


}

export default LeftMenu