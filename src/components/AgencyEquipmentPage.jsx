import React from "react";

import Pdf from "../assets/icon/pdf";
import ImgIcon from "../assets/icon/image";
import VideoIcon from "../assets/icon/video";
import VoiceIcon from "../assets/icon/voice";
import BluePencil from "../assets/icon/bluePencil";
import WhitePencil from "../assets/icon/whitePencil";
import Trash from "../assets/icon/trash";
import WhiteTrash from "../assets/icon/whiteTrash";
import Cross from "../assets/icon/cross";
const AgencyEquipmentPage = ({ data }) => {
    const [showAddModal,
        setShowAddModal] = React.useState(false);
       
        const [showEditModal,
            setShowEditModal] = React.useState(false);
        const [showDelModal,
            setShowDelModal] = React.useState(false);
            const [AddObjectEquModal,
                setAddObjectEquModal] = React.useState(false);
   
    return (
        <div className="flex p-4 xs:px-1 mt-4">
            <div
                className="w-full lg-md:w-[100%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10 xs:px-3">
               <div className=" border-b-2 border-borderGray pb-4">
                
                <span className="text-[#000] font-bold text-xl">
                    Agency Equipment
                </span>
             
        
            <div className="h-4"></div>
           <div className="flex items-center justify-between">
           <p className="text-[#000] font-bold text-base text-justify">
                *     You can add the equipment and specify the quantity and whether or not this equipment is consumable.
            </p>
            <button
            onClick={() => setAddObjectEquModal(true)}
            className=" lg-md:block sm:w-[100%] px-4 h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
            + Add Equipment
            </button>
           </div>

        </div>
        <ul className="mt-3">
          
                        <li
                        className="py-8 sm:py-5 flex xl:flex-col xl:items-start lg:flex-row md:flex-col md:items-start sm:flex-row justify-between items-center border-b-2 border-borderGray border-dashed">
                     <div className="flex items-center mt-0 sm:mt-2">
                  
                        <div>
                            <div className="flex flex-row">
                            <span className="font-bold text-green text-base mr-4">
                                1) 
                                </span>
                                <span className="font-bold text-[#000] text-base">
                                Salt
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
          
            disabled={false}

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
            
            disabled={false}

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
                            disabled={false}
                      
                            id="checkBoxOne"/>
            
                            </div>
                            </div>
                    </li> 
                    
     
         
          
        </ul>
</div>
{AddObjectEquModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] sm-xs:w-[80%] my-5 mx-auto max-w-5xl bg-white p-5">
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
        Agency Equipment Title
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
       
        />

</div>

<div className="w-full  mt-6">

                     <div className="w-full flex justify-between">
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
       

        />

                        </div>
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
                    

                        />
        
                        </div>
                   
    <button
    onClick={()=>{ setAddObjectEquModal(false)}}
        className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
        + Add  Equipment To The List
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

export default AgencyEquipmentPage;