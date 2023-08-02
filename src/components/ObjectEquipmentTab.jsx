import React, {useState,useEffect} from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import {useParams } from "react-router-dom";

const ObjectEquipmentTab = () =>{
    const [equ, setEqu] = useState();
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

        // setEqu(equuser)
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
            alert("Success")
      setRecheck(!reCheck)
          }
          else {
            alert("Please fill inputs")
          }
    }
    return(
        <div className="flex p-4 sm:px-1">
        <div
                 className="w-[69%] lg-md:w-[100%] mr-[1%] sm:mr-0 bg-white rounded-2xl shadow-object h-auto p-10 md-sm:px-3">
                   <div className=" border-b-2 border-borderGray pb-4">
                
                    <span className="text-[#000] font-bold text-xl">
                        Object Equipment
                    </span>
                 
            
                <div className="h-4"></div>
                <p className="text-[#000] font-bold text-base text-justify">
                    *     You can choose the equipment from the list below, specify the quantity and whether or not this equipment is consumable.
                </p>
                <button
                onClick={()=>addEqu()}
                className="hidden lg-md:block sm-xs:w-[100%] px-4 h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                + Add Object Equipment To The List
                </button>

            </div>
            <ul className="mt-6">
                {
                    equ?.map((item)=>{
                        return(
                            <li
                            className="py-8 flex xl:flex-col xl:items-start lg:flex-row md:flex-col md:items-start justify-between items-center border-b-2 border-borderGray border-dashed">
                         <div className="flex items-center">
                         <input
                                className="largeCheckBox mr-5  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                type="checkbox"
                                value=""
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
                         <div className="flex items-center justify-between xl:mt-4 lg:mt-0 md:mt-4">
                                <div className="flex mr-2">
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
                                <div className="flex mr-2">
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
                                <span className="font-bold text-[#000] text-base mr-2">
                                Consumable :  
                                        </span>
                                        <input
                                className="largeCheckBox mr-5 sm:mr-1  text-green w-8 h-8 bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
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
    </div>
    )
}

export default ObjectEquipmentTab