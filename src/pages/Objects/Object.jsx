import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import ObjectTitleSection from "../../components/ObjectTitleSection";
const Object = () =>{

    return (
        <div className="flex">
        <LeftMenu/>
        <div className="w-full px-4">
        <Header className="w-[90%] mx-auto"/>
        <ObjectTitleSection/>
        </div>

      </div>
    )
}

export default Object;