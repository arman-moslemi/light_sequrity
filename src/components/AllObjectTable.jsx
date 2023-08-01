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

const AllObjectTable = ({ data,reCheck,setRecheck }) => {
    const [showAction,
        setShowAction] = useState(false);
    const [showDelete,
        setShowDelete] = useState(false);
    const [showDelModal,
        setShowDelModal] = useState(false);
    const [id,
        setID] = useState();
    // const [showEditModal,
    //     setShowEditModal] = React.useState(false);
    const handleCheckBoxChecked = () => {

        console.log('The checkbox was toggled');
        setShowDelete(!showDelete);

    };
    const actionMini = () => {
        setShowDelModal(!showDelModal);
        setShowAction(!showAction)
    }
    const showAct = (id) => {
        setID(id)
        setShowAction(!showAction)
    }
    const tableRow2 = [
        {
            id: '1',
            number: '1',
            title: <div className="flex items-center">
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
            status: <span className="text-green">In progress</span>,
            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                < button onClick={() => setShowAction(!showAction)}>
                    <Bullet />
                </button>
                {showAction
                    ? <div className="z-50  absolute  right-[55px] top-[2px]">
                        <div className="triangleRight"></div>
                        <div
                            className="z-50 w-[135px] h-auto  bg-white shadow-whiteShodow  rounded-lg mBg">
                            <Link
                                to={'/eachObject'}
                                className="flex items-center px-4 w-full py-3 hover:bg-hoverBackground">

                                <Eye className="text-[#000] mr-3" />
                                <span className="font-medium text-[#000]">
                                    View
                                </span>

                            </Link>
                            <Link to={'/editObject/'}

                                className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                                <Pencil className="text-[#000] mr-3" />
                                <span className="font-medium text-[#000]">
                                    Edit
                                </span>
                            </Link>
                            <button
                                onClick={actionMini}
                                className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                                <Trash className="text-[#b71d18] mr-3" />
                                <span className="font-medium text-[#b71d18]">
                                    Delete
                                </span>
                            </button>

                        </div>
                    </div>
                    : <></>}
            </div>

        }, {
            id: '1',
            number: '2',
            title: <div className="flex items-center">
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
            status: <span className="text-[#b71d18]">Completed</span>,
            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                < button >
                    <Bullet />
                </button>

            </div>

        }, {
            id: '1',
            number: '3',
            title: <div className="flex items-center">
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
            status: <span className="text-[#b71d18]">Completed</span>,
            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                < button >
                    <Bullet />
                </button>

            </div>

        }, {
            id: '1',
            number: '4',
            title: <div className="flex items-center">
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
            status: <span className="text-green">In Progress</span>,
            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                < button >
                    <Bullet />
                </button>

            </div>

        }, {
            id: '1',
            number: '5',
            title: <div className="flex items-center">
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
            status: <span className="text-[#b71d18]">Completed</span>,
            telephone: '+98997853255',
            assigner: 'Alica alane',
            lastUpdate: '2023/05/02',
            action: <div className="relative">
                < button >
                    <Bullet />
                </button>

            </div>

        }
    ]
    const tableBody = data?.map((tableRow, index) => <tr key={tableRow.objectId} className="border-b border-b-borderGray">
        <td className="py-4 pl-4">
            <div class=" block">
                <input
                    className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                    type="checkbox"
                    value=""
                    id="checkBoxDelete"
                    onChange={handleCheckBoxChecked} />

            </div>
        </td>
        <td className="py-4 text-sm text-center">{index + 1}</td>
        <td className="py-4 text-sm text-left ">

            {tableRow.title}

        </td>
        <td className="py-4 text-sm text-left">{tableRow.address}</td>
        <td className="py-4 text-sm text-left">{tableRow.registerDate}</td>
        <td className="py-4 text-sm text-left">{tableRow.status}</td>
        <td className="py-4 text-sm text-left">{tableRow.telephoneNumber}</td>
        <td className="py-4 text-sm text-left">{tableRow.assigner}</td>
        <td className="py-4 text-sm text-left">{tableRow.lastUpdate}</td>
        <td className="py-4 text-sm text-center"><div className="relative">
            < button onClick={() => showAct(tableRow.objectId)}>
                <Bullet />
            </button>
            {showAction && id == tableRow.objectId
                ? <div className="z-50  absolute  right-[55px] top-[2px]">
                    <div className="triangleRight"></div>
                    <div
                        className="z-50 w-[135px] h-auto  bg-white shadow-whiteShodow  rounded-lg mBg">
                        <Link
                            to={'/eachObject/'+tableRow.objectId}
                            className="flex items-center px-4 w-full py-3 hover:bg-hoverBackground">

                            <Eye className="text-[#000] mr-3" />
                            <span className="font-medium text-[#000]">
                                View
                            </span>

                        </Link>
                        <Link to={'/editObject/' + tableRow.objectId}

                            className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                            <Pencil className="text-[#000] mr-3" />
                            <span className="font-medium text-[#000]">
                                Edit
                            </span>
                        </Link>
                        <button
                            onClick={()=>{setID(tableRow.objectId);setShowDelModal(true);setShowAction(false)}}
                            className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                            <Trash className="text-[#b71d18] mr-3" />
                            <span className="font-medium text-[#b71d18]">
                                Delete
                            </span>
                        </button>

                    </div>
                </div>
                : <></>}
        </div></td>
    </tr>)

    const deleteObj = async () => {
        const cookies = new Cookies();

        axios.delete(apiUrl + "Objects/"+id,{
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
                          }
             })
            .then(function (response) {


                if (response.request.status == 204) {
                  
                    setRecheck(!reCheck)
                }
              
            })
            .catch(function (error) {
                console.log(error);


            });




    
}
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
                                            className="text-white bg-[#cd053d] hover:shadow-hoverShadow hover:bg-hoverDelBack shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() =>{deleteObj(); setShowDelModal(false)}}>
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
                                    id="checkAll" />

                            </div>
                        </th>
                        <th className="text-black  text-left   md:px-4">Num</th>
                        <th className="text-black  text-left   md:px-4">Title</th>
                        <th className="text-black  text-left   md:px-4">Address</th>
                        <th className="text-black  text-left  md:px-4">Register date</th>
                        <th className="text-black  text-left  md:px-4">Status</th>
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
            <div className=" w-full flex justify-end py-8 px-8">
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
                <p className="text-sm font-medium text-[#000] ml-4">
                    11-15 of 20
                </p>
                <div className="flex items-center ml-4">
                    <button>
                        <ChevronLeftIcon className="text-[#000] w-[15px] h-[15px]" />
                    </button>
                    <button>
                        <ChevronRightIcon className="text-[#000] w-[15px] h-[15px]" />
                    </button>
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

export default AllObjectTable;