import React from "react";

const ObjectCapabilityTab = () => {

    return (
        <div className="flex p-4">
            <div
                 className="w-[69%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10">
                       <div className=" border-b-2 border-borderGray pb-4">
                       <div className="flex justify-between items-center">
                        <span className="text-[#000] font-bold text-xl">
                        Object Required Capability
                        </span>
                        <button
                     
                            className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Submit
                        </button>
                    </div>
                    
                     
                
                    <div className="h-9"></div>
                    <span className="text-[#000] font-bold text-base">
                        *     You can choose the abilities required for this mission from the list below
Or add the ability that you are considering and that is not in the list, then a priority should be specified for each one.
                    </span>

                </div>
                <ul className="mt-6">
                    <li
                        className="py-8 flex justify-between items-center border-b-2 border-borderGray border-dashed">
                     <div className="flex items-center">
                     <input
                            className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                            type="checkbox"
                            value=""
                            id="checkBoxOne"/>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#000] text-base">
                                Having a bachelor's degree
                                </span>
                     
                            </div>
                       
                        </div>
                     </div>
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
                    </li>
                    <li
                        className="py-8 flex items-center justify-between border-b-2 border-borderGray border-dashed">
                    <div className="flex items-center">
                    <input
                            className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                            type="checkbox"
                            value=""
                            id="checkBoxOne"/>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#000] text-base">
                                Height above 180
                                </span>
                        
                            </div>
                            </div>
                          
                        </div>
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
                    </li>
                    <li
                        className="py-8 flex justify-between items-center border-b-2 border-borderGray border-dashed">
                     <div className="flex items-center">
                     <input
                            className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                            type="checkbox"
                            value=""
                            id="checkBoxOne"/>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#000] text-base">
                                Driving licence
                                </span>
                           
                            </div>
                      
                        </div>
                     </div>
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
                    </li>
                </ul>
                </div>
                <div className="w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-6">

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
        placeholder="Type Instruction Title..."/>

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
    
        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
        + Add Capability To The List
    </button>
</div>
</div>
        
        </div>
    )
}

export default ObjectCapabilityTab;