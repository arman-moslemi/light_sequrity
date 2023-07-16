import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import ObjectTitleSection from "../../components/ObjectTitleSection";
import ObjectTabs from "../../components/ObjectTabs";
const Object = () => {

    return (
        <div className="flex">
            <LeftMenu/>
            <div className="w-full px-4">
                <Header className="w-[90%] mx-auto"/>
                <ObjectTitleSection className="mt-4  ml-4"/>
                <ObjectTabs/>
            </div>

        </div>
    )
}

export default Object;