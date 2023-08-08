import React, { useState } from "react";
import TrashGreen from "../assets/icon/trashGreen";
import Bullet from "../assets/icon/verticalBullet";
import Trash from "../assets/icon/trash";
import Eye from "../assets/icon/eye";
import Pencil from "../assets/icon/pencil";
import { Link } from "react-router-dom";
import Img1 from "../assets/img/objectLogo.png"
import Cookies from 'universal-cookie';
import { apiUrl } from "../commons/inFormTypes";
import axios from "axios";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Cross from "../assets/icon/cross";
export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str.length > len && str.length > 0) {
        let new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        new_str = new_str.length > 0
            ? new_str
            : str.substr(0, len);
        return new_str + "...";
    }
    return str;
};

const ShiftTypeTable = () => {
    const [showEditModal,
        setShowEditModal] = useState(false);

    const [showDelModal,
        setShowDelModal] = useState(false);
   
  

    const tableRow2 = [
        {
            id: '1',
           title : 'Daily',
           startHour:'08:00',
           endHour:'13:00',

            edit:<button onClick={()=>setShowEditModal(true)}>
            <Pencil/>
        </button>,
            delete:<button onClick={()=>setShowDelModal(true)}>
                <Trash/>
            </button>

        },   {
            id: '1',
           title : 'Nightly',
           startHour:'20:00',
           endHour:'24:00',
           edit:<div className="flex justify-center">
           <Link to={'/'} >
           <Pencil/>
       </Link>
       </div>,
       delete:<button>
           <Trash/>
       </button>

        },
        {
            id: '1',
           title : 'Weekend',
           startHour:'08:00',
           endHour:'13:00',
           
           edit:<div className="flex justify-center">
           <Link to={'/'} >
           <Pencil/>
       </Link>
       </div>,
       delete:<button>
           <Trash/>
       </button>

        },
    ]
    const tableBody = tableRow2.map((tableRow2) =>
    <tr key={tableRow2.id} className="border-b border-b-borderGray">
     
      
      <td className="py-4 pr-5 lg-md:px-6 text-sm text-left font-IRsans pl-8">{tableRow2.title}</td>
      <td className="py-4 pr-5 lg-md:px-6 text-sm text-center font-IRsans">{tableRow2.startHour}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.endHour}</td>
      
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.edit}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.delete}</td>
      </tr> 
    )

   
return (
    <div className="">

        <div className="  w-full overflow-x-auto whitespace-nowrap ">
         
                

            
       <div className="p-4 w-[80%] md:w-[100%] mx-auto md:px-0">
       <table class="table-auto w-full   rounded-2xl  shadow-tableShadow mt-5">
                <thead
                    className="bg-hoverBackground h-14 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll"
                    style={{
                        borderRadius: '20px'
                    }}>
                    <tr
                        className="text-black  p-6 whitespace-nowrap overflow-x-scroll"
                        style={{
                            borderRadius: '20px'
                        }}>
                      
                        
                        <th className="text-black  text-left lg-md:px-6   px-3 pl-8">Shift Type Title</th>
                        <th className="text-black  text-center lg-md:px-6  ">Start Hour</th>
                        <th className="text-black  text-center   md:px-3">End Hour</th>
                        <th className="text-black  text-center   md:px-3">Edit</th>
                        <th className="text-black  text-center    md:px-3">Delete</th>
                       
                       

                    </tr>
                </thead>
                <tbody>
                    {tableBody}

                </tbody>

            </table>
       </div>
      
        </div>
    
                     {showDelModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-between  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Delete Shift Type
                                </span>
                                <button onClick={()=>setShowDelModal(false)}>
                                    <Cross/>
                                </button>
                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                    Are you sure to delete the selected shift type?
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
                      {showEditModal
                ? <>  <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div
                    className="relative w-[30%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

                    <div
                        className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                        <div className="flex items-centers justify-left  rounded-t">

                            <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                               Edit Shift Type
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
                                placeholder="Daily"/>

                        </div>
                        <div className="flex items-center my-2 justify-between">
                            <label
                                class=" flex items-center  tracking-wide text-[#000] text-sm font-bold"
                                for="title">
                                <span>
                                    Start Time :
                                </span>
                                <span className="text-hoverDelBack mx-1">
                                    *
                                </span>
                            </label>
                            <div className="flex items-center">
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="08"
                                  
                                    />
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00"
                                    
                                 />
                            </div>
                        </div>
                        <div className="flex items-center my-2 justify-between">
                            <label
                                class=" flex items-center  tracking-wide text-[#000] text-sm font-bold"
                                for="title">
                                <span>
                                   End Time :
                                </span>
                                <span className="text-hoverDelBack mx-1">
                                    *
                                </span>
                            </label>
                            <div className="flex items-center">
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="end Time"
                                    type="text"
                                    placeholder="12"
                                  
                                    />
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="end Time"
                                    type="text"
                                    placeholder="00"
                                    
                                 />
                            </div>
                        </div>
                        <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3">
                          
                           
                        </div>
                     
                        <div
                            className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                            <button
                                className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowEditModal(false)}>
                              Edit
                            </button>
                            <button
                                className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowEditModal(false)}>
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

export default ShiftTypeTable;