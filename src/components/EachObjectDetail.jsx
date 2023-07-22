import React from "react";
import Img1 from "../assets/img/objectLogo.png"

const EachObjectDetail = () => {

    return (
        <div className="mt-6 mx-4">
            <div
                className="flex justify-between py-4 border-b-2 border-dashed border-b-borderGray items-center">
                <div className="flex items-center">
                    <img src={Img1} alt="avatar" className="w-[60px] h-[60px] rounded-full mr-3"/>
                    <div className="">
                        <span className="text-lg font-bold text-[#000]">
                            Tiraje Complex
                        </span>
                        <br/>
                        <div
                            className="mt-2 w-max px-5 bg-greenHover text-green flex justify-center items-center font-bold text-base h-8 rounded-full">
                            Active
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center">

                        <div className="flex items-center">
                            <span className="text-[#000] font-bold text-sm mr-1">
                                Start Date :
                            </span>
                            <span className="text-[#000] font-medium text-sm ">
                                2023/11/11
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">

                        <div className="flex items-center">
                            <span className="text-[#000] font-bold text-sm mr-1">
                                Etart Date :
                            </span>
                            <span className="text-[#000] font-medium text-sm ">
                                2023/12/11
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EachObjectDetail;