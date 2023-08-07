import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import UserDetailPage from "../../components/userDetailPage";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ViewUserDetail = () =>{

    return(
 
            <div className="flex">
                <LeftMenu />
                <div className="w-full px-4">
                    <Header className="w-[90%] mx-auto"/>
                    <div className="mt-8 mx-4 flex items-center justify-between">
                    <Link to={'/userList'}>
                <div className="flex">
                    <ChevronLeftIcon className="w-[20px] mr-4"/>
                    <p className="font-bold text-sm text-[#000]">
                        Back

                    </p>

                </div>
            </Link>
             
     
                </div>
               <UserDetailPage/>
                 
                </div>
    
            </div>
    
    )
}
export default ViewUserDetail;