import React, {useState, useEffect} from "react";
import Img1 from "../assets/img/objectLogo.png"
import Pencil from "../assets/icon/pencil";
import axios from "axios";
import {useParams} from "react-router-dom";
import Cookies from 'universal-cookie';
import {apiUrl} from "../commons/inFormTypes";
import {useNavigate} from "react-router-dom";
import {axiosReq} from "../commons/axiosReq";
import WhiteCheck from "../assets/icon/whiteCheck";

// import Map from "./Map";
const EditObj = () => {
    const [StartDate,
        setStartDate] = useState();
    const [EndDate,
        setEndDate] = useState();
    const [Glocation,
        setGlocation] = useState();
    const [Address,
        setAddress] = useState();
    const [TelephoneNumber,
        setTelephoneNumber] = useState();
    const [showNewModal,
        setShowNewModal] = useState(false);
    const [data,
        setData] = useState();
    const [Description,
        setDescription] = useState();
    const [title,
        setTitle] = useState();
    const [HasCoffeMachine,
        setHasCoffeMachine] = useState(false);
    const [HasBuffet,
        setHasBuffet] = useState(false);
    const [HasMicrowave,
        setHasMicrowave] = useState(false);
    const [HasSecurityRom,
        setHasSecurityRom] = useState(false);
    const [HasVendingMachine,
        setHasVendingMachine] = useState(false);
    const [status,
        setStatus] = useState();
    const params = useParams().id;
    console.log(params)

    const editObject = async() => {
        // if(title==""||StartDate==""||EndDate==""||Glocation==""||Address==""||Telepho
        // neNumber==""|| title==""){ } else{
        const cookies = new Cookies();
        var id = cookies.get('ID');

        var Objects = await axios.put(apiUrl + "Objects/" + params, {
            AgencyId: parseInt(id),
            objectId: params,
            AssignerId: null,
            Title: title,
            StartDate: StartDate,
            EndDate: EndDate,
            Address: Address,
            Description: Description,
            TelephoneNumber: TelephoneNumber,
            HasCoffeMachine: HasCoffeMachine,
            HasVendingMachine: HasVendingMachine,
            HasBuffet: HasBuffet,
            HasMicrowave: HasMicrowave,
            HasSecurityRom: HasSecurityRom,
            Status: status,
            Glocation: "37.56"

        }, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`
            }
        });
        if (Objects
            ?.status == 200 || Objects
                ?.status == 204 || Objects
                    ?.status == 201) {
            // navigate("/tashakolRegister2",{   OrganizationID:data?.organizationId });
            setShowNewModal(true)

        } else {
            alert("Please fill inputs")
        }
        // }
    }
    const [reCheck,
        setRecheck] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {

        auth();
    }, [reCheck]);
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
    const GetData = async() => {
        console.log(1234)
        const dataUser = await axiosReq("Objects/" + params);
        console.log(dataUser)
        setStartDate(dataUser
            ?.startDate)
        setEndDate(dataUser
            ?.endDate)
        setGlocation(dataUser
            ?.glocation)
        setDescription(dataUser
            ?.description)
        setAddress(dataUser
            ?.address)
        setTitle(dataUser
            ?.title)
        setTelephoneNumber(dataUser
            ?.telephoneNumber)
        setHasMicrowave(dataUser
            ?.hasMicrowave)
        setHasBuffet(dataUser
            ?.hasBuffet)
        setHasCoffeMachine(dataUser
            ?.hasCoffeMachine)
        setHasMicrowave(dataUser
            ?.hasMicrowave)
        setHasSecurityRom(dataUser
            ?.hasSecurityRom)
        setStatus(dataUser
            ?.status)
        setData(dataUser)
    }
    return (
        <div>
            <div className="mt-6">
                <div className="flex md-sm:flex-col justify-between  mx-4 md-sm:mx-0">

                    <span className="text-[#000] font-bold text-base mx-4 my-6 md-sm:mb-5">
                        * You can edit any of the following fields
                    </span>
                    <button
                        onClick={() => editObject()}
                        className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center md-sm:justify-center md-sm:w-[25%] sm:w-[35%] sm-xs:w-[90%]   md-sm:ml-6 sm-xs:ml-3 ">
                        <WhiteCheck className="mr-2 w-6 h-6 text-white hover:text-green"/>
                        <span
                            className="mr-3 text-base font-bold font-IRsans text-white text-left md-sm:text-center hover:text-green">
                            Save
                        </span>
                    </button>
                    {showNewModal
                        ? <> <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                                <div
                                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                    <div
                                        className="flex items-centers justify-left  rounded-t border-b border-b-borderGray pb-2">

                                        <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                            Save
                                        </span>

                                    </div>

                                    <div className="relative flex-auto">
                                        <p
                                            className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                            Your edits have been successfully saved !
                                        </p>
                                    </div>

                                    <div
                                        className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowNewModal(false)}>
                                            save
                                        </button>
                                        <button
                                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowNewModal(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                :
                null}
                </div>
            </div>
            <div
                className="w-[60%] lg-md:w-[70%] md-sm:w-[95%] sm:w-[95%] mx-auto block h-[450px] overflow-y-auto my-5 shadow-grayShadow p-2 rounded-md">
                <div className="relative w-[80px] h-[80px] mx-auto">
                    <img src={Img1} alt="avatar" className="w-[80px] h-[80px] rounded-full"/>
                    <button
                        className="absolute bg-green w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-greenShadow bottom-0.5 -right-3">
                        <Pencil className="fill-white w-[15px] h-[15px]"/>
                    </button>
                </div>
                <div class="w-full  px-3 mt-6">
                    <label
                        class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text"
                        placeholder="Tirajhe Complex"/>

                </div>
                <div className="flex sm-xs:flex-col">
                    <div class="w-1/2 sm-xs:w-[100%] px-3 mt-6">
                        <label
                            class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                            for="status">
                            status
                        </label>

                        <select
                            id="statusSelect"
                            name="statusSelect"
                            className="w-full bg-white rounded-sm border border-borderGray py-3 px-4">
                            <option value="Active">Active</option>
                            <option value="DeActive">DeActive</option>
                            <option value="Delete">Delete</option>
                            <option value="Expired">Expired</option>

                        </select>

                    </div>
                    <div class="w-1/2 sm-xs:w-[100%]  px-3 mt-6">
                        <label
                            class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                            for="phone">
                            Telephone Number
                        </label>
                        <input
                            value={TelephoneNumber}
                            onChange={(e) => setTelephoneNumber(e.target.value)}
                            class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="phone"
                            type="text"
                            placeholder="+9889011457575"/>

                    </div>
                </div>
                <div class="w-full  px-3 mt-6">
                    <label
                        class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="address">
                        Address
                    </label>
                    <input
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="address"
                        type="text"
                        placeholder="Ashrafi HW,boustan St,No 123"/>

                </div>
                <div className="flex sm-xs:flex-col">
                    <div class="w-1/2 sm-xs:w-[100%]  px-3 mt-6">
                        <label
                            class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                            for="start-date">
                            Start Date
                        </label>
                        <input
                            value={StartDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="start-date"
                            type="text"
                            placeholder="7/19/2023"/>

                    </div>
                    <div class="w-1/2 sm-xs:w-[100%]  px-3 mt-6">
                        <label
                            class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                            for="end-date">
                            End Date
                        </label>
                        <input
                            value={EndDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="end-date"
                            type="text"
                            placeholder="5/19/2023"/>

                    </div>

                </div>

                {/* <div className="w-full mb-7">
        <Map/>
    </div> */}
                <div className="w-full mb-7 px-3 mt-6">
                    <label
                        class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="description">
                        Description
                    </label>
                    <textarea
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="
    Security management for the entry of people from the west door of Tiraje shopping center
    "/>

                </div>
                <div className="w-full mb-7 px-3 mt-6 flex flex-wrap">
                    <div className="flex flex-row mr-5 mb-2">

                        <div class=" block ml-2 mt-1 mr-1">
                            <input
                                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                id="coffeeMachine"/>

                        </div>
                        <label>Coffee Machin</label>
                    </div>
                    <div className="flex flex-row mr-5 mb-2">

                        <div class=" block ml-2 mt-1 mr-1">
                            <input
                                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                id="vendingMachine"
                                checked={HasCoffeMachine}
                                onChange={(e) => setHasCoffeMachine(e.target.checked)}/>

                        </div>
                        <label>Vending Machine</label>
                    </div>
                    <div className="flex flex-row mr-5 mb-2">

                        <div class=" block ml-2 mt-1 mr-1">
                            <input
                                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                id="buffet"
                                checked={HasVendingMachine}
                                onChange={(e) => setHasVendingMachine(e.target.checked)}/>

                        </div>
                        <label>Buffet</label>
                    </div>
                    <div className="flex flex-row mr-5 mb-2">

                        <div class=" block ml-2 mt-1 mr-1">
                            <input
                                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                id="microwavee"
                                checked={HasMicrowave}
                                onChange={(e) => setHasMicrowave(e.target.checked)}/>

                        </div>
                        <label>Microwave</label>
                    </div>
                    <div className="flex flex-row mr-5 mb-2">

                        <div class=" block ml-2 mt-1 mr-1">
                            <input
                                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                id="sequrityRoom"
                                checked={HasSecurityRom}
                                onChange={(e) => setHasSecurityRom(e.target.checked)}/>

                        </div>
                        <label>Security Room?</label>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default EditObj;