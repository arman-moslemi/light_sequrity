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

const AgencyListTable = () => {
    const [showAction,
        setShowAction] = useState(false);
    const [showDelete,
        setShowDelete] = useState(false);
    const [showDelModal,
        setShowDelModal] = useState(false);
   
  

    const tableRow2 = [
        {
            id: '1',
            number: '1',
            name: <div className="flex items-center">
                <img
                    src={Img1}
                    alt="objectImg"
                    className="w-[34px] h-[34px] rounded-full mr-2" />
                <span className="font-medium text-[#000]">
                    Tirajhe Complex
                </span>
            </div>,
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',
            status: <span className="text-green font-bold">Active</span>,
           
            
            expireDate: '2023/05/02',
            edit:<Link to={'/editAgency'} >
                <Pencil/>
            </Link>,
            delete:<button>
                <Trash/>
            </button>

        }, {
            id: '1',
            number: '1',
            name: <div className="flex items-center">
                <img
                    src={Img1}
                    alt="objectImg"
                    className="w-[34px] h-[34px] rounded-full mr-2" />
                <span className="font-medium text-[#000]">
                    Tirajhe Complex
                </span>
            </div>,
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',
            status: <span className="text-red font-bold">DeActive</span>,
           
            
            expireDate: '2023/05/02',
            edit:<Link to={'/editAgency'} >
            <Pencil/>
        </Link>,
            delete:<button onClick={()=>setShowDelModal(true)}>
                <Trash/>
            </button>

        }, {
            id: '1',
            number: '1',
            name: <div className="flex items-center">
                <img
                    src={Img1}
                    alt="objectImg"
                    className="w-[34px] h-[34px] rounded-full mr-2" />
                <span className="font-medium text-[#000]">
                    Tirajhe Complex
                </span>
            </div>,
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',
            status: <span className="text-green font-bold">Active</span>,
           
            
            expireDate: '2023/05/02',
            edit:<Link to={'/editAgency'} >
                <Pencil/>
            </Link>,
            delete:<button>
                <Trash/>
            </button>

        }
    ]
    const tableBody = tableRow2.map((tableRow2) =>
    <tr key={tableRow2.id} className="border-b border-b-borderGray">
         <td className="py-4 text-sm text-left pr-4 font-IRsans px-4">
         <input
                    className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxDelete"
                     />
         </td>
      
      <td className="py-4 pr-5 lg-md:px-6 text-sm text-left font-IRsans">{tableRow2.name}</td>
      <td className="py-4 pr-5 lg-md:px-6 text-sm text-left font-IRsans">{tableRow2.address}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.registerDate}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.status}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.expireDate}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.edit}</td>
      <td className="py-4 px-5 text-sm text-center font-IRsans">{tableRow2.delete}</td>
      </tr> 
    )

   
return (
    <div className="">

        <div className="  w-full overflow-x-auto whitespace-nowrap ">
         
                    {showDelModal
                        ? <> <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                                <div
                                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                    <div className="flex items-centers justify-left  rounded-t">

                                        <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                            Delete
                                        </span>

                                    </div>

                                    <div className="relative flex-auto">
                                        <p
                                            className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                            Are you sure want to delete
                                            this item?
                                        </p>
                                    </div>

                                    <div
                                        className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                                        <button
                                        onClick={() => setShowDelModal(false)}
                                            className="text-white bg-[#cd053d] hover:shadow-hoverShadow hover:bg-hoverDelBack shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            >
                                            Delete
                                        </button>
                                        <button
                                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowDelModal(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                        : null}

            
       <div className="p-4">
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
                        <th className="text-black  text-left pl-4   md:px-4">
                            <div class=" block">
                                <input
                                    className="text-green bg-white border-borderGray border-1 focus:ring-mainColor checked:bg-mainColor"
                                    type="checkbox"
                                    value=""
                                    id="checkAll" />

                            </div>
                        </th>
                        
                        <th className="text-black  text-left lg-md:px-6   px-3">Agency Name</th>
                        <th className="text-black  text-left lg-md:px-6  px-3">Address</th>
                        <th className="text-black  text-center   md:px-3">Register date</th>
                        <th className="text-black  text-center   md:px-3">Status</th>
                        <th className="text-black  text-center    md:px-3">Expire date</th>
                        <th className="text-black  text-center   md:px-3">Edit</th>
                        <th className="text-black  text-center   md:px-3">Delete</th>
                       

                    </tr>
                </thead>
                <tbody>
                    {tableBody}

                </tbody>

            </table>
       </div>
            <div className=" w-full flex justify-end lg-md:justify-start py-4 px-8 xs:flex-col">
                <div className="flex">
                <p className="text-sm text-[#000] font-bold">
                    Row per pages :
                </p>
                <form action="">

                    <select
                        id="rowsPerPage"
                        name="rowsPerPage"
                        className="px-2 bg-white rounded-sm ">
                        <option value="five">5</option>
                        <option value="ten">10</option>
                        <option value="twenyfive">25</option>
                        <option value="fifty">50</option>
                    </select>

                </form>
                </div>
                <div className="flex">
                <p className="text-sm font-medium text-[#000] ml-4 mt-0 xs:ml-0 xs:mt-2">
                    11-15 of 20
                </p>
                <div className="flex items-center ml-4 mt-0 xs:mt-2">
                    <button>
                        <ChevronLeftIcon className="text-[#000] w-[15px] h-[15px]" />
                    </button>
                    <button>
                        <ChevronRightIcon className="text-[#000] w-[15px] h-[15px]" />
                    </button>
                </div>
                </div>
            </div>
        </div>
        {/* {showEditModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Edit Object
                                </span>

                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <div class="w-full  px-3 mb-6 flex flex-col">
                                    <label
                                        class="font-bold text-[#000] mb-3"
                                        for="title">
                                       Title
                                    </label>
                                    <input
                                        class="bg-white  border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="title"
                                        type="text"
                                        placeholder="Tirajhe Complex"/>
                                  
                                </div>
                              
                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-white bg-[#cd053d] hover:shadow-hoverShadow hover:bg-hoverDelBack shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowEditModal(false)}>
                                    Delete
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowEditModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div>
                 </>
                  :null} */}
    </div>
)
}

export default AgencyListTable;