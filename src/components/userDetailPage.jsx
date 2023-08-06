import React from "react";
import Img1 from "../assets/img/objectLogo.png"
const UserDetailPage = () =>{

    return(
        <div className="mx-4 mt-6">
           <div className="flex justify-between">
           <div className="flex items-center">
                <img src={Img1} alt="avatar" className=" w-[70px] h-[70px] rounded-full mr-4"/>
               <div className="flex flex-col">
               <span className="font-bold text-black">
                    Ali HasanZadeh
                </span>
                <div className="flex items-center">
                <span className="font-bold text-black mr-4">
                    User Name : 
                </span>
                <span className="font-medium text-black">
                    HA@123
                </span>
                </div>
                <div className="flex items-center">
                <span className="font-bold text-black mr-4">
                    Mobile Number : 
                </span>
                <span className="font-medium text-black">
                    +989128790253
                </span>
                </div>
               </div>
            </div>
            <div>
            <div className="flex items-center">
                <span className="font-bold text-black mr-4">
                    Address : 
                </span>
                <span className="font-medium text-black">
                    Ashrafi HW,Tirajeh Complex , No 123
                </span>
                </div>
                <div className="flex items-center">
                <span className="font-bold text-black mr-4">
                    Register Date : 
                </span>
                <span className="font-medium text-black">
                    08/12/2023
                </span>
                </div>
                <div className="flex items-center">
                <span className="font-bold text-black mr-4">
                    Last Visited Date : 
                </span>
                <span className="font-medium text-black">
                    08/12/2023
                </span>
                </div>
            </div>
           </div>
        </div>
    )
}

export default UserDetailPage;