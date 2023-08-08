import React, {useState} from "react";
import Img1 from "../assets/img/avatar.jpg"
import UserT from "../assets/icon/title/user"
import NationalT from "../assets/icon/title/nationalcode";
import MobileT from "../assets/icon/title/mobileT";
import PhoneT from "../assets/icon/title/phone";
import StatusT from "../assets/icon/title/status";
import LocationT from "../assets/icon/title/location"
import CalendarT from "../assets/icon/title/calendar";
import ContractT from "../assets/icon/title/contract";
import ClockT from "../assets/icon/title/clock";
import { Link } from "react-router-dom";
const UserDetailPage = () => {
    const [showContract,
        setShowContract] = useState(false);
    return (
        <div className="mx-auto 2xs:mx-1 rounded-2xl  shadow-tableShadow mt-5 w-[90%] p-6 xs:px-2">
            <div className="flex justify-between items-center">
                <img src={Img1} alt="avatar" className=" w-[100px] h-[100px] rounded-full"/>
                <div className="flex sm:w-[50%] sm-xs:w-[80%] sm:flex-col sm:pr-4 2xs:pr-1">
                    <button
                        onClick={() => setShowContract(true)}
                        className="mr-6 sm:w-[100%] lg-md:block mt-0 sm:ml-4 2xs:ml-1 w-max sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        View Contract
                    </button>
                    <Link to={'/viewMission'}
                        className="flex justify-center items-center lg-md:block mt-0 770:mt-4 w-max sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        View Mission
                    </Link>
                </div>
            </div>
            <div className="flex 950:flex-col justify-between mt-6">

                <div className="flex items-center">

                    <div className="flex flex-col">
                        <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                            <div className="flex">
                            <UserT/>
                            <span className="font-bold text-black mr-4 ml-5">
                                Full Name :
                            </span>
                            </div>
                            <span className="font-medium text-black sm:mt-2 sm:ml-11">
                                Ali Reza Hasan Zadeh
                            </span>
                        </div>
                        <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                            <div className="flex">
                            <NationalT/>
                            <span className="font-bold text-black mr-4 ml-5">
                                National Code :
                            </span>
                            </div>
                            <span className="font-medium text-black sm:mt-2 sm:ml-11">
                                0036458978
                            </span>
                        </div>
                        <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                            <div className="flex">
                            <UserT/>
                            <span className="font-bold text-black mr-4 ml-5">
                                User Name :
                            </span>
                            </div>
                            <span className="font-medium text-black sm:mt-2 sm:ml-11">
                                HA@123
                            </span>
                        </div>
                        <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                            <div className="flex">
                            <MobileT/>
                            <span className="font-bold text-black mr-4 ml-5">
                                Mobile Number :
                            </span>
                            </div>
                            <span className="font-medium text-black sm:mt-2 sm:ml-11">
                                +989128790253
                            </span>
                        </div>
                        <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                            <div className="flex">
                            <PhoneT/>
                            <span className="font-bold text-black mr-4 ml-5">
                                Phone Number :
                            </span>
                            </div>
                            <span className="font-medium text-black sm:mt-2 sm:ml-11">
                                +982122896547
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                        <div className="flex">
                        <StatusT/>
                        <span className="font-bold text-black mr-4 ml-5">
                            Status :
                        </span>
                        </div>
                        <span className="font-bold text-green sm:mt-2 sm:ml-11">
                            Active
                        </span>
                    </div>
                    <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                        <div className="flex">
                        <LocationT/>
                        <span className="font-bold text-black mr-4 ml-5 w-max">
                            Address :
                        </span>
                        </div>
                        <span className="font-medium text-black sm:mt-2 sm:ml-11">
                            Ashrafi HW,Tirajeh Complex , No 123
                        </span>
                    </div>
                    <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                        <div className="flex">
                        <CalendarT/>
                        <span className="font-bold text-black mr-4 ml-5">
                            Register Date :
                        </span>
                        </div>
                        <span className="font-medium text-black sm:mt-2 sm:ml-11">
                            08/12/2023
                        </span>
                    </div>
                    <div className="flex sm:flex-col sm:items-start items-center my-4 sm:my-3">
                        <div className="flex">
                        <CalendarT/>
                        <span className="font-bold text-black mr-4 ml-5">
                            Last Visited Date :
                        </span>
                        </div>
                        <span className="font-medium text-black sm:mt-2 sm:ml-11">
                            08/12/2023
                        </span>
                    </div>
                </div>
            </div>
            {showContract
                ? <div className=" mt-6 border-t-2 border-dashed border-borderGray">
                        <div className="my-6 flex items-center">
                            <ContractT className="mr-4"/>
                            <span className="text-lg font-bold text-green">
                                Contract Detail
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center flex-wrap">

                                <div className="flex items-center my-4 w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Title :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        Gaurdening Tiraje Complex
                                    </span>
                                </div>
                                <div className="flex md:flex-col md:items-start items-center my-4 w-full">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Content :
                                    </span>
                                    <span className="font-medium text-black md:ml-5 md:mt-1">
                                        12-hour guarding of the circulation complex for three months
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Salery Per Hour :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        20 $
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Last Update :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        2022/10/10
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Expire Date :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        2024/10/12
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Is Active? :
                                    </span>
                                    <span className="font-bold text-green sm:ml-5 sm:mt-1">
                                        Yes
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Contract Type :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        Temporary
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Bank Name :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        Bank A
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        IBan :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        -
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Bic :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        -
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Bank Account Owner :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        Ali Hasan Hasan Zadeh
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Insurance Number :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        12345688475
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Tax Number :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        63639585-877
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 950:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Identification Number :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        85274125852
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Security Number :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        767645443
                                    </span>
                                </div>
                                <div
                                    className="flex items-center ml-5 border-t border-borderGray border-dashed w-full my-6 pt-4">
                                    <ClockT className="mr-4 "/>
                                    <span className="font-bold text-base text-green">
                                        Hours Of Work
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/3 1100:w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Work Hours Per Day :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        8 hours
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/3 1100:w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Work Hours Per Week :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        64 hours
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/3 1100:w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Work Hours Per Month :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        176 hours
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/3 1100:w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Work Hours Per Year :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        3520 hours
                                    </span>
                                </div>
                                <div
                                    className="flex items-center ml-5 border-t border-borderGray border-dashed w-full my-6 pt-4">
                                    <ContractT className="mr-4 w-[24px] h-[24px]"/>
                                    <span className="font-bold text-base text-green">
                                        Vacation Details
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Total Vacation Days :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        40 days
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Vacation Days Per Months :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        3.5 Days
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Vacation Days Per Weeks :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        1 Days
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Used Vacation Days :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        15 Days
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Remaining Vacation Days :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        25 Days
                                    </span>
                                </div>
                                <div className="flex items-center my-4 w-1/2 md:w-full sm:flex-col sm:items-start">

                                    <span className="font-bold text-black mr-4 ml-5">
                                        Extra Vacation Days :
                                    </span>
                                    <span className="font-medium text-black sm:ml-5 sm:mt-1">
                                        -
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                : null
}
        </div>
    )
}

export default UserDetailPage;