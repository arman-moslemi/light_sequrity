import React, {useState} from "react";
import MiniDown from "../assets/icon/miniDown";
import Up from "../assets/icon/up";
import Trash from "../assets/icon/trash";
import Pencil from "../assets/icon/pencil"
const TextQuestionsTab = ({data}) => {
    const [showEditModal,
        setShowEditModal] = useState(false);
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
    const [addOptionBox,    
        setAddOptionBox] = React.useState(false); 
    const [viewOption,
    setViewOption
    ]      = React.useState(false);
    const tableRow = [
        {
            id: '1',
            number: '1',
            question: "Where is the best place to be safe from an earthquake?",
          
            contract: 'Yes',
   
            //         < button onClick={() => setShowAction(!showAction)}>
            //             <Bullet/>
            //         </button>
            //         {showAction
            //             ? <div className="z-50  absolute  right-[55px] top-[2px]">
            //                     <div className="triangleRight"></div>
            //                     <div
            //                         className="z-50 w-[135px] h-auto  bg-white shadow-whiteShodow  rounded-lg mBg">

            //                         <Link
            //                             to={''}
            //                             className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

            //                             <Pencil className="text-[#000] mr-3"/>
            //                             <span className="font-medium text-[#000]">
            //                                 Edit
            //                             </span>
            //                         </Link>
            //                         <button
            //                             className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

            //                             <Trash className="text-[#b71d18] mr-3"/>
            //                             <span className="font-medium text-[#b71d18]">
            //                                 Delete
            //                             </span>
            //                         </button>

            //                     </div>
            //                 </div>
            //             : <></>}
            //     </div>,
            edit:
            <>
            <button onClick={() =>setShowEditModal(true)}>
                <Pencil/>
            </button>
            {showEditModal
                        ? <> <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                                <div
                                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                    <div className="flex items-centers justify-left  rounded-t">

                                        <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                            Edit Question
                                        </span>

                                    </div>
                                    <div class="flex flex-col flex-wrap  mt-6">
                                        <p
                                            className="mt-4 mb-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                            Where is the best place to be safe from an earthquake?
                                        </p>
                                        <input
                                            class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="title"
                                            type="text"
                                            placeholder="Type Your Question Title Here..."/>

                                    </div>
                                   <div className="flex justify-between items-end mb-3">
                                   <div class="flex flex-col flex-wrap">
                                        <p
                                            className="my-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                            Select Your Question Type First
                                        </p>
                                        <select
                                            id="statusSelect"
                                            name="statusSelect"
                                            onChange={(e)=>console.log(e)}
                                            className="w-full bg-white rounded border border-borderGray   text-[#000] py-3 px-4">
                                            <option value="text">Text</option>
                                            <option value="blank">Fill In The Blank</option>
                                            <option value="singleChoice" >Single Choice</option>
                                            <option value="multipleChoice">Multiple Choice</option>
                                        </select>

                                    </div>
                                    <div className="flex items-center mb-4">
                     <input
                            className=" mr-2  text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                            type="checkbox"
                            value=""
                            id="checkBoxOne"/>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#000] text-sm">
                                Is For Contract ?
                                </span>
                     
                            </div>
                       
                        </div>
                     </div>
                                   </div>
                                    <div className="my-2">
                                     <div className="flex justify-between">
                                     <span className="font-bold text-black text-sm">
                                            Options 
                                        </span>
                                        <span className="font-bold text-green text-sm">
                                            Answer
                                        </span>
                                     </div>
                                    <div className="h-[150px] overflow-y-auto">
                                    <div className="w-full flex items-center justify-between mt-3">
                                       <input
                                            class="appearance-none block w-[85%] bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="title"
                                            type="text"
                                            placeholder="Type Your Option Here...."/>
                                                   <input
                    className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                    type="checkbox"
                    value=""
                    id="checkBoxDelete"
                    />
                                       </div>
                                       {
                                        addOptionBox ? 
                                        <div className="w-full flex items-center justify-between mt-1">
                                        <input
                                             class="appearance-none block w-[85%] bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                             id="title"
                                             type="text"
                                             placeholder="Type Your Option Here...."/>
                                                    <input
                     className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                     type="checkbox"
                     value=""
                     id="checkBoxDelete"
                     />
                                        </div>
                                        :
                                        null

                                       }
                                    </div>
                                       <button className="text-green font-bold text-sm float-left" onClick={()=>setAddOptionBox(true)}>
                                        + Add Option
                                       </button>
                                    </div>
                                    <div
                                        className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                        <button
                                            className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowEditModal(false)}>
                                            Add
                                        </button>
                                        <button
                                            className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowEditModal(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                  :null}
            </>
            ,
            delete:<button>
                <Trash/>
            </button>,
            viewOtions:<>
            <button onClick={()=>{setViewOption(!viewOption)}}>
                {
                    viewOption?
                    <Up/>
                    :
                    <MiniDown/>
                }
            </button>
            {/* {
                viewOption?
                <div className="w-full h-3 bg-mainColor">
                </div>
            
                :
                null
            } */}
            </>

        }
    ]
    const tableBody = tableRow.map((tableRow) =><>
    < tr key = {
        tableRow.objectId
    } className = {viewOption ? "" : "border-b border-b-borderGray"}
    > <td className="py-4 text-sm text-left pl-10">
        {tableRow.number
}
    </td> < td className = "py-4 text-sm text-left px-4" > 
    <>
    {
        tableRow.question
    } 
    </>
    </td > 
        < td className = "py-4 text-sm text-center px-4" > {
        tableRow.contract
    } </td > < td className = "py-4 text-sm text-center px-4" > {
        tableRow.edit
    } </td>
         <td className="py-4 text-sm text-center px-4">
        {tableRow.delete}
    </td >
    <td className="py-4 text-sm text-center px-4">
        {tableRow.viewOtions}
    </td >
     </tr>
     {
          viewOption?
          <tr  className = "border-b border-b-borderGray">
            <td>

            </td>
                <td className="w-full h-2 ">
                    <ul>
                        <li className="flex justify-between py-3 px-3 rounded-md my-1 bg-[#f4f4f4] w-[50%]">
                            <p className="">
                                In Street
                            </p>
                            <p className="text-green font-bold text-sm">
                                Answer
                            </p>
                        </li>
                        <li className="flex justify-between py-3 px-3 rounded-md my-1 bg-[#f4f4f4] w-[50%]">
                            <p className="">
                                In Street
                            </p>
                            <p className="text-green font-bold text-sm">
                                Answer
                            </p>
                        </li>
                        <li className="flex justify-between py-3 px-3 rounded-md my-1 bg-[#f4f4f4] w-[50%]">
                            <p className="">
                                In Street
                            </p>
                            <p className="text-black font-bold text-sm">
                                Not Answer
                            </p>
                        </li>
                    </ul>
                </td>
          </tr>:null
     }
    
    </>)
    return (
        <div className="p-4">
            <div className=" pb-4">
                <div className="flex justify-between items-center">
                    <span className="text-[#000] font-bold text-base w-[80%]">
                        * You Can See The List Of All Questions In The Table Below
                    </span>
                    <button
                        onClick={() => setShowSuccessModal(true)}
                        className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center">

                        + Add Question

                    </button>
                    {showSuccessModal
                        ? <> <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-[30%] my-5 mx-auto max-w-5xl">

                                <div
                                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                    <div className="flex items-centers justify-left  rounded-t">

                                        <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                            Add Question
                                        </span>

                                    </div>
                                    <div class="flex flex-col flex-wrap  mt-6">
                                        <p
                                            className="mt-4 mb-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                            Question Title
                                        </p>
                                        <input
                                            class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="title"
                                            type="text"
                                            placeholder="Type Your Question Title Here..."/>

                                    </div>
                                   <div className="flex justify-between items-end mb-3">
                                   <div class="flex flex-col flex-wrap">
                                        <p
                                            className="my-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                            Select Your Question Type First
                                        </p>
                                        <select
                                            id="statusSelect"
                                            name="statusSelect"
                                            onChange={(e)=>console.log(e)}
                                            className="w-full bg-white rounded border border-borderGray   text-[#000] py-3 px-4">
                                            <option value="text">Text</option>
                                            <option value="blank">Fill In The Blank</option>
                                            <option value="singleChoice" >Single Choice</option>
                                            <option value="multipleChoice">Multiple Choice</option>
                                        </select>

                                    </div>
                                    <div className="flex items-center mb-4">
                     <input
                            className=" mr-2  text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                            type="checkbox"
                            value=""
                            id="checkBoxOne"/>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#000] text-sm">
                                Is For Contract ?
                                </span>
                     
                            </div>
                       
                        </div>
                     </div>
                                   </div>
                                    <div className="my-2">
                                     <div className="flex justify-between">
                                     <span className="font-bold text-black text-sm">
                                            Options 
                                        </span>
                                        <span className="font-bold text-green text-sm">
                                            Answer
                                        </span>
                                     </div>
                                    <div className="h-[150px] overflow-y-auto">
                                    <div className="w-full flex items-center justify-between mt-3">
                                       <input
                                            class="appearance-none block w-[85%] bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="title"
                                            type="text"
                                            placeholder="Type Your Option Here...."/>
                                                   <input
                    className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                    type="checkbox"
                    value=""
                    id="checkBoxDelete"
                    />
                                       </div>
                                       {
                                        addOptionBox ? 
                                        <div className="w-full flex items-center justify-between mt-1">
                                        <input
                                             class="appearance-none block w-[85%] bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                             id="title"
                                             type="text"
                                             placeholder="Type Your Option Here...."/>
                                                    <input
                     className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                     type="checkbox"
                     value=""
                     id="checkBoxDelete"
                     />
                                        </div>
                                        :
                                        null

                                       }
                                    </div>
                                       <button className="text-green font-bold text-sm" onClick={()=>setAddOptionBox(true)}>
                                        + Add Option
                                       </button>
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
                        </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                  :null}
                </div>

            </div>
            <div className="">

                <div className="  w-full rounded-2xl  shadow-tableShadow mt-5">

                    <table class="table-auto w-full">
                        <thead
                            className="bg-hoverBackground h-14  w-full whitespace-nowrap overflow-x-scroll"
                            style={{
                            borderRadius: '20px'
                        }}>
                            <tr
                                className="text-black  p-6 whitespace-nowrap overflow-x-scroll"
                                style={{
                                borderRadius: '20px'
                            }}>

                                <th className="text-black  text-left   md:px-4 px-4">Number</th >
                                <th className="text-black  text-left   md:px-4 px-4">Question / Answers</th>
                              
                                <th className="text-black  text-center  md:px-4 px-4">Is For Contract ?</th >
                                <th className="text-black  text-center  md:px-4 px-4">Edit</th>
                                <th className="text-black  text-center  md:px-4 px-4">Delete</th>
                                <th className="text-black  text-center  md:px-4 px-4">View Options</th>
                            </tr >
                        </thead>
                        < tbody >
                            {tableBody
}
                        </tbody>

                    </table >
                    <div className=" w-full flex justify-end py-8 px-8">
                        <p className="text-sm text-[#000] font-bold">
                            Row per pages :
                        </p>
                        <form action="">

                            <select
                                id="rowsPerPage"
                                name="rowsPerPage"
                                className="px-2 bg-white rounded-sm ">
                                <option value="five">5</option>
                                <option value="ten">10</option>
                                <option value="twenyfive">25</option>
                                <option value="fifty">50</option>
                            </select>

                        </form>
                        <p className="text-sm font-medium text-[#000] ml-4">
                            11-15 of 20
                        </p>
                        <div className="flex items-center ml-4"></div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default TextQuestionsTab;