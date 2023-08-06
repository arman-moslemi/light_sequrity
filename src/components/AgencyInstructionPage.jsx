import React from "react";

import Pdf from "../assets/icon/pdf";
import ImgIcon from "../assets/icon/image";
import VideoIcon from "../assets/icon/video";
import VoiceIcon from "../assets/icon/voice";
import BluePencil from "../assets/icon/bluePencil";
import WhitePencil from "../assets/icon/whitePencil";
import Trash from "../assets/icon/trash";
import WhiteTrash from "../assets/icon/whiteTrash";
import Cross from "../assets/icon/cross";
const AgencyInstructionPage = ({ data }) => {
    const [showAddModal,
        setShowAddModal] = React.useState(false);
       
        const [showEditModal,
            setShowEditModal] = React.useState(false);
        const [showDelModal,
            setShowDelModal] = React.useState(false);
  
   
    return (
        <div className="flex p-4 xs:px-1 mt-4">
            <div
                className="w-full lg-md:w-[100%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10 xs:px-3">
                <div className=" border-b-2 border-borderGray pb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[#000] font-bold text-xl 2xs:text-base">
                            Add Instruction
                        </span>
                        
                        {/* <button

                            className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Submit
                        </button> */}
                    </div>



                    <div className="h-5"></div>
                   <div className="flex items-center 719:flex-col 719:items-start justify-between">
                   <p className="text-[#000] font-bold 2xs:font-medium text-base text-justify">
                        *    You can add instruction in this section</p>
                    <button
                            onClick={() => setShowAddModal(true)}
                            className=" lg-md:block w-max 719:mt-4 sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add Instruction To The List
                        </button>
                   </div>

                </div>
               <ul className="mt-6">
               <li
                                className="py-8 flex items-start border-b-2 border-borderGray border-dashed md-sm:pb-4">
                               <span className="text-green font-bold mr-3">
                                1) 
                               </span>
                                <div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#000] text-base mb-1">
                                        Guarding the main door of the complex
                                   </span>
                                        <p className="font-normal text-[#000] text-sm text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                         </p>
                                    </div>
                                    <div className="flex items-center flex-wrap my-4">
                                        <button
                                            className="mr-4 h-8 my-1 px-4 bg-lightGreen rounded-full flex justify-center items-center ">
                                            <Pdf />
                                            <span className="text-green font-bold text-sm ml-2">
                                                instruction.pdf
                                            </span>
                                        </button>
         
                                        <button
                                            className="mr-4 h-8 my-1 px-4 bg-lightBlue rounded-full flex justify-center items-center ">
                                            <ImgIcon />
                                            <span className="text-[#00b8d9] font-bold text-sm ml-2">
                                                image2.png
                                            </span>
                                        </button>
                                        <button
                                            className="mr-4 h-8 my-1 px-4 bg-lightRed rounded-full flex justify-center items-center ">
                                            <VideoIcon />
                                            <span className="text-[#f50100] font-bold text-sm ml-2">
                                                video.mp4
                                            </span>
                                        </button>
                                        <button
                                            className="mr-4 h-8 my-1 px-4 bg-lightOrange rounded-full flex justify-center items-center ">
                                            <VoiceIcon />
                                            <span className="text-[#faaf00] font-bold text-sm ml-2">
                                                voice.mp3
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hidden items-center md-sm:flex mt-2">
                                        <button
                                            onClick={() => setShowEditModal(true)}
                                            className="mr-2 pr-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#00b8d9]  duration-500 hover:bg-[#8beaf7] w-[110px] sm-xs:w-[50%] h-[35px] rounded-lg bg-[#00b8d9]  flex items-center justify-center">
                                            <WhitePencil />
                                            <span className="ml-2 font-bold text-base">Edit</span>
                                        </button>
                                        <button
                                            onClick={() => setShowDelModal(true)}
                                            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#f50100] duration-500 hover:bg-[#ffc5b3] w-[110px] sm-xs:w-[50%] h-[35px] rounded-lg bg-[#f50100]  flex items-center justify-center">
                                            <WhiteTrash />
                                            <span className="ml-2 font-bold text-base">Delete</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center md-sm:hidden ml-6">
                                    <button
                                        onClick={() => setShowEditModal(true)}
                                        className="mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#8beaf7] w-[35px] h-[35px] rounded-full bg-lightBlue  flex items-center justify-center">
                                        <BluePencil />
                                    </button>
                                    <button
                                        onClick={() => setShowDelModal(true)}
                                        className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 hover:bg-[#ffc5b3] w-[35px] h-[35px] rounded-full bg-lightRed  flex items-center justify-center">
                                        <Trash />
                                    </button>
                                </div>
                            </li>
               </ul>
            </div>
           
            {showAddModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] bg-white rounded-md p-8 md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                       
              <div className="flex justify-between items-center">
              <span className="font-bold text-green text-base">
                    Add  Instruction
                </span>
                <button onClick={() =>setShowAddModal(false)}>
                    <Cross/>
                </button>
              </div>
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
                        
                        placeholder="Type Instruction Title Here ..." />
                
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
                        placeholder="Type Instruction Description..." />

                </div>
                <div className="w-full  mt-6">
                    <label
                        className=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2">
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
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                    <button
                        onClick={()=> setShowAddModal(false)}
                        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        + Add Instruction
                    </button>
                </div>
                </div>
                    </div>
                < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}
                         {showEditModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-between  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Edit Instruction
                                </span>
                                <button onClick={()=>setShowEditModal(false)}>
                                    <Cross/>
                                </button>
                            </div>

                            <div class="flex flex-wrap  mt-6">
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
                                        placeholder="Type Instruction Title..." />

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
                                        placeholder="Type Instruction Description..." />

                                </div>
                                <div className="w-full  mt-6">
                                    <label
                                        className=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2">
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
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>

                                </div>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-[#00b8d9] hover:shadow-hoverShadow hover:bg-[#0a95ad] shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowEditModal(false)}>
                                    Edit
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowEditModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}
            {showDelModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-between  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Delete Instruction
                                </span>
                                <button onClick={()=>setShowDelModal(false)}>
                                    <Cross/>
                                </button>
                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                    Are you sure to delete the selected option?
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-red hover:shadow-hoverShadow hover:bg-[#aa0d0d] shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowDelModal(false)}>
                                    Delete
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowDelModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}

        </div>
    )
}

export default AgencyInstructionPage;