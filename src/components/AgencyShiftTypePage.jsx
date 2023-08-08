import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import { useParams } from "react-router-dom";
import Trash from "../assets/icon/trash";
import ShiftTypeTable from "./ShiftTable";
const AgencyShiftTypePage = ({data,reCheck,setRecheck}) => {

    const [showAddShiftType,
        setShowAddShiftType] = useState(false);
        const [showNightlyShift,
            setShowNightlyShift] = useState(false);
            const [showDisabledShift,
                setShowDisabledShift] = useState(false);
                
    return (
        <div className="flex p-4 xs:px-0">
            <div className="w-full  bg-white rounded-2xl shadow-object h-auto p-10 xs:px-4 2xs:px-3">
                <div className=" border-b-2 border-borderGray pb-4">

                   <div className="flex 950:flex-col justify-between">
                    <div>
                    <span className="text-[#000] font-bold text-xl">
                       Shift Type
                    </span>

                    <div className="h-7"></div>
                    <p className="text-[#000] font-bold text-base text-justify">
                        *In this section, you must specify the type of shift for the work schedule.
                    </p>
                    </div>
                    <button
                            onClick={()=>setShowAddShiftType(true)}
                            className="px-4 h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500 w-48 sm-xs:w-[100%]">
                           + Add Shift Type
                        </button>
                   </div>

                </div>
           
                 
                 <ShiftTypeTable/>
                     
                    
                 
             
            </div>
            {showAddShiftType
                ? <>  <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div
                    className="relative w-[30%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

                    <div
                        className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                        <div className="flex items-centers justify-left  rounded-t">

                            <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                Add Shift Type
                            </span>

                        </div>
                        <div class="flex flex-col flex-wrap  mt-6">
                            <p
                                className="mt-4 mb-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                Shift Type Title
                            </p>
                            <input
                                class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                type="text"
                                placeholder="Daily,Nightly,..."/>

                        </div>
                        <div class="flex flex-col flex-wrap  mt-2">
                            <p
                                className="mt-4 mb-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                Shift Type Description
                            </p>
                            <textarea
                                class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                type="text"
                                placeholder="Daily,Nightly,..."/>

                        </div>
                        <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3">
                          
                           
                        </div>
                     
                        <div
                            className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                            <button
                                className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowAddShiftType(false)}>
                                Add
                            </button>
                            <button
                                className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowAddShiftType(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
               <div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null

            }
        </div>
    )
}

export default AgencyShiftTypePage