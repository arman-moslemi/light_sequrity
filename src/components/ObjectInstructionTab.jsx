import React, {useState} from "react";
import Pdf from "../assets/icon/pdf";
import ImgIcon from "../assets/icon/image";
import VideoIcon from "../assets/icon/video";
import VoiceIcon from "../assets/icon/voice";
import BluePencil from "../assets/icon/bluePencil";
import Trash from "../assets/icon/trash";
const ObjectInstructionTab = () => {

    return (
        <div className="flex p-4">

            <div className="w-[69%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10">
                <div className=" border-b-2 border-borderGray pb-4">
               <div className="flex justify-between items-center">
               <span className="text-[#000] font-bold text-xl">
                    Object Instructions
                </span>
                <button className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        + Add Instruction
                    </button>
               </div>
                <div className="h-9"></div>
                <span className="text-[#000] font-bold text-base">
                    * You can choose your instruction from the list below or add your desired
                    instruction to this job position.
                </span>
             
                </div>
            

             <ul className="mt-6">
                <li className="py-8 flex items-start border-b-2 border-borderGray border-dashed">
                <input
                    className="largeCheckBox mr-5 mt-[10px] text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxOne"
                   />
                    <div>
                    <div className="flex flex-col">
                    <span className="font-bold text-[#000] text-base mb-1">
                    Guarding the main door of Tiraje complex
                    </span>
                    <p className="font-normal text-[#000] text-sm">
                    Guarding the main door of Tirajeh complex with official uniform, along with a quarter time for the security officer to have lunch
                    </p>
                    </div>
                    <div className="flex items-center flex-wrap my-4">
                        <div className="mr-4 h-8 my-1 px-4 bg-lightGreen rounded-full flex justify-center items-center ">
                            <Pdf/>
                            <span className="text-green font-bold text-sm ml-2">
                            instruction.pdf
                            </span>
                        </div>
                   
                        <div className="mr-4 h-8 my-1 px-4 bg-lightBlue rounded-full flex justify-center items-center ">
                          <ImgIcon/>
                          <span className="text-[#00b8d9] font-bold text-sm ml-2">
                            image2.png
                            </span>
                        </div>
                        <div className="mr-4 h-8 my-1 px-4 bg-lightRed rounded-full flex justify-center items-center ">
                           <VideoIcon/>
                           <span className="text-[#f50100] font-bold text-sm ml-2">
                            video.mp4
                            </span>
                        </div>
                        <div className="mr-4 h-8 my-1 px-4 bg-lightOrange rounded-full flex justify-center items-center ">
                            <VoiceIcon/>
                            <span className="text-[#faaf00] font-bold text-sm ml-2">
                            voice.mp3
                            </span>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#8beaf7] w-[35px] h-[35px] rounded-full bg-lightBlue  flex items-center justify-center">
                            <BluePencil/>
                        </button>
                        <button className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#ffc5b3] w-[35px] h-[35px] rounded-full bg-lightRed  flex items-center justify-center">
                            <Trash/>
                        </button>
                    </div>
                </li>
                <li className="py-8 flex items-start border-b-2 border-borderGray border-dashed">
                <input
                    className="largeCheckBox mr-5 mt-[10px] text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxOne"
                   />
                    <div>
                    <div className="flex flex-col">
                    <span className="font-bold text-[#000] text-base mb-1">
                    Guarding the main door of Tiraje complex
                    </span>
                    <p className="font-normal text-[#000] text-sm">
                    Guarding the main door of Tirajeh complex with official uniform, along with a quarter time for the security officer to have lunch
                    </p>
                    </div>
                    <div className="flex items-center flex-wrap my-4">
                    
                        <div className="mr-4 h-8 my-1 px-4 bg-lightBlue rounded-full flex justify-center items-center ">
                          <ImgIcon/>
                          <span className="text-[#00b8d9] font-bold text-sm ml-2">
                            image.png
                            </span>
                        </div>
                     
                    </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#8beaf7] w-[35px] h-[35px] rounded-full bg-lightBlue  flex items-center justify-center">
                            <BluePencil/>
                        </button>
                        <button className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#ffc5b3] w-[35px] h-[35px] rounded-full bg-lightRed  flex items-center justify-center">
                            <Trash/>
                        </button>
                    </div>
                </li>
                <li className="py-8 flex items-start border-b-2 border-borderGray border-dashed">
                <input
                    className="largeCheckBox mr-5 mt-[10px] text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxOne"
                   />
                    <div>
                    <div className="flex flex-col">
                    <span className="font-bold text-[#000] text-base mb-1">
                    Guarding the main door of Tiraje complex
                    </span>
                    <p className="font-normal text-[#000] text-sm">
                    Guarding the main door of Tirajeh complex with official uniform, along with a quarter time for the security officer to have lunch
                    </p>
                    </div>
                    <div className="flex items-center flex-wrap my-4">
                        <div className="mr-4 h-8 my-1 px-4 bg-lightGreen rounded-full flex justify-center items-center ">
                            <Pdf/>
                            <span className="text-green font-bold text-sm ml-2">
                            instruction.pdf
                            </span>
                        </div>
                        <div className="mr-4 h-8 my-1 px-4 bg-lightBlue rounded-full flex justify-center items-center ">
                          <ImgIcon/>
                          <span className="text-[#00b8d9] font-bold text-sm ml-2">
                            image.png
                            </span>
                        </div>
                        <div className="mr-4 h-8 my-1 px-4 bg-lightBlue rounded-full flex justify-center items-center ">
                          <ImgIcon/>
                          <span className="text-[#00b8d9] font-bold text-sm ml-2">
                            image2.png
                            </span>
                        </div>
                      
                    </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#8beaf7] w-[35px] h-[35px] rounded-full bg-lightBlue  flex items-center justify-center">
                            <BluePencil/>
                        </button>
                        <button className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#ffc5b3] w-[35px] h-[35px] rounded-full bg-lightRed  flex items-center justify-center">
                            <Trash/>
                        </button>
                    </div>
                </li>
             </ul>
         
            </div>
            <div className="w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-6">

                <span className="font-bold text-green text-base">
                    Add Instruction
                </span>
                <div class="w-full mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                            Instruction Title
                        </span>
                        <span className="text-hoverDelBack mx-1">
                            *
                        </span>
                    </label>
                    <input
                        required="true"
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text"
                        placeholder="Type Instruction Title..."/>

                </div>
                <div class="w-full  mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                            Instruction Description
                        </span>
                        <span className="text-hoverDelBack mx-1">
                            *
                        </span>
                    </label>
                    <textarea
                        rows="4"
                        required="true"
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text"
                        placeholder="Type Instruction Description..."/>

                </div>
                <div className="w-full  mt-6">
                    <label className=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2">
                       Upload Files (picture,voice,video,file)
                    </label>
                    <label
                        for="dropzone-file"
                        className="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-32 border border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div
                            className="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                            <svg
                                aria-hidden="true"
                                class="w-8 h-8 mt-1 text-borderGray"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="mb-0 text-xs text-gray-500 dark:text-gray-400">
                                <span className="font-normal font-IRsans text-[#000]">Choose File</span>
                            </p>

                        </div>
                        <input id="dropzone-file" type="file" className="hidden"/>
                    </label>
                    <button className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        + Add Instruction
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ObjectInstructionTab;