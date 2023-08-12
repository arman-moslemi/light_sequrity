import React, { useState } from "react";
import Man from "../assets/img/man.png";
import Woman from "../assets/img/woman.png"
import Img1 from "../assets/img/objectLogo.png"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Bullet from "../assets/icon/verticalBullet"
import Trash from "../assets/icon/trash";
import Eye from "../assets/icon/eye";
import Pencil from "../assets/icon/pencil";
import { Link } from "react-router-dom";
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
const TicketListTable = () => {
    const [showAction,
        setShowAction] = useState(false);
    const [showDelete,
        setShowDelete] = useState(false);
    const [showDelModal,
        setShowDelModal] = useState(false);
   
  
        const actionMini = () => {
            setShowDelModal(!showDelModal);
            setShowAction(!showAction)
        }
    const tableRow2 = [
        {
            id: '1',
      
            title:truncate("change password",25),
            priority:'low',
            status:<div className="h-[30px] rounded-full flex justify-center items-center bg-lightOrange">
                <span className="font-bold text-mainColor"> waiting</span>
            </div>,
            registeredDate:'2023/10/12',
            lastUpdateDate:'2023/12/12',
            ticketCategory:'technical department',
            action:<div className="flex justify-center">
                <Link to={'/viewTicket'}>
                <Eye/>
            </Link>
            </div>
            

        },
       
    ]
    const tableBody = tableRow2.map((tableRow2) =>
    <tr key={tableRow2.id} className="border-b border-b-borderGray">
       
     

      <td className="py-4  text-sm text-left font-IRsans pl-6">{tableRow2.title}</td>

      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.ticketCategory}</td>

      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.priority}</td>
      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.status}</td>
      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.registeredDate}</td>
      
      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.lastUpdateDate}</td>
     
      <td className="py-4  text-sm text-center font-IRsans">{tableRow2.action}</td>
     
      </tr> 
    )

   
return (
    <div className="">

        <div className="  w-full overflow-x-auto whitespace-nowrap pb-20">
         
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
                       
                      
                 
                        <th className="text-black  text-left   md:px-3 pl-6">Title</th>
                        
                        <th className="text-black  text-center  md:px-3">Ticket Category</th>
                        <th className="text-black  text-center   md:px-3">Priority</th>
                        <th className="text-black  text-center   md:px-3">Status</th>
                        <th className="text-black  text-center   md:px-3">Registered Date</th>
                       
                        <th className="text-black  text-lefcentert   md:px-3">Last Update</th>
                    
                   
                        <th className="text-black  text-center   md:px-3 pr-2 pl-2">Action</th>
                        
                       

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
     
    </div>
)
}

export default TicketListTable;