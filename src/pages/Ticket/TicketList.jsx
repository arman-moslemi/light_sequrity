import { Link } from "react-router-dom";
import React,{useState} from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import TicketListTable from "../../components/TicketListTable";
const TicketList = () =>{
   
    return(
        <div className="flex">
            <LeftMenu />
            <div className="w-full px-4">
                <Header className="w-[90%] mx-auto"/>
                <div className="mt-8 mx-4 flex xs:flex-col xs:items-start items-center justify-between">
            <div>
            <p className="font-bold text-lg text-[#000]">
                   Ticket List
                </p>

                <div className="flex items-center ">
                    <p className="font-medium text-sm text-[#000]">
                        Dashboard
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                   
                    <p className="font-medium text-sm text-[#000]">
                        Ticket List
                    </p>
                </div>
            </div>
          
            <Link to={'/ViewTicket'} className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green flex items-center mt-0 xs:mt-6 xs:w-[100%] xs:justify-evenly" >
          
                      
            + Add Ticket
         
            </Link>
            </div>
              <TicketListTable/>
             
            </div>

        </div>
    )
}

export default TicketList;


