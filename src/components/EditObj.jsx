import React from "react";
import Img1 from "../assets/img/objectLogo.png"
import Pencil from "../assets/icon/pencil";
const EditObj = () => {

    return (
        <div>
        <div className="mt-6">
        <span className="text-[#000] font-bold text-base mx-4 my-6">
           * You can edit any of the following fields
            </span>
        </div>
      <div className="w-[60%] mx-auto block">
        <div className="relative w-[80px] h-[80px] mx-auto">
        <img src={Img1} alt="avatar" className="w-[80px] h-[80px] rounded-full"/>
        <button className="absolute bg-green w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-greenShadow bottom-0.5">
            <Pencil className="fill-white w-[15px] h-[15px]"/>
        </button>
        </div>
      <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        Title
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div className="flex">
 <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        glocation
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        telephone number
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
 </div>
    <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        address
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
 <div className="flex">
 <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        start date
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="grid-first-name">
        end date
      </label>
      <input class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
 </div>
      </div>
        </div>
    )

}

export default EditObj;