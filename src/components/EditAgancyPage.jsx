import React, {useState,useEffect} from "react";
import Img1 from "../assets/img/objectLogo.png"
import Pencil from "../assets/icon/pencil";
import axios from "axios";
import {useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import { apiUrl } from "../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import WhiteCheck from "../assets/icon/whiteCheck";
import ImageUpload from "../components/ImageUpload";
import DatePicker from "react-datepicker";
import './components.css'
import "react-datepicker/dist/react-datepicker.css";

// import Map from "./Map";
const EditAgencyPage = () => {
  const [showSuccessModal,
    setShowSuccessModal] = React.useState(false);
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState(new Date());
  const [Glocation, setGlocation] = useState();
  const [Address, setAddress] = useState();
  const [TelephoneNumber, setTelephoneNumber] = useState();
  const [showNewModal,setShowNewModal] = useState(false);
  const [data, setData] = useState();
  const [Description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [houseNumber, setHouseNumber] = useState();
  const [Email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [phone, setPhone] = useState();
  const [codes, setCode] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();

  const [status, setStatus] = useState();
  const params = useParams().id;
  console.log(params)
  const [file, setFile] = useState();
  const editAgency = async() => {
    // if(title==""||StartDate==""||EndDate==""||Glocation==""||Address==""||Telepho
    // neNumber==""|| title==""){ } else{
    const cookies = new Cookies();

    var Objects = await axios.put(apiUrl + "Agencies/" + params, {
        AgencyId: params,
        
        Name: title,
        ExpireDate: EndDate,
        Address: Address,
        Description: Description,
        MobileNumber: TelephoneNumber,
        EmailAddress: Email,
        HouseNumber:houseNumber,
        PhoneNumber:phone,
        WebsiteAddress:website,
        Status:status,
        Logo:file,
        City:city,
        Street:street,
        ZipCode:zip,
        Code:codes,
        Glocation:"37.56"
        

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
  
  const [reCheck, setRecheck] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
  
    auth();
  }, [reCheck]);
  const auth=async()=>{
    const cookies = new Cookies();
    var token= cookies.get('token');
    console.log(token)
    if(!token){
     navigate("/login");
    }
    else{
      GetData()
    }
   };
   const addAgency1 = async () => {
    const cookies = new Cookies();
    var id = cookies.get('ID');
    console.log(id)
    const equi = await axiosReq("ObjectInstructions", {
        // title: title,
        // description: des,
    });
    if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
        // navigate("/tashakolRegister2",{
        //   OrganizationID:data?.organizationId
        // });
        setShowSuccessModal(true)
        setRecheck(!reCheck)
    }
    else {
        alert("Please fill inputs")
    }
}
const GetData = async() => {
  console.log(1234)
  const dataUser = await axiosReq("Agencies/" +"agency/" + params);
  console.log(dataUser)
  setTitle(dataUser
    ?.name)
  setTelephoneNumber(dataUser
    ?.mobileNumber)
  setPhone(dataUser
    ?.phoneNumber)
  setHouseNumber(dataUser
    ?.houseNumber)
  setStatus(dataUser
    ?.status)
  setEmail(dataUser
    ?.emailAddress)
  setWebsite(dataUser
    ?.websiteAddress)
  setCode(dataUser
    ?.code)
  setStreet(dataUser
    ?.street)
  setCity(dataUser
    ?.city)
  setAddress(dataUser
    ?.address)
  setZip(dataUser
    ?.zipCode)
  setEndDate(dataUser
    ?.expireDate)
  setDescription(dataUser
    ?.description)

  
}
    return (
        <div>
        <div className="mt-6">
        <div className="flex justify-between  mx-4">

        <span className="text-[#000] font-bold text-base mx-4 my-6">
        * You can edit any of the following fields
            </span>
        
        </div>
        </div>
      <div className="w-[60%] mx-auto block h-[450px] overflow-y-auto my-5 shadow-grayShadow p-2 rounded-md">
        <div className="relative w-[80px] h-[80px] mx-auto">
        {/* <img src={Img1} alt="avatar" className="w-[80px] h-[80px] rounded-full"/>
        <button className="absolute bg-green w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-greenShadow bottom-0.5 -right-3">
            <Pencil className="fill-white w-[15px] h-[15px]"/>
        </button> */}
               <ImageUpload img={Img1} file={file} setFile={setFile}/>

        </div>
      <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="title">
    Name
      </label>
      <input value={title}  onChange={(e)=>setTitle(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Tirajhe Complex"/>
      
    </div>
    <div className="flex">
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="status">
        status
      </label>
    
                    
      <select
      onChange={(e)=>setStatus(e.target.value)}
                            id="statusSelect"
                            name="statusSelect"
                            className="w-full bg-white rounded-sm border border-borderGray py-3 px-4">
                            <option selected={status=="Active"?true:false} value="Active">Active</option>
                            <option selected={status=="DeActive"?true:false} value="DeActive">DeActive</option>
                            <option selected={status=="Delete"?true:false} value="Delete">Delete</option>
                            <option selected={status=="Expired"?true:false} value="Expired">Expired</option> 

</select>
               
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Mobile Number
      </label>
      <input value={TelephoneNumber}  onChange={(e)=>setTelephoneNumber(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="+9889011457575"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Phone Number
      </label>
      <input value={phone}  onChange={(e)=>setPhone(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="+9889011457575"/>
      
    </div>
    </div>
    <div className="flex">
 
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      House Number
      </label>
      <input value={houseNumber}  onChange={(e)=>setHouseNumber(e.target.value)}   class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="+9889011457575"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Email
      </label>
      <input value={Email} onChange={(e)=>setEmail(e.target.value)}  class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="info@gmail.com"/>
      
    </div>
    </div>
   <div className="flex w-full">
  
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Website Address
      </label>
      <input value={website} onChange={(e)=>setWebsite(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="info.com"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Code
      </label>
      <input value={codes} onChange={(e)=>setCode(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="16682454"/>
      
    </div>
   </div>
   <div className="flex w-full">
  
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
Street      </label>
      <input value={street}  onChange={(e)=>setStreet(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="rand"/>
      
    </div>
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      City
      </label>
      <input value={city} onChange={(e)=>setCity(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="tokyo"/>
      
    </div>
  
   </div>

    <div class="w-full  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="address">
       Address
      </label>
      <input value={Address}  onChange={(e)=>setAddress(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="Ashrafi HW,boustan St,No 123"/>
      
    </div>
    <div className="flex items-center">
    <div class="w-1/2  px-3 mt-6">
      <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="phone">
      Zip Code
      </label>
      <input value={zip} onChange={(e)=>setZip(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="tokyo"/>
      
    </div>
<div class="w-1/2  px-3 mt-6">
<label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="end-date">
    Expired Date 
  </label>
  <div class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
  <DatePicker className="red-border" selected={new Date()} onChange={(date) => setEndDate(date)} />
   </div>
</div>
</div>
 <div className="flex items-center">

    
    <div className="w-full  px-3 mt-6">
    <label class="block  tracking-wide text-[#000] text-xs font-bold mb-2" for="description">
        Description
      </label>
    <textarea value={Description} onChange={(e)=>setDescription(e.target.value)} class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="
    Security management for the entry of people from the west door of Tiraje shopping center
    "/>
      
    </div>
  
 </div>


 <div class="  px-3 mt-4 flex justify-center">
    <button onClick={()=>editAgency()} className="bg-green mb-5 rounded-lg  shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center" >
            <WhiteCheck className="mr-2 w-6 h-6 text-white hover:text-green"/>
                      <span className="mr-3 text-base font-bold font-IRsans text-white text-left hover:text-green">
                      Save
                      </span>
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
                      Add Agency
                      </span>
                   
                    </div>
                    
                    <div className="relative flex-auto">
                      <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                      You have successfully added a new agency
                      </p>
                    </div>
                   
                    <div className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                      <button
                        className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowNewModal(false)}
                      >
                       add
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
      
 {/* <div className="w-full mb-7">
        <Map/>
    </div> */}
   
    

      </div>
      {showSuccessModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                    successful
                                </span>

                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                                    Add instruction successfully
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowSuccessModal(false)}>
                                    Continue
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowSuccessModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}
        </div>
    )

}

export default EditAgencyPage;