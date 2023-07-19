import React from "react";
import Img1 from "../assets/img/objectLogo.png"


const EachObjectDetail = () =>{
    
    return(
        <div className="mt-6 mx-4">
            <div className="flex justify-between">
            <div className="flex items-center">
                <img src={Img1} alt="avatar" className="w-[60px] h-[60px] rounded-full mr-3"/>
               <div className="">
               <span className="text-lg font-bold text-[#000]">
                    Tiraje Complex
                </span>
                <br/>
                <div className="mt-2 w-max px-5 bg-greenHover text-green flex justify-center items-center font-bold text-base h-8 rounded-full">
                    Active
                </div>
               </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                   
                    <span className="text-[#000] font-bold text-sm">
                        start date : 2023/11/11
                    </span>
                </div>
                <div className="flex items-center">
                    
                    <span className="text-[#000] font-bold text-sm">
                        end date : 2023/11/12
                    </span>
                </div>
            </div>
            </div>

        </div>
    )
}

export default EachObjectDetail;