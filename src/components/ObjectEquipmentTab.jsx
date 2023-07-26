import React from "react";

const ObjectEquipmentTab = () =>{

    return(
        <div className="flex p-4">
        <div
                 className="w-[69%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10">
                   <div className=" border-b-2 border-borderGray pb-4">
                
                    <span className="text-[#000] font-bold text-xl">
                        Object Equipment
                    </span>
                 
            
                <div className="h-9"></div>
                <span className="text-[#000] font-bold text-base">
                    *     You can choose the equipment from the list below, specify the quantity and whether or not this equipment is consumable.
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
                            Paper Cup
                            </span>
                 
                        </div>
                   
                    </div>
                 </div>
                 <div className="flex items-center justify-between">
                        <div className="flex mr-2">
                        <span className="font-bold text-[#000] text-base mr-2">
                               Total Count :  
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"/>

                        </div>
                        <div className="flex">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"/>
        
                        </div>
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
                    <div className="flex items-center justify-between">
                        <div className="flex mr-2">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Total Count :
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"/>

                        </div>
                        <div className="flex">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"/>
        
                        </div>
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
                 <div className="flex items-center justify-between">
                        <div className="flex mr-2">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Total Count : 
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"/>

                        </div>
                        <div className="flex">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"/>
        
                        </div>
                        </div>
                </li>
            </ul>
            </div>

            <div className="w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-6">

<span className="font-bold text-green text-base">
    Add Object Equipment
</span>
<div class="w-full mt-6">
    <label
        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
        for="title">
        <span>
        Object Equipment Title
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

                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Total Count :
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"/>

                        </div>
                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"/>
        
                        </div>
                   
    <button
    
        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
        + Add Object Equipment To The List
    </button>
</div>
</div>
    </div>
    )
}

export default ObjectEquipmentTab