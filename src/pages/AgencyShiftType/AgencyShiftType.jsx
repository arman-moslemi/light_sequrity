import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import AgencyShiftTypePage from "../../components/AgencyShiftTypePage";
const AgencyShiftType = () =>{

    return(
        <div className="flex">
        <LeftMenu />
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <div className="mt-8 mx-4 flex items-center justify-between">
        <div>
        <p className="font-bold text-lg text-[#000]">
               Agency Shift type
            </p>

            <div className="flex items-center ">
                <p className="font-medium text-sm text-[#000]">
                    Dashboard
                </p>
                <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                    .
                </p>
                <p className="font-medium text-sm text-[#000]">
                    Agency
                </p>
                <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                    .
                </p>
                <p className="font-medium text-sm text-[#000]">
                    Agency Shift Type
                </p>
            </div>
        </div>
     

        </div>
           <AgencyShiftTypePage/>
         
        </div>

    </div>
    )
}

export default AgencyShiftType;