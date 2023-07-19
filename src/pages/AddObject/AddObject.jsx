import React from "react";
import AddObj from "../../components/AddObj";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import AddObjectTitleSection from "../../components/AddObjectTitleSection";
const AddObject = () =>{

    return(
        <div className="flex">
        <LeftMenu/>
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <AddObjectTitleSection className="mb-6"/>
            <AddObj className="mt-6  ml-4"/>
            
        </div>

    </div>
    )
}

export default AddObject;