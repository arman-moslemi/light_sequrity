import React from "react";

import CalendarIcons from "../assets/icon/calendarIcon";
import StatusIcon from "../assets/icon/status";
import AddressIcon from "../assets/icon/address";
import PhoneIcons from "../assets/icon/phone";
const ObjectContentTab = () => {

    return (
        <div className="flex p-4">

            <div className="w-[69%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10">

                <span className="text-[#000] font-bold text-xl">
                    Tirajhe Complex
                </span>
                <div className="h-9"></div>
                <span className="text-[#000] font-bold text-base">
                    Object Content
                </span>
                <p className="mt-2 mb-4 text-[#000] font-medium leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore. et dolore magna lorem mollis. Morbi tristique senectus et
                    netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
                    faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
                    ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                    lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
                    tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed
                    lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
                    scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
                    lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris
                    a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
                    aliquet.
                    <br/>
                    Lorem ipsum doore ma vitae congue mauris rhoncus aenean vel elit scelerisque. In
                    egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
                    senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit
                    sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at
                    consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
                    Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac
                    feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis
                    enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas
                    volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae
                    suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
                    turpis tincidunt id aliquet.
                </p>

                <span className="text-[#000] font-bold text-base">

                    Possibilities
                </span>
                <div className="flex justify-start flex-wrap my-4">
                    <div
                        className="bg-lightGreen py-2 px-6 rounded-full mr-2 text-sm font-bold text-green">
                        Coffee Machine
                    </div>
                    <div
                        className="bg-lightRed py-2 px-6 rounded-full mr-2 text-sm font-bold text-[#f50100]">
                        Vending Machine
                    </div>
                    <div
                        className="bg-lightBlue py-2 px-6 rounded-full mr-2 text-sm font-bold text-[#00b8d9]">
                        Buffet
                    </div>
                    <div
                        className="bg-lightOrange py-2 px-6 rounded-full mr-2 text-sm font-bold text-[#faaf00]">
                        Microwave
                    </div>
                    <div
                        className="bg-lightGray py-2 px-6 rounded-full mr-2 text-sm font-bold text-[#637381]">
                        Sequrity Room
                    </div>
                </div>
            </div>
            <div className="w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-10">
                
                <ul>
                    <li className="flex mb-5 items-center">
                        <StatusIcon/>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Status
                            </span>
                            <span className="text-green  text-sm font-semibold">
                                
                                Active
                            </span>
                        </div>
                    </li>
                    <li className="flex my-5 items-center">
                        <CalendarIcons/>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Start Date
                            </span>
                            <span className="text-[#000] font-semibold text-sm">
                                
                                2023/11/11
                            </span>
                        </div>
                    </li>
                    <li className="flex my-5 items-center">
                        <CalendarIcons/>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                End Date
                            </span>
                            <span className="text-[#000] font-semibold text-sm">
                                
                                2023/12/11
                            </span>
                        </div>
                    </li>
               
                    <li className="flex my-5 items-center">
                        <AddressIcon/>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                
                                Address
                            </span>
                            <span className="text-[#000] font-semibold text-sm">
                                
                                Ashrafi HW , Tirajhe Complex
                            </span>
                        </div>
                    </li>
                    <li className="flex my-5 items-center">
                        <PhoneIcons/>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#7e8b97] font-medium text-base">
                                Phone Number
                            </span>
                            <span className="text-[#000] font-semibold text-sm">
                                
                                +989021564876
                            </span>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default ObjectContentTab;