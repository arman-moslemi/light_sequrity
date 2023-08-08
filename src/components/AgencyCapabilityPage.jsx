import React from "react";
import WhitePencil from "../assets/icon/whitePencil";
import WhiteTrash from "../assets/icon/whiteTrash";

const AgencyInstruction = ({ data }) => {
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
                            Add Required Capability
                        </span>
                        
                        {/* <button

                            className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Submit
                        </button> */}
                    </div>



                    <div className="h-5"></div>
                   <div className="flex 770:flex-col 770:items-start items-center justify-between">
                   <p className="text-[#000] font-bold 2xs:font-medium text-base text-justify">
                        *    You can add required abilities in this section</p>
                    <button
                            onClick={() => setShowAddModal(true)}
                            className=" lg-md:block mt-0 770:mt-4 w-max sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add Capability To The List
                        </button>
                   </div>

                </div>
               <ul className="mt-6">
                <li className="flex items-center justify-between w-full py-4 border-b border-dashed border-borderGray my-3">
                    <div className="flex">
                    <span className="font-bold text-green mr-6 sm-xs:w-[11%]">
                        1 )
                    </span>
                    <div className="flex flex-col">
                    <span className="font-semibold text-[#000] text-base sm-xs:w-[89%]">
                    Having a second-level driver's license
                                                </span>
                                                <p className="font-medium text-[#000] text-base sm-xs:w-[89%]"> description......</p>
                    </div>
                    </div>

                    <div className="flex">
                    <button
                                                onClick={() => setShowEditModal(true)}
                                                className="mr-2 pr-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#00b8d9]  duration-500  w-[40px] h-[40px]  sm-xs:w-[30px]  sm-xs:h-[30px] rounded-full bg-lightOrange flex items-center justify-center">
                                                <WhitePencil className="fill-mainColor"/>
                                                
                                            </button>
                                            <button
                                                onClick={() => setShowDelModal(true)}
                                                className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#f50100] duration-500  w-[40px] h-[40px]  sm-xs:w-[30px]  sm-xs:h-[30px] rounded-full bg-red  flex items-center justify-center">
                                                <WhiteTrash />
                                              
                                            </button>    {showEditModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Edit Instruction
                                </span>

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

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Delete Instruction
                                </span>

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
                </li>
             
               </ul>
            </div>
           
            {showAddModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] bg-white rounded-md p-8 md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                       
                <span className="font-bold text-green text-base">
                    Add  Required Capability
                </span>
                <div class="w-full mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                             Required Capability Title
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
                        
                        placeholder="Type Required Cabability Title Here..." />
                        <div className="flex flex-col mt-4">
                        <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                             Required Capability Description
                        </span>
                        <span className="text-hoverDelBack mx-1">
                            *
                        </span>
                    </label>
                    <textarea
                        required="true"
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="des"
                        type="text"
                        
                        placeholder="Type Required Cabability Description Here..." />
                        </div>
                    <div className="flex justify-end items-center">
                    <button
                            onClick={() => setShowAddModal(false)}
                            className="px-3 py-2 mb-1 rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add
                        </button>
                        <button
                            onClick={() => setShowAddModal(false)}
                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >Cancel
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

export default AgencyInstruction;