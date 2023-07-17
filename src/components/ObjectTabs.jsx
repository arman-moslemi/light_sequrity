import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import AllObjectTable from "./AllObjectTable";
import InProcessObjectTable from "./InProcessObjectTable";
import ClosedObjectTable from "./ClosedObjectTable";
import 'react-tabs/style/react-tabs.css';

const ObjectTabs = () => {
 
    return (
        <div className="rounded-2xl  shadow-tableShadow mt-5 mx-4">
            <Tabs>
                <TabList className="w-full flex border-b-2 border-b-borderGray px-4 pt-2 ">
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium ">
                        <span >All</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#000] flex justify-center items-center ml-2 text-white text-xs">
                            10
                        </div>
                    </Tab>
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                        <span >In process</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#dbf6e5] flex justify-center items-center ml-2 text-green text-xs">
                            6
                        </div>
                    </Tab>
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                        <span >Closed</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#ffe4dd] flex justify-center items-center ml-2 text-[#b71d18] text-xs">
                            4
                        </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <AllObjectTable/>
                </TabPanel>
                <TabPanel>
                    <InProcessObjectTable/>
                </TabPanel>
                <TabPanel>
                    <ClosedObjectTable/>
                </TabPanel>
            </Tabs>
        
        </div>
    )
}

export default ObjectTabs;