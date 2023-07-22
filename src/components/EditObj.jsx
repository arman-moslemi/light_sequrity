import React from "react";
import Img1 from "../assets/img/objectLogo.png"
import Pencil from "../assets/icon/pencil";
// import Map from "./Map";
const EditObj = () => {

    return (
        <div>
        <div className="mt-6">
        <span className="text-[#000] font-bold text-base mx-4 my-6">
           * You can edit any of the following fields
            </span>
        </div>
      <div className="w-[60%] mx-auto block h-[450px] overflow-y-auto my-5 shadow-grayShadow p-2 rounded-md">
        <div className="relative w-[80px] h-[80px] mx-auto">
        <img src={Img1} alt="avatar" className="w-[80px] h-[80px] rounded-full"/>
        <button className="absolute bg-green w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-greenShadow bottom-0.5 -right-3">
            <Pencil className="fill-white w-[15px] h-[15px]"/>
        </button>
        </div>
      <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="title">
        Title
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Tirajhe Complex"/>
      
    </div>
    <div className="flex">
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="status">
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
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Telephone Number
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="+9889011457575"/>
      
    </div>
 </div>
    <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="address">
       Address
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="Ashrafi HW,boustan St,No 123"/>
      
    </div>
 <div className="flex">
 <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="start-date">
        Start Date
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start-date" type="text" placeholder="7/19/2023"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="end-date">
        End Date
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="end-date" type="text" placeholder="5/19/2023"/>
      
    </div>
 
 </div>

 {/* <div className="w-full mb-7">
        <Map/>
    </div> */}
    <div className="w-full mb-7 px-3 mt-6">
    <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="description">
        Description
      </label>
    <textarea class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="
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
                    id="coffeeMachine"
                   />

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
                   />

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
                   />

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
                   />

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
                   />

            </div>
            <label>Security Room?</label>
        </div>
   
    </div>

      </div>
        </div>
    )

}

export default EditObj;