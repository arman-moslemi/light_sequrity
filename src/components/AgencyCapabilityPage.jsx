import React from "react";



const AgencyInstruction = ({ data }) => {
    const [showAddModal,
        setShowAddModal] = React.useState(false);
       

  
   
    return (
        <div className="flex p-4 xs:px-1 mt-4">
            <div
                className="w-full lg-md:w-[100%] mr-[1%] bg-white rounded-2xl shadow-object h-auto p-10 xs:px-3">
                <div className=" border-b-2 border-borderGray pb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[#000] font-bold text-xl 2xs:text-base">
                            Add Required Capability
                        </span>
                        
                        {/* <button

                            className="w-max px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Submit
                        </button> */}
                    </div>



                    <div className="h-5"></div>
                   <div className="flex items-center justify-between">
                   <p className="text-[#000] font-bold 2xs:font-medium text-base text-justify">
                        *    You can add required abilities in this section</p>
                    <button
                            onClick={() => setShowAddModal(true)}
                            className=" lg-md:block w-max sm-xs:w-[100%] 2xs:px-1 px-4 h-[40px] rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add Capability To The List
                        </button>
                   </div>

                </div>
               <ul className="mt-6">
                <li className="flex items-center w-full py-4 border-b border-dashed border-borderGray my-3">
                    <span className="font-bold text-green mr-6">
                        1 )
                    </span>
                    <span className="font-semibold text-[#000] text-base">
                    Having a second-level driver's license
                                                </span>
                </li>
                <li className="flex items-center w-full py-4 border-b border-dashed border-borderGray my-3">
                    <span className="font-bold text-green mr-6">
                        2 )
                    </span>
                    <span className="font-semibold text-[#000] text-base">
                    Having a height above 180 cm
                                                </span>
                </li>
               </ul>
            </div>
           
            {showAddModal
                ? <> <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[30%] bg-white rounded-md p-8 md:w-[40%] sm:w-[50%] sm-xs:w-[60%] xs:w-[80%] my-5 mx-auto max-w-5xl">

                       
                <span className="font-bold text-green text-base">
                    Add  Required Capability
                </span>
                <div class="w-full mt-6">
                    <label
                        class=" flex items-center  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        <span>
                             Required Capability Title
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
                        
                        placeholder="Type Required Cabability Title Here..." />
                    <div className="flex justify-end items-center">
                    <button
                            onClick={() => setShowAddModal(false)}
                            className="px-3 py-2 mb-1 rounded-lg shadow-grayShadow text-sm font-bold bg-green  text-white  hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            + Add
                        </button>
                        <button
                            onClick={() => setShowAddModal(false)}
                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >Cancel
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

export default AgencyInstruction;