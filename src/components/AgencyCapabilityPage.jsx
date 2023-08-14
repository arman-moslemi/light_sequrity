import React, { useState, useEffect } from "react";
import WhitePencil from "../assets/icon/whitePencil";
import WhiteTrash from "../assets/icon/whiteTrash";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import { useParams } from "react-router-dom";
import {apiUrl} from "../commons/inFormTypes";
import axios from "axios";
const AgencyCapability = ({ data }) => {
    const [showAddModal,
        setShowAddModal] = useState(false);
       

        const [showEditModal,
            setShowEditModal] = useState(false);
        const [showDelModal,
            setShowDelModal] = useState(false);
            const [AddCapModal,
                setAddCapModal] = useState(false);
                const [showSuccessModal,
                    setShowSuccessModal] = useState(false);
                    const [showErrorModal,
                        setShowErrorModal] = useState(false);
            const [cap, setCap] = useState([]);
            const [title, setTitle] = useState();
            const [des, setDes] = useState();
            const [editTitle, setEditTitle] = useState();
            const [editDes, setEditDes] = useState();
            const [id, setID] = useState();
            const [prio, setPriority] = useState(0);
            const [usercap, setUserCap] = useState([]);
            const params = useParams().id;
            const [reCheck, setRecheck] = useState(false);
            let navigate = useNavigate();
            const per = [1,2,3,4,5,6,7,8,9,10];
        
            useEffect(() => {
        
                auth();
            }, [reCheck]);
            const auth = async () => {
                const cookies = new Cookies();
                var token = cookies.get('token');
                console.log(token)
                if (!token) {
                    navigate("/login");
                } else {
        
                    GetData()
        
                }
            };
            const GetData = async () => {
                console.log("AllCap")
                const dataUser = await axiosReq("Capability");
                console.log(dataUser)
        
                setCap(dataUser)
            
            }
            const addCap = async () => {
                const cookies = new Cookies();
                var id = cookies.get('ID');
                console.log(id)
                const equi = await axiosReq("Capability", {
                    agencyId: id,
                    name: title,
                    value: prio.toString(),
                    description: des,
                    
                });
                if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
                    setShowSuccessModal(true)
                    setRecheck(!reCheck)
                    setShowAddModal(false)
                }
                else {
                    setShowErrorModal(true)
                }
            }

        const editCap = async () => {
            const cookies = new Cookies();
            var ids = cookies.get('ID');
            console.log(id)
  
            const delIns =
            await axios.put(apiUrl+"Capability/" + id ,
            {
                agencyId: ids,
                name: editTitle,
                description: editDes,
                value: prio.toString(),
                capabilityId:id
            },
                {headers: {
           Authorization: `Bearer ${cookies.get('token')}`
                     
}})
            if (delIns?.status == 200 || delIns?.status == 204 || delIns?.status == 201) {
                // setShowSuccessModal(true)
                setRecheck(!reCheck)
                alert("success")
          
            setEditTitle();
            setEditDes();
            setShowEditModal(false)
            }
            else {
                // setShowErrorModal(true)
            }
        }
        const deleteCap = async () => {
            const cookies = new Cookies();
            var id = cookies.get('ID');
            console.log(id)
         
            const delIns =
            await axios.delete(apiUrl+"Capability/" + id ,
          
                {headers: {
           Authorization: `Bearer ${cookies.get('token')}`
                     
}})
            if (delIns?.status == 200 || delIns?.status == 204 || delIns?.status == 201) {
                // setShowSuccessModal(true)
                setRecheck(!reCheck)
                alert("success")
        
            }
            else {
                // setShowErrorModal(true)
            }
        }
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
                {
                    cap?.map((item)=>{
                        return(
                            <li className="flex items-center justify-between w-full py-4 border-b border-dashed border-borderGray my-3">
                            <div className="flex">
                         
                            <div className="flex flex-col">
                            <span className="font-semibold text-[#000] text-base sm-xs:w-[89%]">
{item?.name}                                                        </span>
                                                        <p className="font-medium text-[#000] text-base sm-xs:w-[89%]"> {item?.description}</p>
                            </div>
                            </div>
        
                            <div className="flex">
                            <button
                                                        onClick={() => {setShowEditModal(true);setID(item?.capabilityId);
                                                            setEditTitle(item?.name);setEditDes(item?.description)}}
                                                        className="mr-2 pr-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#00b8d9]  duration-500  w-[40px] h-[40px]  sm-xs:w-[30px]  sm-xs:h-[30px] rounded-full bg-lightOrange flex items-center justify-center">
                                                        <WhitePencil  className="fill-mainColor"/>
                                                        
                                                    </button>
                                                    <button
                                                        onClick={() => {setShowDelModal(true);setID(item?.capabilityId)}}
                                                        className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 text-[#fff] hover:text-[#f50100] duration-500  w-[40px] h-[40px]  sm-xs:w-[30px]  sm-xs:h-[30px] rounded-full bg-red  flex items-center justify-center">
                                                        <WhiteTrash />
                                                      
                                                    </button>    {showEditModal && id==item?.capabilityId
                        ? <>
                    <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] bg-white rounded-md p-8 md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                       
                <span className="font-bold text-green text-base">
                    Edit  Required Capability
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
                        value={editTitle}
                        onChange={(e)=>setEditTitle(e.target.value)}
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
                        onChange={(e)=>setEditDes(e.target.value)}
                        value={editDes}

                        placeholder="Type Required Cabability Description Here..." />
                        </div>
                    <div className="flex justify-end items-center">
                    <button
    onClick={() => editCap()}
                                    className="px-3 py-2 mb-1 rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Edit
                        </button>
                        <button
                            onClick={() => setShowEditModal(false)}
                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >Cancel
                        </button>
                    </div>
                </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>    </>
                        : null}
                    {showDelModal
                        ? <> <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
        
                                <div
                                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">
        
                                    <div className="flex items-centers justify-left  rounded-t">
        
                                        <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                            Delete Capality
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
                                            onClick={() =>{deleteCap() ;setShowDelModal(false)}}>
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
                        )
                    })
                }
              
             
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
                        onChange={(e)=>setTitle(e.target.value)}
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
                        onChange={(e)=>setDes(e.target.value)}

                        placeholder="Type Required Cabability Description Here..." />
                        </div>
                    <div className="flex justify-end items-center">
                    <button
    onClick={() => addCap()}
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

export default AgencyCapability;