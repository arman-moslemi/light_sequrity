import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
const Dashboard = () => {

    return (
        <div className="flex">
            <LeftMenu/>
            <div className="w-full">
                <Header className="w-[90%] mx-auto"/>
                <p>hello</p>  
            </div>

        </div>
    )
}
export default Dashboard;