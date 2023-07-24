import React from "react";

const ObjectEquipmentTab = () =>{

    return(
        <div className="p-4">
        <div
            className="w-[100%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10">
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
                    <div className="flex items-center">
                   <div className="flex">
                    
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

    
    </div>
    )
}

export default ObjectEquipmentTab