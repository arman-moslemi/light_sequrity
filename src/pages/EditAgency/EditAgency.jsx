import React from "react";

import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import EditAgencyPage from "../../components/EditAgancyPage";
import EditAgencyTitleSection from "../../components/EditAgencyTitleSection";
const EditAgency = () =>{

    return(
        <div className="flex">
        <LeftMenu/>
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <EditAgencyTitleSection className="mb-6"/>
            <EditAgencyPage className="mt-6  ml-4"/>
            
        </div>

    </div>
    )
}

export default EditAgency;