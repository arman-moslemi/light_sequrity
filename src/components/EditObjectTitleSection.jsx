import React ,{useState} from "react";
import WhiteCheck from "../assets/icon/whiteCheck";


const EditObjectTitleSection = () => {
    const [showNewModal,setShowNewModal] = useState(false);
    return (
        <div className="flex justify-between items-center mt-8  mx-4">
            <div>
                <p className="font-bold text-lg text-[#000]">
                    Edit Object
                </p>

                <div className="flex items-center ">
                    <p className="font-medium text-sm text-[#000]">
                        Dashboard
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                    <p className="font-medium text-sm text-[#000]">
                        Object
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                    <p className="font-medium text-sm text-[#000]">
                        Edit Object
                    </p>
                </div>
            </div>
            <button onClick={()=>setShowNewModal(true)} className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center" >
            <WhiteCheck className="mr-2 w-6 h-6 text-white"/>
                      <span className="mr-3 text-base font-bold font-IRsans text-white text-left">
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
                      
                      <WhiteCheck className="mr-2 w-6 h-6 text-white"/>
                      <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                      Save
                      </span>
                   
                    </div>
                    
                    <div className="relative flex-auto">
                      <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                      Are you sure want to delete <span>20</span> items?
                      </p>
                    </div>
                   
                    <div className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                      <button
                        className="text-white bg-[#cd053d] hover:shadow-hoverShadow hover:bg-hoverDelBack shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowNewModal(false)}
                      >
                       Delete
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

    )
}

export default EditObjectTitleSection;