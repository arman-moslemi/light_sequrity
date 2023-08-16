import React, {useState, useEffect} from "react";
import TrashGreen from "../assets/icon/trashGreen";
import Bullet from "../assets/icon/verticalBullet";
import Trash from "../assets/icon/trash";
import Eye from "../assets/icon/eye";
import Pencil from "../assets/icon/pencil";
import {Link} from "react-router-dom";
import Img1 from "../assets/img/objectLogo.png"
import Cookies from 'universal-cookie';
import {apiUrl} from "../commons/inFormTypes";
import axios from "axios";
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/solid";
import Cross from "../assets/icon/cross";
import {useNavigate} from "react-router-dom";
import {axiosReq} from "../commons/axiosReq";
import {useParams} from "react-router-dom";

const ShiftTypeTable = (prop) => {
    const [showEditModal,
        setShowEditModal] = useState(false);

    const [showDelModal,
        setShowDelModal] = useState(false);
        const [reCheck2, setRecheck2] = useState(false);
    const [data,
        setData] = useState([]);
    const params = useParams().id;
    const [Title,
        setTitle] = useState();
    const [Description,
        setDescription] = useState();
    const [id, setID] = useState();

    useEffect(() => {

        auth();
    }, [prop.reCheck,reCheck2]);
    const auth = async() => {
        const cookies = new Cookies();
        var token = cookies.get('token');
        console.log(token)
        if (!token) {
            navigate("/login");
        } else {

            GetData()

        }
    };
    let navigate = useNavigate();

    const GetData = async() => {
        const dataUser = await axiosReq("ObjectShiftTypes");
        console.log(dataUser)
        setData(dataUser)

    }

    const editShift = async() => {
        const cookies = new Cookies();
        console.log(id)

        const delIns = await axios.put(apiUrl+"ObjectShiftTypes/" + id, {
            title: Title,
            value: Description,
            objectShiftTypeId: id
        }, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`

            }
        })
        if (delIns
            ?.status == 200 || delIns
                ?.status == 204 || delIns
                    ?.status == 201) {
            // setShowSuccessModal(true)
            setRecheck2(!reCheck2)
            

            setTitle();
            setDescription();
            setShowEditModal(false)
        } else {
            // setShowErrorModal(true)
        }
    }
    const deleteShift = async() => {
        const cookies = new Cookies();
        

        const delIns = await axios.delete(apiUrl + "ObjectShiftTypes/" + id, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`

            }
        })
        if (delIns
            ?.status == 200 || delIns
                ?.status == 204 || delIns
                    ?.status == 201) {
            // setShowSuccessModal(true)
            setRecheck2(!reCheck2)
            setShowDelModal(false)
            

        } else {
            // setShowErrorModal(true)
        }
    }

    return (
        
        <div className="">
            <div className="flex flex-wrap">
            {data?.map((item) =>
                < div className = "flex justify-between float-left bg-lightGreen break-normal rounded-xl py-4 px-6 mr-4 my-4" > <div>
                        <span className="font-bold text-base text-green">
                            {item.title}
                        </span>
                        <br/>
                        <p className="font-medium text-sm text-black  text-justify">
                            {item.value}
                        </p>
                    </div>
                     < div className = "flex ml-8" > <button
                        onClick={() =>{ setShowEditModal(true);setID(item?.objectShiftTypeId);
                            setTitle(item?.title);setDescription(item?.value)}}
                        className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-lightOrange mr-2">
                        <Pencil className=" fill-mainColor"/>
                    </button> < button className = "w-[40px] h-[40px] flex justify-center items-center rounded-full bg-lightRed" onClick = {
                        () => {setShowDelModal(true);setID(item?.objectShiftTypeId)}
                    } > <Trash className=" fill-red"/> </button>
                    </div >
                    
                    
                     





                    {showEditModal && id==item?.objectShiftTypeId
                ? <> <div
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
                                    value={Title}
                                    onChange={(e) => setTitle(e.target.value)}
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
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="title"
                                    type="text"
                                    placeholder="Daily,Nightly,..."/>

                            </div>
                            <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3"></div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => editShift() }>
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
                </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                : null}
                {showDelModal && id==item?.objectShiftTypeId
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-between  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    Delete Shift Type
                                </span>
                                <button >
                                    <Cross onClick={() => setShowDelModal(false)}
/>
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
                                    onClick={() => deleteShift() }
                                    >
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
                </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                : null}


</div>


            )}
        
        </div>
                
        </div>
    )
}

export default ShiftTypeTable;