import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ObjectContentTab from './ObjectContentTab';
import ObjectInstructionTab from './ObjectInstructionTab';
import ObjectCapabilityTab from './ObjectCapabiltyTab';
import ObjectEquipmentTab from './ObjectEquipmentTab';
import ObjectShiftTab from './ObjectShiftTab';
// import CalendarObj from './CalendarObj';
import ObjectPlanningTab from './ObjectPlanningTab';
import TextQuestionsTab from './TextQuestionsTab';
import FillInTheBlankQuestions from './FillInTheBlankQuestions';
import SingleChoiceQuestionsTab from './SingleChoiceQuestionsTab';
const QuestionsTab = () => {

    return (
        <Tabs>
            <TabList className="w-full flex  px-4 pt-2 pb-2 overflow-x-auto">
      
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Text</span>

                </Tab>

                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Fill In The Blanks</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Multiple Choice </span>

                </Tab>
          
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Single Choice</span>

                </Tab>
            </TabList>

            <TabPanel>
                <TextQuestionsTab/>
            </TabPanel>
       
            <TabPanel>
                <FillInTheBlankQuestions/>
            </TabPanel>
            <TabPanel>
                <SingleChoiceQuestionsTab/>
            </TabPanel>
            <TabPanel>
                <ObjectShiftTab/>
            </TabPanel>
            <TabPanel>
                <ObjectPlanningTab/>
            </TabPanel>
        </Tabs>
    )

}

export default QuestionsTab;