import React, {useState} from "react";
import Alert from "../assets/icon/alert";
import User from "../assets/icon/user";
import {MagnifyingGlassIcon, ArrowLeftOnRectangleIcon} from "@heroicons/react/24/solid";
import DashboardMenuIcon from "../assets/icon/dashboardMenu";
import UserMenuIcon from "../assets/icon/userMenu";
import './components.css';
import Avatar from "../assets/img/avatar.jpg";
import HamburgerMenu from "../assets/icon/hamburger";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/solid';
import {ReactComponent as Logo} from "../assets/icon/logo.svg"
import './components.css';
import { Link ,useLocation } from "react-router-dom";
import DashboardIcon from "../assets/icon/dashboard";
import QuestionIcon from "../assets/icon/question";
import AgencyIcon from "../assets/icon/agencyIcon";
import Bag from "../assets/icon/bag";
import BulletIcon from "../assets/icon/bullet";
import UserListIcon from "../assets/icon/userListIcon";
const Header = () => {
    const [showUserDropDown,setShowUserDropDown] = useState(false);
    const [showAgencyDropDown,setShowAgencyDropDown] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [leftMenustyle, setLeftMenustyle] = useState(true);
    const [HamburgerMenuModal,
        setHamburgerMenuModal] = React.useState(false);
        const changeStyle = () => {
            console.log("you just clicked");
          
            setLeftMenustyle(!leftMenustyle);
          };    
    const [showBox,
        setShowBox] = useState(false);
    return (
        <div
            className=" h-20 bg-white shadow-grayShadow backdrop-blur mx-4 mt-5 md:mx-1 rounded-xl flex justify-between items-center px-10 sm:px-3">
          <div className="flex items-center">
            <button className="hidden lg:block mr-[10px]" onClick={() => setHamburgerMenuModal(true)}>
                <HamburgerMenu/>
            </button>
          <button>
                <MagnifyingGlassIcon className="w-[25px] h-[25px] text-[#637381]"/>
            </button>
          </div>
            <div className="flex">
                <div className="relative">
                    <Alert className="w-[32px] h-[32px] mr-5"/>
                    <div
                        className="w-[20px] h-[20px] bg-[#ff3d57] rounded-full -top-2 flex justify-center items-center absolute right-3">
                        <span className="text-white text-xs">
                            5
                        </span>
                    </div>
                </div>
                <button onClick={() => setShowBox(!showBox)}>
                    <User className="w-[32px] h-[32px]"/>
                </button>
                {showBox
                    ? <div className="z-50  absolute  right-[30px] top-[65px]">
                            <div className="triangle"></div>
                            <div
                                className="z-50 w-[260px] h-auto pb-4 bg-white shadow-whiteShodow  rounded-lg mBg">

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
                    : <></>}
            </div>

            {/* {HamburgerMenuModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] bg-white rounded-md p-8 md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">
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
     </ul>
    </div>
    :
    null
    }
    </li>
    <li className="my-5">
     <div className={leftMenustyle && splitLocation[1] ==="userList"   ?
       "flex flex-row items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive justify-between":
       leftMenustyle && splitLocation[1]!=="userList" ?
       "flex flex-row  items-center  hover:bg-hoverBackground px-3 py-2 rounded-md justify-between":
       !leftMenustyle &&  splitLocation[1] ==="userList"?
       "flex flex-col items-center hover:bg-hoverBackground px-3 py-2 rounded-md bg-menuActive justify-between"       
       : "flex flex-col justify-center items-center hover:bg-hoverBackground px-3 py-2 rounded-md"}>
        <div className="flex items-center">
        <UserListIcon className={leftMenustyle ? "mr-5" : "mr-0"} bodyColor={splitLocation[1] ==="userList" ? "#00a76f" : "#919eab"} headColor={splitLocation[1] ==="userList" ? "#00a76f" : "#637381"}/>
        <span className={splitLocation[1] ==="userList" ? "  text-activeText font-bold " : " font-semibold text-base text-[#919eab]"}>
      Users
        </span>
        </div>
       <button onClick={() =>setShowUserDropDown(!showUserDropDown)}>
       {
        showUserDropDown?
        <ChevronRightIcon className="w-[18px] h-[18px] rotate-90 text-[#919eab]"/>
        : 
        <ChevronRightIcon className="w-[18px] h-[18px] text-[#919eab]"/>
       }
       </button>
     </div>
    {
     showUserDropDown ? 
     <div className="w-full">
     <ul className="">
        <li>
           <Link to={'/userList'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
             {
              splitLocation[1] ==="userList" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="userList" ? "#00a76f" : "#637381"}/>
              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="userList" ? "#00a76f" : "#637381"}/>
              
             }
             <span className={splitLocation[1] ==="userList" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
       Normal Users
        </span>
           </Link>
        </li>
        <li>
           <Link to={'/'} className="font-medium text-sm flex items-center hover:bg-hoverBackground px-8 py-2 mt-2 rounded-md">
             {
              splitLocation[1] ==="agencyCapability" ?  <BulletIcon className={leftMenustyle ? "mr-5" : "mr-0"}  headColor={splitLocation[1] ==="agencyCapability" ? "#00a76f" : "#637381"}/>
              :  <BulletIcon className={leftMenustyle ? "mr-5 w-[15px] h-[15px]" : "mr-0 w-[15px] h-[15px]"}  headColor={splitLocation[1] ==="agencyCapability" ? "#00a76f" : "#637381"}/>
              
             }
             <span className={splitLocation[1] ==="agencyCapability" ? "  text-activeText font-bold text-sm" : " font-semibold text-sm text-[#919eab]"}>
       Employee List
        </span>
           </Link>
        </li>
     
     </ul>
    </div>
    :
    null
    }
    </li>
</ul>
</div>
</div>
                       
              
                </div>
                    </div>
                < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null} */}

        </div>
    )
}

export default Header;