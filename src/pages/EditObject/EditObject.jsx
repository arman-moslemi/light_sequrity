import React from "react";
import EditObj from "../../components/EditObj";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import EditObjectTitleSection from "../../components/EditObjectTitleSection";
const EditObject = () =>{

    return(
        <div className="flex">
        <LeftMenu/>
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <EditObjectTitleSection className="mb-6"/>
            <EditObj className="mt-6  ml-4"/>
            
        </div>

    </div>
    )
}

export default EditObject;