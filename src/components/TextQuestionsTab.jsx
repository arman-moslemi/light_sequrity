import React, { useState, useEffect } from "react";
import MiniDown from "../assets/icon/miniDown";
import Up from "../assets/icon/up";
import Trash from "../assets/icon/trash";
import Pencil from "../assets/icon/pencil";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
import { useParams } from "react-router-dom";
import Cross from "../assets/icon/cross";
import {apiUrl} from "../commons/inFormTypes";
import axios from "axios";
const TextQuestionsTab = () => {
    const [showEditModal,
        setShowEditModal] = useState(false);
    const [AddQuestionModal,
        setAddQuestionModal] = useState(false);
    const [categoryModal,
        setCategoryModal] = useState(false);
    const [categoryList,
        setCategoryList] = useState([]);
    const [category,
        setCategory] = useState();
    const [addOptionBox,
        setAddOptionBox] = useState(false);
    const [viewOption,
        setViewOption] = useState(false);
    const [optionAdd,
        setOptionAdd] = useState([{
            value:"",isAnswer:false
        }]);
    const [optionEdit,
        setOptionEdit] = useState([]);
        const [showSuccessModal,
            setShowSuccessModal] = useState(false);
            const [showErrorModal,
                setShowErrorModal] = useState(false);
    const [opID,
        setOPID] = useState();
    const [queType,
        setQueType] = useState();
        const [data, setData] = useState([]);
        const [title, setTitle] = useState();
        const [editTitle, setEditTitle] = useState();
        const [editQueType, setEditQueType] = useState();

    
        const [reCheck, setRecheck] = useState(false);
        let navigate = useNavigate();
    
        useEffect(() => {
    
            auth();
        }, [reCheck,category]);
        useEffect(() => {
            GetCategories();
          setCategoryModal(true)
        }, []);
        const auth = async () => {
            const cookies = new Cookies();
            var token = cookies.get('token');
            console.log(token)
            if (!token) {
                navigate("/login");
            } else if(category) {
    
                GetData()
    
            }
        };
        const GetData = async () => {
            const dataUser = await axiosReq("Questions/"+category+"/questions");
            console.log(dataUser)
            setData(dataUser)
         
    
            
        }
        const GetCategories = async () => {
            const cookies = new Cookies();
            var id = cookies.get('ID');
            const dataUser = await axiosReq("QuestionCategories/"+id+"/Active");
            console.log(dataUser)
    
            setCategoryList(dataUser)
    
           
        }

        const addQuestions = async () => {
            const cookies = new Cookies();
            var id = cookies.get('ID');
            console.log(id)
            const equi = await axiosReq("Questions", {
                
                    questionCategoryId: category,
                    title: title,
                    archived: false,
                    questionType:queType,
                    options:optionAdd
                  
            });
            if (equi?.status == 200 || equi?.status == 204 || equi?.status == 201) {
                // setShowSuccessModal(true)
                setRecheck(!reCheck)
                alert("success")
            setOptionAdd([{
                value:"",isAnswer:false
            }])
            }
            else {
                // setShowErrorModal(true)
            }
        }

        const editQuestions = async () => {
            const cookies = new Cookies();
            var id = cookies.get('ID');
            console.log(id)
            var ss=[];
            optionEdit?.map((item)=>{
                ss.push({
                    questionId: opID,
                    value: item?.value,
                    isAnswer: item?.isAnswer 
                })
            })
            const delIns =
            await axios.put(apiUrl+"Questions/" + opID ,
            {
                questionCategoryId: category,
                title: editTitle,
                archived: false,
                questionType: editQueType,
                options: ss,
                questionId: opID
            },
                {headers: {
           Authorization: `Bearer ${cookies.get('token')}`
                     
}})
            if (delIns?.status == 200 || delIns?.status == 204 || delIns?.status == 201) {
                // setShowSuccessModal(true)
                setRecheck(!reCheck)
                alert("success")
            setOptionEdit([{
                value:"",isAnswer:false
            }])
            setEditTitle();
            setEditQueType();
            setShowEditModal(false)
            }
            else {
                // setShowErrorModal(true)
            }
        }
        const deleteQuestions = async () => {
            const cookies = new Cookies();
            var id = cookies.get('ID');
            console.log(id)
         
            const delIns =
            await axios.delete(apiUrl+"Questions/" + opID ,
          
                {headers: {
           Authorization: `Bearer ${cookies.get('token')}`
                     
}})
            if (delIns?.status == 200 || delIns?.status == 204 || delIns?.status == 201) {
                // setShowSuccessModal(true)
                setRecheck(!reCheck)
                alert("success")
        
            }
            else {
                // setShowErrorModal(true)
            }
        }
        const updateState = (id,val,check) => {
            const newState = optionAdd.map((obj,index) => {
              // 👇️ if id equals 2, update country property
              if (index === id) {
                if(val!=null){

                    return {...obj, value: val};
                }
                else{
                    return {...obj, isAnswer: check};

                }
              }
        
              // 👇️ otherwise return the object as is
              return obj;
            });
        
            setOptionAdd(newState);
          };
        const updateEditState = (id,val,check) => {
            const newState = optionEdit.map((obj,index) => {
              // 👇️ if id equals 2, update country property
              if (index === id) {
                if(val!=null){

                    return {...obj, value: val};
                }
                else{
                    return {...obj, isAnswer: check};

                }
              }
        
              // 👇️ otherwise return the object as is
              return obj;
            });
        
            setOptionEdit(newState);
          };

   
    const tableBody = data.map((tableRow,index) => <>
        < tr key={
            tableRow.questionId
        } className={viewOption ? "" : "border-b border-b-borderGray"}
        > 
        {/* <td className="py-4 text-sm text-left pl-10">
                {index+1}
            </td > */}
             < td className="py-4 text-sm  px-2 text-left" > <> {
                tableRow.title
            } </>
           </td >
           
             < td className="py-4 text-sm text-center px-2" > {tableRow?.questionType} </td >
            < td className="py-4 text-sm text-center px-2" > {tableRow?.archived?.toString()} </td >
            < td className="py-4 text-sm text-center px-2" > <> <button onClick={() =>  {setOPID(tableRow.questionId);setShowEditModal(true);
                setOptionEdit(tableRow?.questionOptions);setEditQueType(tableRow.questionType);setEditTitle(tableRow.title)}}>
            <Pencil />
        </button>
            {
                showEditModal && opID==tableRow.questionId
                    ? <> <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div
                            className="relative w-[40%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

                            <div
                                className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                <div className="flex items-centers justify-left  rounded-t">

                                    <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                        Edit Question
                                    </span>

                                </div>
                                <div class="flex flex-col items-start flex-nowrap text-left  mt-6">
                                    <p
                                        className="mt-4 mb-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                        Where is the best place to be safe from an earthquake?
                                    </p>
                                    <input
                                        class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="title"
                                        type="text"
                                        value={editTitle}
                                        onChange={(e)=>setEditTitle(e.target.value)}
                                        placeholder="Type Your Question Title Here..." />

                                </div>
                                <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3">
                                    <div class="flex flex-col flex-wrap">
                                        <p
                                            className="my-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                            Select Your Question Type First
                                        </p>
                                        <select
                                                    id="statusSelect"
                                                    name="statusSelect"
                                                    onChange={(e) => setEditQueType(e.target.value)}
                                                    value={tableRow?.questionType}
                                                    className="w-full bg-white rounded border border-borderGray   text-[#000] py-3 px-4">
                                                    <option value="Text">Text</option>
                                                    {/* <option value="blank">Fill In The Blank</option>*/}
                                                    <option value="Optional">Optional</option> 
                                                    <option value="MultiChoice">Multiple Choice</option>
                                                </select>

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
                                        {
                                            optionEdit?.map((item,index)=>{
                                                return(
                                                    <div className="w-full flex items-center justify-between mt-3">
                                                    <input
                                                        class="appearance-none block w-[85%] bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                        id="title"
                                                        type="text"
                                                        value={item?.value}
                                                        onChange={(e)=>updateEditState(index,e.target.value,null)}

                                                        placeholder="Type Your Option Here...." />
                                                    <input
                                                        className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                                                        type="checkbox"
                                                        value=""
                                                        onChange={(e)=>updateEditState(index,null,e.target.checked)}

                                                        checked={item?.isAnswer}
                                                        id="checkBoxDelete" />
                                                </div>
                                                )
                                            })
                                        }
                                      
                                      
                                    </div>
                                    <button
                                        className="text-green font-bold text-sm float-left"
                                        onClick={() =>setOptionEdit([...optionEdit,{
                                            value:"",
                                            isAnswer:false
                                        }])}>
                                        + Add Option
                                    </button>
                                </div>
                                <div
                                    className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                    <button
                                        className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() =>editQuestions()}>
                                        Edit
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
                    </div> < div className="opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                    : null}
        </></td > 
            <td className="py-4 text-sm text-center px-2">
              <button onClick={()=>deleteQuestions(tableRow.questionId)}>
                <Trash />
            </button>
            </td> < td className="py-4 text-sm text-center px-2" > <button
                onClick={() => {
                    setViewOption(!viewOption);
                    setOPID(tableRow.questionId)
                }}>
                {viewOption && opID==tableRow.questionId
                    ? <Up />
                    : <MiniDown />
                }
            </button> </td >
        </tr > {
                viewOption && opID==tableRow.questionId
                    ? 
                <tr className="border-b border-b-borderGray">
                    <td></td>
                    <td className="w-full h-2 ">
                        <ul>
                            {
                                tableRow?.questionOptions?.map((item)=>{
                                    return(
                                        <li
                                        className="flex justify-between py-3 px-3 rounded-md my-1 bg-[#f4f4f4] w-[50%]">
                                        <p className="">
                                           {item?.value}
                                        </p>
                                        {
                                            item?.isAnswer?
                                            <p className="text-green font-bold text-sm">
                                            Answer
                                        </p>
                                            :
                                            <p className="text-black font-bold text-sm">
                                            Not Answer
                                        </p>
                                        }
                                        
                                    </li>
                                    )
                                })
                            }
                          
                        
                         
                        </ul>
                    </td>
                </tr>
                : null
        } </>)

        const   removeOption=(index)=> {
            var array = [...optionAdd]; // make a separate copy of the array
            if (index !== -1) {
              array.splice(index, 1);
       setOptionAdd(array)
            }
          }

    return (
        <div className="p-4">
            <div className=" pb-4">
                <div className="flex justify-between items-center md-sm:flex-col md-sm:items-start">
                    <p className="text-[#000] font-bold text-base text-justify w-[80%] lg-md:w-[70%] md-sm:w-[100%]">
                        * You Can See The List Of All Questions In The Table Below
                    </p > 

                    <div className="flex items-center">

                    <div className="flex items-center">


                        <label className="font-bold text-black text-sm w-max mr-3">
                            Select Category
                        </label>
                        <select
                                                    id="statusSelect"
                                                    name="statusSelect"
                                                    defaultValue={categoryList[0]?.questionCategoryId}
                                                  onChange={(e)=>setCategory(e.target.value)}
                                                    className="w-max bg-green h-[45px]  rounded-lg shadow-greenShadow font-bold text-white py-3 px-2">
                                                        <option value="">Choose Category</option>
                                                {

                                                    categoryList?.map((item2)=>{
                                                        return(

                                                            <option value={item2?.questionCategoryId}>{item2?.name}</option>
                                                        )
                                                    })
                                                }

                                                </select>
                    </div>

                    <button
                        onClick={() => {setAddQuestionModal(true)}}
                        className="bg-green rounded-lg shadow-greenShadow w-max text-white ml-4 font-bold h-[45px] px-7 mt-0 md-sm:mt-6 hover:bg-menuActive hover:text-green flex items-center">

                        + Add Question

                    </button>
                    {
                        AddQuestionModal
                            ? <> <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div
                                    className="relative w-[40%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

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
                                            <textarea
                                                class="appearance-none block w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="title"
                                                type="text"
                                                onChange={(e)=>setTitle(e.target.value)}
                                                placeholder="Type Your Question Title Here..." />

                                        </div>
                                        <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3">
                                            <div class="flex flex-col flex-wrap">
                                                <p
                                                    className="my-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                                    Select Your Question Type First
                                                </p>
                                                <select
                                                    id="statusSelect"
                                                    name="statusSelect"
                                                    onChange={(e) => setQueType(e.target.value)}
                                                    className="w-full bg-white rounded border border-borderGray   text-[#000] py-3 px-4">
                                                    <option value="Text">Text</option>
                                                    {/* <option value="blank">Fill In The Blank</option>*/}
                                                    <option value="Optional">Optional</option> 
                                                    <option value="MultiChoice">Multiple Choice</option>
                                                </select>

                                            </div>
                                            {/* <div className="flex items-center  ml-3 mb-4 xs:mt-3 ">
                                                <input
                                                    className=" mr-2  text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                                                    type="checkbox"
                                                    value=""
                                                    id="checkBoxOne" />
                                                <div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-[#000] text-sm">
                                                            Is For Contract ?
                                                        </span>

                                                    </div>

                                                </div>
                                            </div> */}
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
                                                <div className="w-full flex items-center justify-between mt-3 mb-3">
                                                  <div className="flex items-center w-[85%]">
                                                    <button >
                                                        <Trash/>

                                                    </button>
                                                    <input
                                                        class="appearance-none block w-full ml-2 bg-white text-[#000] border border-borderGray rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                                                        id="title"
                                                        // onChange={(e)=>setOptionAdd({title:e.target.value,value:optionAdd[0].value})}
                                                        // onChange={(e)=>setOptionAdd({title:e.target.value,value:optionAdd[0].value})}
                                                        onChange={(e)=>updateState(0,e.target.value,null)}
                                                        type="text"
                                                        placeholder="Type Your Option Here...." />
                                                  </div>
                                                    <input
                                                        className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                                                        type="checkbox"
                                                        onChange={(e)=>updateState(0,null,e.target.checked)}
                                                        id="checkBoxDelete" />
                                                </div>
                                              {
                                                optionAdd?.map((item,index)=>{
                                                    return(
                                                        index>0?
                                                       
                                                    <div className="w-full flex items-center justify-between mt-3 mb-3">
                                                    <div className="flex items-center w-[85%]">
                                                      <button onClick={()=>removeOption(index)}>
                                                          <Trash/>
  
                                                      </button>
                                                      <input
                                                            class="appearance-none block w-full ml-2 bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            id="title"
                                                            type="text"
                                                            onChange={(e)=>updateState(index,e.target.value,null)}
                                                            placeholder="Type Your Option Here...." />
                                                       
                                                    </div>
                                                    <input
                                                            className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor mr-2"
                                                            type="checkbox"
                                                            value=""
                                                            onChange={(e)=>updateState(0,null,e.target.checked)}
                                                            id="checkBoxDelete"
                                                             />
                                                  </div>
                                                    :
                                                    null
                                                    )
                                                })
                                              }
                                                 
                                                   
                                            </div>
                                            <button
                                                className="text-green font-bold text-sm"
                                                onClick={() =>setOptionAdd([...optionAdd,{
                                                    value:"",
                                                    isAnswer:false
                                                }])}>
                                                + Add Option
                                            </button>
                                        </div>
                                        <div
                                            className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                            <button
                                                className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => {addQuestions();setAddQuestionModal(false)}}>
                                                Continue
                                            </button>
                                            <button
                                                className="text-[#000] bg-whiteshadow-blueShadow border hover:border-[#000] hover:bg-hoverBackground border-borderGray ml-3 rounded-lg  float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAddQuestionModal(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> <div className="opacity-25 fixed inset-0 z-40 bg-black" > </div> </>
                            : null}
                                  {
                        categoryModal
                            ? <> <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div
                                    className="relative w-[15%] lg-md:w-[50%] md:w-[70%] sm:w-[90%] sm-xs:w-[100%] xs:w-[100%] my-5 mx-auto max-w-5xl">

                                    <div
                                        className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">

                                        <div className="flex items-centers justify-between  rounded-t">

                                            <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                                Select Category
                                            </span>
                                            <button onClick={()=>setCategoryModal(false)}>
                                                <Cross className="h-[15px] w-[15px]"/>
                                            </button>
                                        </div>
                                    
                                        <div className="flex xs:flex-col xs:items-start justify-between items-end mb-3 mt-6">
                                            <div class="flex flex-col flex-wrap">
                                                <p
                                                    className="my-2 text-black text-sm leading-relaxed break-words whitespace-normal font-bold">
                                                    Select Your Category First
                                                </p>
                                                <select
                                                    id="statusSelect"
                                                    name="statusSelect"
                                                    defaultValue={categoryList[0]?.questionCategoryId}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full bg-white rounded border border-borderGray   text-[#000] py-3 px-4">
                                                        <option value="">Choose Category</option>
                                                {

                                                    categoryList?.map((item2)=>{
                                                        return(

                                                            <option value={item2?.questionCategoryId}>{item2?.name}</option>
                                                        )
                                                    })
                                                }

                                                </select>

                                            </div>
                                 
                                        </div>
                                
                                        <div
                                            className="flex items-center justify-end  border-solid border-slate-200 rounded-b mt-5">
                                            <button
                                                className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg  float-left background-transparent font-bold  px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => {category?setCategoryModal(false):alert("choose category")}}>
                                                submit
                                            </button>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="opacity-25 fixed inset-0 z-40 bg-black" > </div>
                             </>
                            : null}
                    </div>
                </div> </div> 
                <div className="" > 
                <div className="  w-full rounded-2xl  shadow-tableShadow mt-5 overflow-x-auto">

                    <table class="table-auto w-full">
                        <thead
                            className="bg-hoverBackgrousnd h-14  w-full whitespace-nowrap overflow-x-scroll"
                            style={{
                                borderRadius: '20px'
                            }}>
                            <tr
                                className="text-black  p-6 whitespace-nowrap overflow-x-scroll"
                                style={{
                                    borderRadius: '20px'
                                }}>

                     
                                <th className="text-black  text-left   md:px-3 px-4">Question / Answers</th>
                                <th className="text-black  text-left   md:px-3 px-4">Question Type</th>
                                <th className="text-black  text-left   md:px-3 px-4">Archive</th>
                                <th className="text-black  text-center  md:px-3 px-4">Edit</th>
                                <th className="text-black  text-center  md:px-3 px-4">Delete</th>
                                <th className="text-black  text-center  md:px-3 px-4">View Options</th>
                            </tr >
                        </thead>
                        < tbody >
                            {tableBody}
                        </tbody>

                    </table >
                    <div
                        className=" w-full flex items-center xs:flex-col xs:items-start justify-end 719:justify-start py-8 px-8 xs:px-6">
                        <div className="flex">
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
                        </div >
                        <p className="text-sm font-medium text-[#000] ml-4 mt-0 xs:ml-0 xs:mt-2">
                            11-15 of 20
                        </p>
                        <div className="flex items-center ml-4"></div>
                    </div>
                </div> </div>
        </div>)
}

export default TextQuestionsTab;