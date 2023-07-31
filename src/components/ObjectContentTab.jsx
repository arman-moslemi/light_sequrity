import React from "react";

import CalendarIcons from "../assets/icon/calendarIcon";
import StatusIcon from "../assets/icon/status";
import AddressIcon from "../assets/icon/address";
import PhoneIcons from "../assets/icon/phone";
const ObjectContentTab = ({ data }) => {

    return (
        <div className="flex md:flex-col p-4 xs:px-2">

            <div className="w-[69%] md:w-[98%] mr-[1%] md:mr-0 bg-white rounded-2xl shadow-object h-auto p-10 sm:p-3">

                <span className="text-[#000] font-bold text-xl">
                    {data?.title}                </span>
                <div className="h-9"></div>
                <span className="text-[#000] font-bold text-base">
                    Object Content
                </span>
                <p className="mt-2 mb-4 text-[#000] font-medium leading-8 text-justify">
                    {data?.description}
                </p>
                {
                    data?.hasCoffeMachine ?
                        <span className="text-[#000] font-bold text-base">

                            Possibilities
                        </span>
                        :
                        null
                }
                <div className="flex justify-start flex-wrap my-4">
                    {
                        data?.hasCoffeMachine ? <div
                            className="bg-lightGreen py-2 px-6 rounded-full mr-2 mt-2 text-sm font-bold text-green">
                            Coffee Machine
                        </div>
                            :
                            null
                    }
                    {
                        data?.hasVendingMachine ? <div
                            className="bg-lightRed py-2 px-6 rounded-full mr-2 mt-2 text-sm font-bold text-[#f50100]">
                            Vending Machine
                        </div>
                            :
                            null
                    }
                    {
                        data?.hasBuffet ?
                            <div
                                className="bg-lightBlue py-2 px-6 rounded-full mr-2 mt-2 text-sm font-bold text-[#00b8d9]">
                                Buffet
                            </div>
                            :
                            null
                    }
                    {
                        data?.hasMicrowave ? <div
                            className="bg-lightOrange py-2 px-6 rounded-full mr-2 mt-2 text-sm font-bold text-[#faaf00]">
                            Microwave
                        </div> :
                            null
                    }

                    {data?.hasSecurityRom ?
                        <div
                            className="bg-lightGray py-2 px-6 rounded-full mr-2 mt-2 text-sm font-bold text-[#637381]">
                            Sequrity Room
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <div className="w-[29%] md:w-[98%] ml-[1%]  md:ml-[0%] md:mt-4  bg-white rounded-2xl shadow-object h-min p-10">

                <ul className="md:flex md:justify-between md:flex-wrap">
                    <li className="flex md:mx-3 mb-5 md:my-5 items-center">
                        <StatusIcon />
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Status
                            </span>
                            <span className="text-green  text-sm font-semibold">

                                {data?.status}
                            </span>
                        </div>
                    </li>
                    <li className="flex md:mx-3 my-5 items-center">
                        <CalendarIcons />
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Start Date
                            </span>
                            <span className="text-[#000] font-semibold text-sm">

                                {data?.startDate?.split("T")[0]}
                            </span>
                        </div>
                    </li>
                    <li className="flex md:mx-3 my-5 items-center">
                        <CalendarIcons />
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                End Date
                            </span>
                            <span className="text-[#000] font-semibold text-sm">

                                {data?.endDate?.split("T")[0]}
                            </span>
                        </div>
                    </li>

                    <li className="flex md:mx-3 my-5 items-center">
                        <AddressIcon />
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">

                                Address
                            </span>
                            <span className="text-[#000] font-semibold text-sm">

                                {data?.address}                            </span>
                        </div>
                    </li>
                    <li className="flex md:mx-3 my-5 items-center">
                        <PhoneIcons />
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Phone Number
                            </span>
                            <span className="text-[#000] font-semibold text-sm">

                                {data?.telephoneNumber}
                            </span>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default ObjectContentTab;