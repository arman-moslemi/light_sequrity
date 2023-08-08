import React from "react";
import { Link } from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import MissionTable from "../../components/MissionTable";
const ViewMission = () =>{

    return(
   
              <div className="flex">
              <LeftMenu />
              <div className="w-full px-4">
                  <Header className="w-[90%] mx-auto"/>
                  <div className="mt-8 mx-4 flex xs:flex-col xs:items-start items-center justify-between">
                  <Link to={'/object'}>
                <div className="flex">
                    <ChevronLeftIcon className="w-[20px] mr-4"/>
                    <p className="font-bold text-sm text-[#000]">
                        Back

                    </p>

                </div>
            </Link>
            
   
              </div>
            
               <MissionTable/>
              </div>
  
          </div>
    )
}

export default ViewMission