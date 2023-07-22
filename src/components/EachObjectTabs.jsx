import React, {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ObjectContentTab from './ObjectContentTab';
const EachObjectTabs = () => {

    return (
        <Tabs>
            <TabList className="w-full flex  px-4 pt-2 ">
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium ">
                    <span >Object Content</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Instructions</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Missions</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Shift</span>

                </Tab>
            </TabList>

            <TabPanel>
                <ObjectContentTab/>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs>
    )

}

export default EachObjectTabs;