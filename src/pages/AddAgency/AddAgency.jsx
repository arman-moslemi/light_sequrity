import React from "react";

import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import AddAgencyPage from "../../components/AddAgencyPage";
import AddAgencyTitleSection from "../../components/AddAgencyTitleSection";
const AddAgency = () =>{

    return(
        <div className="flex">
        <LeftMenu/>
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <AddAgencyTitleSection className="mb-6"/>
            <AddAgencyPage className="mt-6  ml-4"/>
            
        </div>

    </div>
    )
}

export default AddAgency;