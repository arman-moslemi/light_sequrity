import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import Cookies from 'universal-cookie';
import Cross from "../assets/icon/cross";
const AgencyEquipmentPage = ({ data }) => {
    const [showAddModal,
        setShowAddModal] = React.useState(false);

    const [showEditModal,
        setShowEditModal] = React.useState(false);
    const [showDelModal,
        setShowDelModal] = React.useState(false);
    const [AddObjectEquModal,
        setAddObjectEquModal] = React.useState(false);
    const [equ, setEqu] = useState();
    const [equUser, setEquUser] = useState();
    const [title, setTitle] = useState();
    const [totalCount, setTotal] = useState();
    const [usedCount, setUsed] = useState();
    const [isConsumable, setCons] = useState(false);
    // const params = useParams().id;

    const [reCheck, setRecheck] = useState(false);
    let navigate = useNavigate();

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
        console.log("AllEq")
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)

        const datas = await axiosReq("Equipments");
        console.log(datas)

        setEqu(datas)

    }

    const addEqu = async () => {
        console.log("AllEq")
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        const equi = await axiosReq("Equipments", {
            agencyId: id,
            title: title,
            totalCount: totalCount,
            usedCount: usedCount,
            isConsumable: isConsumable
        });
        if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
            // navigate("/tashakolRegister2",{
            //   OrganizationID:data?.organizationId
            // });
            // setShowSuccessModal(true)
            setAddObjectEquModal(false)

            setRecheck(!reCheck)
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

                    <span className="text-[#000] font-bold text-xl">
                        Agency Equipment
                    </span>

                    <div className="h-4"></div>
                    <div className="flex 2xl:flex-col 2xl:items-start items-center justify-between">
                        <p className="text-[#000] font-bold text-base text-justify">
                            * You can add the equipment and specify the quantity and whether or not this
                            equipment is consumable.
                        </p>
                        <button
                            onClick={() => setAddObjectEquModal(true)}
                            className=" lg-md:block 2xl:mt-4 sm:w-[100%] px-4 h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add Equipment
                        </button>
                    </div>

                </div>
                <ul className="mt-3">
                    {
                        equ?.map((item) => {
                            return (
                                <li
                                    className="py-8 sm:py-5  xl:flex-col xl:items-start lg:flex-row md:flex-col md:items-start sm:flex-row sm-xs:flex-col sm-xs:items-start justify-between items-start border-b-2 border-borderGray border-dashed">
                                    <div className="flex justify-between">
                                        <div className="flex items-start  mt-0 sm:mt-2">

                                            <div>
                                                <div className="flex flex-row mb-4">

                                                    <span className="font-bold text-[#000] text-base">
                                                        {item?.title}
                                                    </span>

                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-between md-sm:flex-wrap  xl:mt-4 lg:mt-0 md:mt-4 sm:mt-0 ml-0 md-sm:ml-8">

                                            <div className="flex flex-col">

                                                <div className="flex">
                                                    <span className="font-bold text-sm text-black mr-6">
                                                        Registered Date :
                                                        <span className="font-medium">
                                                            {item?.registerDate}
                                                        </span>
                                                    </span>
                                                    <span className="font-bold text-sm text-black">
                                                        Last Update Date :
                                                        <span className="font-medium">
                                                            {item?.lastUpdate}</span>
                                                    </span>
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full">
                                        <div className="flex mr-2 mt-0 sm:mt-2 mb-2">
                                            <span className="font-bold text-[#000] text-base mr-2">
                                                Total Count :
                                            </span>
                                            <input
                                                required="true"
                                                class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                                                id="title"
                                                type="number"
                                                value={item?.totalCount}
                                                disabled={false} />

                                        </div>
                                        <div className="flex mb-2 mx-4">
                                            <span className="font-bold text-[#000] text-base mr-2">
                                                Used Count :
                                            </span>
                                            <input
                                                required="true"
                                                class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                                                id="title"
                                                type="number"
                                                value={item?.usedCount}

                                                disabled={false} />
                                        </div>
                                        <div className="flex mb-2 mx-4">
                                            <span className="font-bold text-[#000] text-base mr-2 mt-0 sm:mt-2 ">
                                                Consumable :
                                            </span>
                                            <input
                                                className="largeCheckBox mr-5 sm:mr-1 mt-1 sm:mt-3 text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                                type="checkbox"
                                                checked={item?.isConsumable}

                                                disabled={false}
                                                id="checkBoxOne" />

                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
            {AddObjectEquModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div
                        className="relative w-[40%] lg-md:w-[50%] md:w-[67%] sm:w-[80%] sm-xs:w-[96%] xs:w-[100%]  my-5 mx-auto max-w-5xl bg-white p-5">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-green text-base">
                                Add Object Equipment
                            </span>
                            <button onClick={() => setAddObjectEquModal(false)}>
                                <Cross />
                            </button>
                        </div>

                        <div class="w-full mt-6">
                            <label
                                class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                                for="title">
                                <span>
                                    Agency Equipment Title
                                </span>
                                <span className="text-hoverDelBack mx-1">
                                    *
                                </span>
                            </label>
                            <input
                                required="true"
                                class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                onChange={(e)=>setTitle(e.target.value)}
                                type="text"
                                placeholder="Type Instruction Title..." />

                        </div>

                        <div className="w-full  mt-6">

                            <div className="w-full flex xs:flex-col justify-between">
                                <div className="flex my-4">
                                    <span className="font-bold text-[#000] text-base mr-2">
                                        Total Count :
                                    </span>
                                    <input
                                        required="true"
                                        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                                        id="title"
                                        onChange={(e)=>setTotal(e.target.value)}

                                        type="number"
                                        placeholder="0" />

                                </div>
                                {/* <div className="flex my-4">
                                    <span className="font-bold text-[#000] text-base mr-2">
                                        Used Count :
                                    </span>
                                    <input
                                        required="true"
                                        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                                        id="title"
                                        type="number"
                                        placeholder="0"/>

                                </div> */}
                                <div className="flex my-4">
                                    <span className="font-bold text-[#000] text-base mr-2">
                                        Consumable :
                                    </span>
                                    <input
                                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                        type="checkbox"
                                        value=""
                                        onChange={(e)=>setCons(e.target.checked)}

                                        id="checkBoxOne" />

                                </div>
                            </div>


                            <button
                                onClick={() => {
                                    addEqu();
                                }}
                                className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                                + Add Equipment To The List
                            </button>
                        </div>

                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                : null}
        </div>
    )
}

export default AgencyEquipmentPage;