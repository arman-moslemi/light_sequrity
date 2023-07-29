import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import EachObjectTitleSection from "../../components/EachObjectTitleSectio";

import EachObjectTabs from "../../components/EachObjectTabs";
const EachObject = () => {

    return (
        <div className="flex">
            <LeftMenu />
            <div className="w-full px-4">
                <Header className="w-[90%] mx-auto"/>
                <EachObjectTitleSection className="mb-6"/>

                <EachObjectTabs/>
            </div>

        </div>
    )
}

export default EachObject;