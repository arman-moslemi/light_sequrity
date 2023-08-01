import React, {useState,useEffect} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ObjectContentTab from './ObjectContentTab';
import ObjectInstructionTab from './ObjectInstructionTab';
import ObjectCapabilityTab from './ObjectCapabiltyTab';
import ObjectEquipmentTab from './ObjectEquipmentTab';
import ObjectShiftTab from './ObjectShiftTab';
// import CalendarObj from './CalendarObj';
import Cookies from 'universal-cookie';

import ObjectPlanningTab from './ObjectPlanningTab';
import {useParams } from "react-router-dom";
import { apiUrl } from "../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
const EachObjectTabs = () => {

    const [data, setData] = useState();
   
    const params = useParams().id;
    console.log(params)
  
    
    const [reCheck, setRecheck] = useState(false);
    let navigate = useNavigate();
  
    useEffect(() => {
    
      auth();
    }, [reCheck]);
    const auth=async()=>{
      const cookies = new Cookies();
      var token= cookies.get('token');
      console.log(token)
      if(!token){
       navigate("/login");
      }else{
  
     GetData()
  
      }
    };
    const GetData=async()=>{
     console.log(1234)
    const dataUser = await axiosReq("Objects/"+params);
    console.log(dataUser)
 
  setData(dataUser)
    }
    return (
        <Tabs>
            <TabList className="w-full flex  px-4 pt-2 pb-2 overflow-x-auto">
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium ">
                    <span className="w-max">Object Content</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Instructions</span>

                </Tab>

                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Required Capability</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Equipment</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Shifts</span>

                </Tab>
                <Tab
                    className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                    <span className="w-max">Planning</span>

                </Tab>
            </TabList>

            <TabPanel>
                <ObjectContentTab data={data}/>
            </TabPanel>
            <TabPanel>
                <ObjectInstructionTab data={data}/>
            </TabPanel>
            <TabPanel>
                <ObjectCapabilityTab data={data}/>
            </TabPanel>
            <TabPanel>
                <ObjectEquipmentTab data={data}/>
            </TabPanel>
            <TabPanel>
                <ObjectShiftTab data={data}/>
            </TabPanel>
            <TabPanel>
                <ObjectPlanningTab data={data}/>
            </TabPanel>
        </Tabs>
    )

}

export default EachObjectTabs;