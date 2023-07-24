import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ObjectContentTab from './ObjectContentTab';
import ObjectInstructionTab from './ObjectInstructionTab';
import ObjectCapabilityTab from './ObjectCapabiltyTab';
import ObjectEquipmentTab from './ObjectEquipmentTab';
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
                    <span >Required Capability</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Equipment</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Shifts</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span >Planning</span>

                </Tab>
            </TabList>

            <TabPanel>
                <ObjectContentTab/>
            </TabPanel>
            <TabPanel>
                <ObjectInstructionTab/>
            </TabPanel>
            <TabPanel>
                <ObjectCapabilityTab/>
            </TabPanel>
            <TabPanel>
                <ObjectEquipmentTab/>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs>
    )

}

export default EachObjectTabs;