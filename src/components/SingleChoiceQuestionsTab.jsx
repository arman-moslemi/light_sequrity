import React,{useState} from "react";
import Bullet from "../assets/icon/verticalBullet";
import Trash from "../assets/icon/trash";
import Eye from "../assets/icon/eye";
import Pencil from "../assets/icon/pencil";
import { Link } from "react-router-dom";
const SingleChoiceQuestionsTab = ({data}) => {
    const [showAction,
        setShowAction] = useState(false);
    const tableRow = [
        {
            id: '1',
            number: '1',
            question:"Where is the best place to be safe from an earthquake?",
            answer: "Under the table and between the door frame",
            contract:'Yes',
            action:<div className="relative">
            < button onClick={() => setShowAction(!showAction)}>
                <Bullet />
            </button>
            {showAction
                ? <div className="z-50  absolute  right-[55px] top-[2px]">
                    <div className="triangleRight"></div>
                    <div
                        className="z-50 w-[135px] h-auto  bg-white shadow-whiteShodow  rounded-lg mBg">
                   
                        <Link to={''}

                            className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                            <Pencil className="text-[#000] mr-3" />
                            <span className="font-medium text-[#000]">
                                Edit
                            </span>
                        </Link>
                        <button
                         
                            className="flex items-center px-4 w-full  py-3 hover:bg-hoverBackground">

                            <Trash className="text-[#b71d18] mr-3" />
                            <span className="font-medium text-[#b71d18]">
                                Delete
                            </span>
                        </button>

                    </div>
                </div>
                : <></>}
                </div>

        },      {
            id: '1',
            number: '1',
            question:"Where is the best place to be safe from an earthquake?",
            answer: "Under the table and between the door frame",
            contract:'Yes',
            action:<div className="relative">
            < button>
                <Bullet />
            </button>
       
                </div>

        },
    ]
    const tableBody = tableRow.map((tableRow) =><tr key = {
        tableRow.objectId
    }
    className = "border-b border-b-borderGray" > <td className = "py-4 text-sm text-left pl-10" > {
        tableRow.number
    } </td>
        <td className="py-4 text-sm text-left px-4">

            {tableRow.question}

        </td > 
        < td className = "py-4 text-sm text-left px-4" > {
        tableRow.answer
    } </td>
      
        < td className = "py-4 text-sm text-left px-4" >
            {
                tableRow.contract
            }
             </td>
         <td className="py-4 text-sm text-center px-4">
        {tableRow.action}
    </td> </tr>)
    return(
        <div className="p-4">
          <div className=" pb-4">
                       <div className="flex justify-between items-center">
                       <span className="text-[#000] font-bold text-base w-[70%]">
        * You Can See The List Of All Questions In The Table Below
    </span> 
    <button  className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center" >
          
                      
          + Add Single Choise Question
         
  </button>
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
                <th className="text-black  text-left   md:px-4 px-4">Question</th> 
                <th className = "text-black  text-left   md:px-4 px-4" > Answer </th>
                <th className="text-black  text-left  md:px-4 px-4">Is For Contract ?</th >
                <th className="text-black  text-left  md:px-4 px-4">Action</th> 
            </tr > </thead> < tbody > {
        tableBody
    } </tbody>

    </table > <div className=" w-full flex justify-end py-8 px-8">
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
    </div> </div>

</div > </div>)
}

export default SingleChoiceQuestionsTab;