import React, {useState,useEffect} from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import {useParams } from "react-router-dom";
import Cross from "../assets/icon/cross";
import {apiUrl} from "../commons/inFormTypes";
import axios from "axios";
const ObjectEquipmentTab = () =>{
    const [AddObjectEquModal,
        setAddObjectEquModal] = React.useState(false);
        const [showSuccessModal,
            setShowSuccessModal] = React.useState(false);
            const [showErrorModal,
                setShowErrorModal] = React.useState(false);
    const [equ, setEqu] = useState();
    const [equUser, setEquUser] = useState();
    const [title, setTitle] = useState();
    const [totalCount, setTotal] = useState();
    const [usedCount, setUsed] = useState();
    const [isConsumable, setCons] = useState(false);
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
        console.log("AllEq")
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        console.log(params)

        const datas = await axiosReq("Equipments");
        console.log(datas)

        setEqu(datas.filter(x=>x.agencyId==id))
        const equuser = await axiosReq("Objects/"+params+"/Equipments");
        console.log(222)
        console.log(equuser)

        setEquUser(equuser)
    }
    const submitEqu = async (check,eqid) => {
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        if(check==true){
            const equi = await axiosReq("Objects/"+params+"/Equipments",{
                objectId:params,
                equipmentId:eqid,
                needCount: 1,
            });
            if (equi?.status == 200 || equi?.status == 204|| equi?.status == 201) {
                // navigate("/tashakolRegister2",{
                //   OrganizationID:data?.organizationId
                // });
                alert("Success")
          setRecheck(!reCheck)
              }
              else {
console.log(equi?.Message)              }
        }
        else{
            const delIns =
            await axios.delete(apiUrl+"Objects/" + params + "/Equipments/"+eqid,
                {headers: {
           Authorization: `Bearer ${cookies.get('token')}`
                     
}})
            if (delIns?.status == 200 || delIns?.status == 204 || delIns?.status == 201) {
                // navigate("/tashakolRegister2",{
                //   OrganizationID:data?.organizationId
                // });
                setShowSuccessModal(true)
                setRecheck(!reCheck)
            }
            else {
                console.log(delIns?.Message)
            }
        }
    }
    const addEqu = async () => {
        console.log("AllEq")
        const cookies = new Cookies();
        var id = cookies.get('ID');
        console.log(id)
        const equi = await axiosReq("Equipments",{
            agencyId:id,
            title:title,
            totalCount: totalCount,
            usedCount: usedCount,
            isConsumable: isConsumable
        });
        if (equi?.status == 200 || equi?.status == 204|| equi?.status == 201) {
            // navigate("/tashakolRegister2",{
            //   OrganizationID:data?.organizationId
            // });
            setShowSuccessModal(true)
      setRecheck(!reCheck)
          }
          else {
            setShowErrorModal(true)
          }
    }
    return(
        <div className="flex p-4 sm:px-2 xs:px-0">
        <div
                 className="w-[69%] lg-md:w-[100%] mr-[1%] sm:mr-0 bg-white rounded-2xl shadow-object h-auto p-10 md-sm:px-3 xs:px-1">
                   <div className=" border-b-2 border-borderGray pb-4">
                
                    <span className="text-[#000] font-bold text-xl">
                        Object Equipment
                    </span>
                 
            
                <div className="h-4"></div>
                <p className="text-[#000] font-bold text-base text-justify">
                    *     You can choose the equipment from the list below, specify the quantity and whether or not this equipment is consumable.
                </p>
                <button
                onClick={()=>setAddObjectEquModal(true)}
                className="hidden lg-md:block sm:w-[100%] px-4 h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                + Add Object Equipment To The List
                </button>

            </div>
            <ul className="mt-3">
                {
                    equ?.map((item)=>{
                        return(
                            <li
                            className="py-8 sm:py-5 flex xl:flex-col xl:items-start lg:flex-row md:flex-col md:items-start sm:flex-row justify-between items-center border-b-2 border-borderGray border-dashed">
                         <div className="flex items-center mt-0 sm:mt-2">
                         <input
                                className="largeCheckBox mr-5 2xs:mr-1  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                checked={equUser?.some(function(ele) {
                                    return ele.equipment?.equipmentId == item.equipmentId;
                                })}
                                onChange={(e)=>submitEqu(e.target.checked,item.equipmentId)}
                                id="checkBoxOne"/>
                            <div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#000] text-base">
                                    {item?.title}
                                    </span>
                         
                                </div>
                           
                            </div>
                         </div>
                         <div className="flex items-center justify-between sm:flex-wrap  xl:mt-4 lg:mt-0 md:mt-4 sm:mt-0 ml-0 sm:ml-7 xs:ml-5 2xs:ml-3">
                                <div className="flex mr-2 mt-0 sm:mt-2">
                                <span className="font-bold text-[#000] text-base mr-2">
                                       Total Count :  
                                        </span>
                                        <input
                required="true"
                class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                id="title"
                type="number"
                value={item?.totalCount}
                disabled={true}

              />
        
                                </div>
                                <div className="flex mr-2 mt-0 sm:mt-2 ">
                                <span className="font-bold text-[#000] text-base mr-2">
                                       Used Count :  
                                        </span>
                                        <input
                required="true"
                class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
                id="title"
                type="number"
                value={item?.usedCount}
                disabled={true}

              />
        
                                </div>
                                <div className="flex">
                                <span className="font-bold text-[#000] text-base mr-2 mt-0 sm:mt-2 ">
                                Consumable :  
                                        </span>
                                        <input
                                className="largeCheckBox mr-5 sm:mr-1 mt-1 sm:mt-3 text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
                                disabled={true}
                                checked={item?.isConsumable}
                                id="checkBoxOne"/>
                
                                </div>
                                </div>
                        </li> 
                        
                        )
                    })
                  
                }
             
              
            </ul>
            </div>

            <div className="lg-md:hidden w-[29%] ml-[1%] bg-white rounded-2xl shadow-object h-min p-6">

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
        placeholder="Type Instruction Title..."
        onChange={(e)=>setTitle(e.target.value)}
        />

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
        placeholder="0"
        onChange={(e)=>setTotal(e.target.value)}

        />

                        </div>
                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Used Count :
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"
        onChange={(e)=>setUsed(e.target.value)}

        />

                        </div>
                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"
                        onChange={(e)=>setCons(e.target.checked)}

                        />
        
                        </div>
                   
    <button
    onClick={()=>addEqu()}
        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
        + Add Object Equipment To The List
    </button>
</div>
</div>
{showErrorModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                            <div className="flex items-centers justify-left  rounded-t">

                                <span className="mr-3 text-xl font-bold font-IRsans text-black text-left">
                                    Warning
                                </span>

                            </div>

                            <div class="flex flex-wrap  mt-6">
                                <p
                                    className="my-4 text-black text-base leading-relaxed break-words whitespace-normal font-IRsans">
                                    Please fill inputs
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                <button
                                    className="text-white bg-red hover:shadow-greenShadow hover:bg-red shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowErrorModal(false)}>
                                    Continue
                                </button>
                                <button
                                    className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowErrorModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null}
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

            {AddObjectEquModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[60%] sm-xs:w-[80%] my-5 mx-auto max-w-5xl bg-white p-5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green text-base">
                        Add Object Equipment
                      </span>
                      <button onClick={() => setAddObjectEquModal(false)}>
                        <Cross />
                      </button>
                    </div>
                    
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
        placeholder="Type Instruction Title..."
        onChange={(e)=>setTitle(e.target.value)}
        />

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
        placeholder="0"
        onChange={(e)=>setTotal(e.target.value)}

        />

                        </div>
                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Used Count :
                                </span>
                                <input
        required="true"
        class="appearance-none block w-[60px] bg-white text-[#000] border border-borderGray rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white"
        id="title"
        type="number"
        placeholder="0"
        onChange={(e)=>setUsed(e.target.value)}

        />

                        </div>
                        <div className="flex my-4">
                        <span className="font-bold text-[#000] text-base mr-2">
                        Consumable :  
                                </span>
                                <input
                        className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                        type="checkbox"
                        value=""
                        id="checkBoxOne"
                        onChange={(e)=>setCons(e.target.checked)}

                        />
        
                        </div>
                   
    <button
    onClick={()=>{addEqu(); setAddObjectEquModal(false)}}
        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
        + Add Object Equipment To The List
    </button>
</div>

                    </div>
                </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                </>
                : null

            }
    </div>
    )
}

export default ObjectEquipmentTab