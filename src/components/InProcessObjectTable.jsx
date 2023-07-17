import React, {useState} from "react";
import TrashGreen from "../assets/icon/trashGreen";
import Bullet from "../assets/icon/verticalBullet";
import Trash from "../assets/icon/trash";
import Eye from "../assets/icon/eye";
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

const InProcessObjectTable = () => {
    const [showAction,
        setShowAction] = useState(false);
    const [showDelete,setShowDelete] = useState (false);
    const [showDelModal, setShowDelModal] = React.useState(false);
    const handleCheckBoxChecked = () => { 
    
        console.log('The checkbox was toggled'); 
        setShowDelete(!showDelete);
        
      }; 
      const actionMini = () =>{
         setShowDelModal(!showDelModal);
         setShowAction(!showAction)
      }
    const tableRow = [
        {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',

            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                    < button onClick={() => setShowAction(!showAction)}>
                        <Bullet/>
                    </button>
                    {showAction
                        ? <div className="z-50  absolute  right-[55px] top-[2px]">
                                <div className="triangleRight"></div>
                                <div
                                    className="z-50 w-[135px] h-auto  bg-white shadow-whiteShodow  rounded-lg mBg">

                                    <button onClick={actionMini} className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                                        <Trash className="text-[#b71d18] mr-3"/>
                                        <span className="font-medium text-[#b71d18]">
                                            Delete
                                        </span>
                                    </button>
                                    <Link to={'/'} className="flex items-center px-4 w-full py-3 hover:bg-hoverBackground">

                                        
                                        <Eye className="text-[#000] mr-3"/>
                                        <span className="font-medium text-[#000]">
                                            View
                                        </span>
                                     
                                    </Link>
                                </div>
                            </div>
                        : <></>}
                </div>

        }, {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',

            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                    < button >
                        <Bullet/>
                    </button>

                </div>

        }, {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',

            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                    < button >
                        <Bullet/>
                    </button>

                </div>

        }, {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',

            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                    < button >
                        <Bullet/>
                    </button>

                </div>

        }, {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: truncate("Ashrafi St,Laleh Blv,No 125", 30),
            registerDate: '2023/05/05',

            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                    < button >
                        <Bullet/>
                    </button>

                </div>

        }
    ]
    const tableBody = tableRow.map((tableRow) => <tr key={tableRow.id} className="border-b border-b-borderGray">
        <td className="py-4 pl-4">
            <div class=" block">
                <input
                    className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxDelete"
                    onChange={handleCheckBoxChecked}
                    />

            </div>
        </td>
        <td className="py-4 text-sm text-left">{tableRow.number}</td>
        <td className="py-4 text-sm text-left ">

            {tableRow.title}

        </td>
        <td className="py-4 text-sm text-left">{tableRow.address}</td>
        <td className="py-4 text-sm text-left">{tableRow.registerDate}</td>

        <td className="py-4 text-sm text-left">{tableRow.telephone}</td>
        <td className="py-4 text-sm text-left">{tableRow.assigner}</td>
        <td className="py-4 text-sm text-left">{tableRow.lastUpdate}</td>
        <td className="py-4 text-sm text-center">{tableRow.action}</td>
    </tr>)
    return (
        <div className="">

            <div className="  w-full overflow-x-auto whitespace-nowrap ">
                {
                    showDelete ? 
                    <div className="w-full bg-[#c8fad6] h-9 flex items-center px-4 justify-between">
                       
                     <div className="flex items-center">
                     <div class=" block">
                                    <input
                                        className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                        type="checkbox"
                                        value=""
                                        id="delAll"/>

                                </div>

                                <p className="text-green font-Bold text-base ml-5">
                                    1 Selected
                                </p>
                       
                        </div>
                        <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-greenHover mr-2"
                        data-te-toggle="tooltip"
                        data-te-placement="bottom"
                        data-te-ripple-init
                        data-te-ripple-color="#637381"
                        title="delete"
                        onClick={() => setShowDelModal(true)} 
                        >
                        <TrashGreen/>
                        </button>
                        {showDelModal ?
                  <>
                   <div
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                 >
                   <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
                    
                     <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">
                  
                       <div className="flex items-centers justify-left  rounded-t">
                        
                         <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                         Delete
                         </span>
                      
                       </div>
                       
                       <div className="relative flex-auto">
                         <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                         Are you sure want to delete <span>20</span> items?
                         </p>
                       </div>
                      
                       <div className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                         <button
                           className="text-white bg-[#cd053d] hover:shadow-hoverShadow hover:bg-hoverDelBack shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowDelModal(false)}
                         >
                          Delete
                         </button>
                         <button
                           className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowDelModal(false)}
                         >
                           Cancel
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 
                  </>
                  :null
               }
                    </div>
                    :
                    null
                }
                <table class="table-auto w-full">
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
                                        id="checkAll"/>

                                </div>
                            </th>
                            <th className="text-black  text-left   md:px-4">Number</th>
                            <th className="text-black  text-left   md:px-4">Title</th>
                            <th className="text-black  text-left   md:px-4">Address</th>
                            <th className="text-black  text-left  md:px-4">Register date</th>

                            <th className="text-black  text-left   md:px-4">Telephone</th>
                            <th className="text-black  text-left  md:px-4">Assigner</th>
                            <th className="text-black  text-left  md:px-4">Update Date</th>
                            <th className="text-black  text-center  md:px-4">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default InProcessObjectTable;