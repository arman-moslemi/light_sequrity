import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import EachObjectTitleSection from "../../components/EachObjectTitleSectio";
import EachObjectDetail from "../../components/EachObjectDetail";
const EachObject = () => {

    return (
        <div className="flex">
               <LeftMenu/>
        <div className="w-full px-4">
            <Header className="w-[90%] mx-auto"/>
            <EachObjectTitleSection className="mb-6"/>
            <EachObjectDetail/>
            
        </div>

        </div>
    )
}

export default EachObject;