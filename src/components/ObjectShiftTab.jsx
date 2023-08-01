import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import { useParams } from "react-router-dom";
const ObjectShiftTab = ({data}) => {

    const [showDailyShift,
        setShowDailyShift] = useState(false);
        const [showNightlyShift,
            setShowNightlyShift] = useState(false);
            const [showDisabledShift,
                setShowDisabledShift] = useState(false);
                const [shType, setShType] = useState([]);
                const [title, setTitle] = useState();
                const [start, setStart] = useState({
                    hour:"00",
                    minute:"00"
                });
                const [end, setEnd] = useState({
                    hour:"00",
                    minute:"00"
                });
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
                    const obsh = await axiosReq("ObjectShiftTypes");
                    console.log(obsh)
                    console.log(data)
            
                    setShType(obsh)
              
                }
                const submitType = async (OID) => {
                    const cookies = new Cookies();
                    var id = cookies.get('ID');
                    console.log(start)
                    const sht = await axiosReq("Objects/"+params+"/shifts", {
                        ObjectShiftTypeId: OID,
                        ObjectId: params,
                        Title:title,
                        StartTime:start.hour+":"+start.minute,
                        EndTime:end.hour+":"+end.minute
                    },"multipart/form-data");
                    if (sht?.status == 200 || sht?.status == 204 || sht?.status == 201) {
                        // navigate("/tashakolRegister2",{
                        //   OrganizationID:data?.organizationId
                        // });
                        // setShowSuccessModal(true)
                        setShowDailyShift(true)
                        setRecheck(!reCheck)
                    }
                    else {
                        alert("Please fill inputs")
                    }
                }
       
    return (
        <div className="flex p-4">
            <div className="w-full  bg-white rounded-2xl shadow-object h-auto p-10">
                <div className=" border-b-2 border-borderGray pb-4">

                    <span className="text-[#000] font-bold text-xl">
                        Object Shifts
                    </span>

                    <div className="h-7"></div>
                    <p className="text-[#000] font-bold text-base text-justify">
                        *In this section, based on the type of shift, you can specify the time intervals
                        of each shift and assign it to this object.
                    </p>

                </div>
                <div className="flex justify-start flex-wrap w-full">
                    {
                        shType?.map((item)=>{
                            return(
<div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                {item.title}
                            </span>
                        </div>
                        <div className="flex items-center my-5 justify-between">
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
                                    placeholder="00"
                                    onChange={(e)=>setStart({
                                        hour:e.target.value,
                                        minute:start.minute
                                    })}
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
                                    onChange={(e)=>setStart({
                                        hour:start.hour,
                                        minute:e.target.value
                                    })}
                                    />
                            </div>
                        </div>
                        <div className="flex items-center my-5 justify-between">
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
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"
                                    onChange={(e)=>setEnd({
                                        hour:e.target.value,
                                        minute:end.minute
                                    })}
                                    />
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"
                                    
                                    onChange={(e)=>setEnd({
                                        hour:end.hour,
                                        minute:e.target.value
                                    })}/>
                            </div>
                        </div>
                        <div className="flex items-center my-5 justify-between">
                            <label
                                class=" flex items-center  tracking-wide text-[#000] text-sm font-bold"
                                for="title">
                                <span>
                                    Shift Name :
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
                                    onChange={(e)=>setTitle(e.target.value)}
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => submitType(item?.objectShiftTypeId)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {/* {showDailyShift
                            ? */}
                            <div
                                    className="flex items-center my-5 justify-between bg-lightGreen p-2 rounded-md">
                                    <label
                                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold"
                                        for="title">
                                        <span class=" text-green text-lg font-bold">
                                            S1
                                        </span>

                                    </label>
                                    <div className="flex items-center">

                                        <span class=" text-green text-base font-bold">
                                            8:00 - 12:00
                                        </span>
                                    </div>
                                </div>
                            {/* : null
} */}
                    </div>
                          )  })
                    }
                    
                 
                </div>
            </div>

        </div>
    )
}

export default ObjectShiftTab