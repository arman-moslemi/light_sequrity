import React, {useState} from "react";

const ObjectShiftTab = () => {

    const [showDailyShift,
        setShowDailyShift] = useState(false);
        const [showNightlyShift,
            setShowNightlyShift] = useState(false);
            const [showDisabledShift,
                setShowDisabledShift] = useState(false);
    return (
        <div className="flex p-4">
            <div className="w-full  bg-white rounded-2xl shadow-object h-auto p-10">
                <div className=" border-b-2 border-borderGray pb-4">

                    <span className="text-[#000] font-bold text-xl">
                        Object Shifts
                    </span>

                    <div className="h-9"></div>
                    <span className="text-[#000] font-bold text-base">
                        *In this section, based on the type of shift, you can specify the time intervals
                        of each shift and assign it to this object.
                    </span>

                </div>
                <div className="flex justify-start flex-wrap w-full">
                    <div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                Daily
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => setShowDailyShift(true)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {showDailyShift
                            ? <div
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
                            : null
}
                    </div>
                    <div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                Nightly
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => setShowNightlyShift(true)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {showNightlyShift
                            ? <div
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
                            : null
}
                    </div>
                    <div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                Disabled
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => setShowDisabledShift(true)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {showDisabledShift
                            ? <div
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
                            : null
}
                    </div>
                    <div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                Nightly
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => setShowNightlyShift(true)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {showNightlyShift
                            ? <div
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
                            : null
}
                    </div>
                    <div
                        className="w-[300px] bg-white rounded-2xl shadow-object h-max mr-5 my-5 p-5">
                        <div className="flex">
                            <span className="text-[#000] font-bold text-base mr-3">
                                Shift Type :
                            </span>
                            <span className="text-[#000] font-medium text-base">
                                Disabled
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="00:00"/>
                                <span className="text-[#000] mx-1">
                                    :
                                </span>
                                <input
                                    required="true"
                                    class="appearance-none block w-[50px] bg-white text-[#000] border border-borderGray rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                                    id="start Time"
                                    type="text"
                                    placeholder="00:00"/>
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
                                    placeholder="s1"/>

                            </div>
                        </div>
                        <button
                            onClick={() => setShowDisabledShift(true)}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add Shift
                        </button>
                        {showDisabledShift
                            ? <div
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
                            : null
}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ObjectShiftTab