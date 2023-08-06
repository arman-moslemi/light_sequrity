import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import UserDetailPage from "../../components/userDetailPage";
const ViewUserDetail = () =>{

    return(
 
            <div className="flex">
                <LeftMenu />
                <div className="w-full px-4">
                    <Header className="w-[90%] mx-auto"/>
                    <div className="mt-8 mx-4 flex items-center justify-between">
                <div>
                <p className="font-bold text-lg text-[#000]">
                       Employee Detail
                    </p>
    
                    <div className="flex items-center ">
                        <p className="font-medium text-sm text-[#000]">
                            Dashboard
                        </p>
                        <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                            .
                        </p>
                        <p className="font-medium text-sm text-[#000]">
                            Users
                        </p>
                        <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                            .
                        </p>
                        <p className="font-medium text-sm text-[#000]">
                            Employee Detail
                        </p>
                    </div>
                </div>
             
     
                </div>
               <UserDetailPage/>
                 
                </div>
    
            </div>
    
    )
}
export default ViewUserDetail;