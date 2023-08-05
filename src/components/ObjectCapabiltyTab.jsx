import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import { useParams } from "react-router-dom";
import Cross from "../assets/icon/cross";

const ObjectCapabilityTab = ({ data }) => {
    const [AddCapModal,
        setAddCapModal] = React.useState(false);
        const [showSuccessModal,
            setShowSuccessModal] = React.useState(false);
            const [showErrorModal,
                setShowErrorModal] = React.useState(false);
    const [cap, setCap] = useState([]);
    const [title, setTitle] = useState();
    const [prio, setPriority] = useState();
    const [usercap, setUserCap] = useState([]);
    const params = useParams().id;
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
        console.log("AllCap")
        const dataUser = await axiosReq("Capability");
        console.log(dataUser)

        setCap(dataUser)
        const capUser = await axiosReq("Objects/" + params + "/capabilities");
        console.log(capUser)

    }
    const addCap = async () => {
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        const equi = await axiosReq("Capability", {
            agencyId: id,
            name: title,
            value: prio,
            description: "",
        });
        if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
            setShowSuccessModal(true)
            setRecheck(!reCheck)
        }
        else {
            setShowErrorModal(true)
        }
    }
    const submitEqu = async (check, capid, perio) => {
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        if (check == true) {
            const equi = await axiosReq("Objects/" + params + "/capabilities", {
                capabilities: [
                    {
                        objectId: params,
                        capabilityId: capid,
                        priority: perio,
                    }
                ]

            });
            if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
                // navigate("/tashakolRegister2",{
                //   OrganizationID:data?.organizationId
                // });
                setShowSuccessModal(true)
                setRecheck(!reCheck)
            }
            else {
                console.log(equi?.Message)
            }
        }

    }
    return (
        <div className="flex p-4 xs:px-1">
            <div
                className="w-[69%] lg-md:w-[100%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10 xs:px-3">
                <div className=" border-b-2 border-borderGray pb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[#000] font-bold text-xl 2xs:text-base">
                            Object Required Capability
                        </span>
                        
                        {/* <button

                            className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Submit
                        </button> */}
                    </div>



                    <div className="h-5"></div>
                    <p className="text-[#000] font-bold 2xs:font-medium text-base text-justify">
                        *     You can choose the abilities required for this mission from the list below
                        Or add the ability that you are considering and that is not in the list, then a priority should be specified for each one.
                    </p>
                    <button
                            onClick={() => setAddCapModal(true)}
                            className="hidden lg-md:block w-max sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add Capability To The List
                        </button>

                </div>
                <ul className="mt-6">
                    {
                        cap?.map((item) => {
                            return (
                                <li
                                    className="py-8 flex 2xs:flex-col 2xs:items-start justify-between items-center border-b-2 border-borderGray border-dashed">
                                    <div className="flex items-center">
                                        <input
                                            className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                            type="checkbox"
                                            value=""
                                            id="checkBoxOne"
                                            // checked={}
                                            onChange={(e) => submitEqu(e.target.checked, item.capabilityId, prio)}

                                        />
                                        <div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-[#000] text-base">
                                                    {item?.name}
                                                </span>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex items-center 2xs:mt-4">
                                        <span className="font-bold text-[#000] text-base mr-2">
                                            Priority :
                                        </span>
                                        <select
                                            id="statusSelect"
                                            name="statusSelect"
                                            value={item?.value}
                                            onChange={(e) => setPriority(e.target.value)}
                                            className="w-[80px] bg-white rounded-md border border-borderGray py-1 px-4">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>

                                        </select>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
            <div className="lg-md:hidden w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-6">

                <span className="font-bold text-green text-base">
                    Add Object Required Capability
                </span>
                <div class="w-full mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                            Object Required Capability Title
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
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Type Instruction Title..." />

                </div>

                <div className="w-full  mt-6">
                    <div className="flex items-center">
                        <span className="font-bold text-[#000] text-base mr-2">
                            Priority :
                        </span>
                        <select
                            id="statusSelect"
                            name="statusSelect"
                            className="w-[80px] bg-white rounded-md border border-borderGray py-1 px-4">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

                        </select>
                    </div>
                    <button
                        onClick={() => addCap() }
                        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        + Add Capability To The List
                    </button>
                </div>
            </div>
            {showErrorModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-xl font-bold font-IRsans text-black text-left">
                                    Warning
                                </span>

                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-base leading-relaxed break-words whitespace-normal font-IRsans">
                                    Please fill inputs
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-red hover:shadow-greenShadow hover:bg-red shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowErrorModal(false)}>
                                    Continue
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowErrorModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}
            {showSuccessModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    successful
                                </span>

                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                    Add instruction successfully
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowSuccessModal(false)}>
                                    Continue
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowSuccessModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}

            {AddCapModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[60%] sm-xs:w-[80%] my-5 mx-auto max-w-5xl bg-white p-5">
                    
                    <div className="flex justify-between items-center">
                    <span className="font-bold text-green text-base">
                    Add Object Required Capability
                    </span>
                            
                            <button onClick={() => setAddCapModal(false)}>
                                <Cross />
                            </button>

                        </div>
                <div class="w-full mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                            Object Required Capability Title
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
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Type Instruction Title..." />

                </div>

                <div className="w-full  mt-6">
                    <div className="flex items-center">
                        <span className="font-bold text-[#000] text-base mr-2">
                            Priority :
                        </span>
                        <select
                            id="statusSelect"
                            name="statusSelect"
                            className="w-[80px] bg-white rounded-md border border-borderGray py-1 px-4">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

                        </select>
                    </div>
                    <button
                        onClick={() => {addCap(); setAddCapModal(false) }}
                        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        + Add Capability To The List
                    </button>
                </div>

                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null

            }

        </div>
    )
}

export default ObjectCapabilityTab;