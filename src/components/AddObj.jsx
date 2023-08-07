import React, { useState, useEffect } from "react";
import Img1 from "../assets/img/objectLogo.png"
import Pencil from "../assets/icon/pencil";
// import Map from "./Map";
import Cookies from 'universal-cookie';
import { apiUrl } from "../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosReq } from "../commons/axiosReq";
const AddObj = () => {

  const [check, setCheck] = useState(false);
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [Glocation, setGlocation] = useState();
  const [Address, setAddress] = useState();
  const [TelephoneNumber, setTelephoneNumber] = useState();
  const [showNewModal,setShowNewModal] = useState(false);
  const [data, setData] = useState();
  const [Description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [HasCoffeMachine, setHasCoffeMachine] = useState(false);
  const [HasBuffet, setHasBuffet] = useState(false);
  const [HasMicrowave, setHasMicrowave] = useState(false);
  const [HasSecurityRom, setHasSecurityRom] = useState(false);
  const [HasVendingMachine, setHasVendingMachine] = useState(false);

  const addObject = async () => {
    // if(title==""||StartDate==""||EndDate==""||Glocation==""||Address==""||TelephoneNumber==""||
    // title==""){

    // }
    // else{
    const cookies = new Cookies();
    var id = cookies.get('ID');

    var Objects = await axiosReq("Objects", {
      AgencyId:parseInt(id),
      AssignerId:"",
      Title: title,
      StartDate: StartDate,
      EndDate: EndDate,
      Address: Address,
      Description: Description,
      TelephoneNumber: TelephoneNumber,
      HasCoffeMachine: HasCoffeMachine.toString(),
      HasVendingMachine: HasVendingMachine.toString(),
      HasBuffet: HasBuffet.toString(),
      HasMicrowave: HasMicrowave.toString(),
      HasSecurityRom: HasSecurityRom.toString(),
      Glocation:"37.56"

    },"multipart/form-data");
    if (Objects?.status == 200 || Objects?.status == 204|| Objects?.status == 201) {
      // navigate("/tashakolRegister2",{
      //   OrganizationID:data?.organizationId
      // });
      setShowNewModal(true)

    }
    else {
      alert("Please fill inputs")
    }
    // }
  }
  return (
    <div>
      <div className="mt-6">
      <div className="flex justify-between md-sm:flex-col mx-4 md-sm:mx-0">
      <span className="text-[#000] font-bold text-base  my-6 md-sm:mb-5 xs:mx-3">
          * You can edit any of the following fields
        </span>
        <button onClick={()=>addObject()} className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center md-sm:justify-center md-sm:w-[25%] sm:w-[35%] sm-xs:w-[90%]   md-sm:ml-6 sm-xs:ml-3" >
          
                      
          + Add
         
  </button>
  {
      showNewModal ? 
      <>
      <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
       
        <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">
     
          <div className="flex items-centers justify-left  rounded-t border-b border-b-borderGray pb-2">
            
            
            <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
           Add
            </span>
         
          </div>
          
          <div className="relative flex-auto">
            <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
            The object has been added successfully !
            </p>
          </div>
         
          <div className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
            <button
              className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowNewModal(false)}
            >
             save
            </button>
            <button
              className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowNewModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    
     </>
      :
      null
  }
      </div>
      </div>
      <div className="w-[60%] lg-md:w-[70%] md-sm:w-[95%] mx-auto block h-[450px] overflow-y-auto my-5 shadow-grayShadow p-2 rounded-md">
        <div className="relative w-[80px] h-[80px] mx-auto">
          <img src={Img1} alt="avatar" className="w-[80px] h-[80px] rounded-full" />
          <button onClick={()=>addObject()} className="absolute bg-green w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-greenShadow bottom-0.5 -right-3">
            <Pencil className="fill-white w-[15px] h-[15px]" />
          </button>
        </div>
        <div class="w-full  px-3 mt-6">
          <label class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="title">
            <span>
              Title
            </span>
            <span className="text-hoverDelBack mx-1">
              *
            </span>
          </label>
          <input required="true" class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none
           focus:bg-white" id="title" type="text" placeholder="Tirajhe Complex" onChange={(e)=>setTitle(e.target.value)}/>

        </div>
        <div className="flex sm-xs:flex-col">
          <div class="w-1/2 sm-xs:w-[100%] px-3 mt-6">
            <label class="flex items-center tracking-wide text-[#000] text-xs font-bold mb-2" for="status">
              <span>
                status
              </span>
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>



            <select
              required="true"
              id="statusSelect"
              name="statusSelect"
              className="w-full bg-white rounded-sm border border-borderGray py-3 px-4">
              <option value="active">In Process</option>
              <option value="complete">Completed</option>

            </select>


          </div>
          <div class="w-1/2 sm-xs:w-[100%]  px-3 mt-6">
            <label class="flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
              <span>
                telephone number
              </span>
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <input required="true" class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="phone" type="text" placeholder="+9889011457575"  onChange={(e)=>setTelephoneNumber(e.target.value)} />

          </div>
        </div>
        <div class="w-full  px-3 mt-6">
          <label class="flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="address">
            <span>
              address
            </span>
            <span className="text-hoverDelBack mx-1">
              *
            </span>

          </label>
          <input required="true"  onChange={(e)=>setAddress(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="Ashrafi HW,boustan St,No 123" />

        </div>
        <div className="flex sm-xs:flex-col">
          <div class="w-1/2 sm-xs:w-[100%]  px-3 mt-6">
            <label class="flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="start-date">


              <span>
                start date

              </span>

              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <input required="true"  onChange={(e)=>setStartDate(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start-date" type="text" placeholder="7/19/2023" />

          </div>
          <div class="w-1/2 sm-xs:w-[100%] px-3 mt-6">
            <label class="flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="end-date">
              <span>
                end date

              </span>
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <input required="true"  onChange={(e)=>setEndDate(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="end-date" type="text" placeholder="5/19/2023" />

          </div>

        </div>

        {/* <div className="w-full mb-7">
        <Map/>
    </div> */}
        <div className="w-full mb-7 px-3 mt-6">
          <label class="flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2" for="description">
            <span>
              description

            </span>

          </label>
          <textarea  onChange={(e)=>setDescription(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="
    Security management for the entry of people from the west door of Tiraje shopping center
    "/>

        </div>
        <div className="w-full mb-7 px-3 mt-6 flex flex-wrap">
          <div className="flex flex-row mr-5 mb-2">
            <label className="flex">
              has Coffee Machin?
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <div class=" block ml-2">
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="coffeeMachine"
                onChange={(e)=>setHasCoffeMachine(e.target.checked)}
              />

            </div>
          </div>
          <div className="flex flex-row mr-5 mb-2">
            <label className="flex">

              has Vending Machine?
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <div class=" block ml-2">
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                onChange={(e)=>setHasVendingMachine(e.target.value)}

              />

            </div>
          </div>
          <div className="flex flex-row mr-5 mb-2">
            <label className="flex">

              has Buffet?
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <div class=" block ml-2">
              <input
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="buffet"
                required="true"
                onChange={(e)=>setHasBuffet(e.target.checked)}

              />

            </div>
          </div>
          <div className="flex flex-row mr-5 mb-2">
            <label className="flex">

              has Microwave?
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <div class=" block ml-2">
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="microwavee"
                onChange={(e)=>setHasMicrowave(e.target.checked)}

              />

            </div>
          </div>
          <div className="flex flex-row mr-5 mb-2">
            <label className="flex">has Security Room?
              <span className="text-hoverDelBack mx-1">
                *
              </span>
            </label>
            <div class=" block ml-2">
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="sequrityRoom"
                onChange={(e)=>setHasSecurityRom(e.target.checked)}

              />

            </div>
          </div>

        </div>

      </div>
    </div>
  )

}

export default AddObj;