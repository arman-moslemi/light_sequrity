import React,{useState,useEffect} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import AllObjectTable from "./AllObjectTable";
import InProcessObjectTable from "./InProcessObjectTable";
import CompletedObjectTable from "./ClosedObjectTable";
import 'react-tabs/style/react-tabs.css';
import Cookies from 'universal-cookie';
import {apiUrl} from "../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {axiosReq} from "../commons/axiosReq";
const ObjectTabs = () => {
    const [data, setData] = useState();
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
   const cookies = new Cookies();
     var id= cookies.get('ID');
     const dataUser = await axiosReq("Objects/"+id+"/objects/Active");
    console.log(dataUser)
   setData(dataUser)
    }
    return (
        <div className="rounded-2xl  shadow-tableShadow mt-5 mx-4">
            <Tabs>
                <TabList className="w-full flex border-b-2 border-b-borderGray px-4 pt-2 ">
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium ">
                        <span >All</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#000] flex justify-center items-center ml-2 text-white text-xs">
                            {data?.length}
                        </div>
                    </Tab>
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                        <span >In process</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#dbf6e5] flex justify-center items-center ml-2 text-green text-xs">
                            {data?.filter(x=>x.isCompleted!=true)?.length}
                        </div>
                    </Tab>
                    <Tab
                        className="py-4 px-1 mx-4 focus-visible:border-0 focus-visible:outline-none flex items-center text-[#637381] font-medium">
                        <span >Completed</span>
                        <div
                            className="w-[25px] h-[25px] rounded-md bg-[#ffe4dd] flex justify-center items-center ml-2 text-[#b71d18] text-xs">
                            {data?.filter(x=>x.isCompleted==true)?.length}
                        </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <AllObjectTable data={data} reCheck={reCheck} setRecheck={setRecheck}/>
                </TabPanel>
                <TabPanel>
                    <InProcessObjectTable data={data?.filter(x=>x.isCompleted!=true)}reCheck={reCheck} setRecheck={setRecheck}/>
                </TabPanel>
                <TabPanel>
                    <CompletedObjectTable data={data?.filter(x=>x.isCompleted==true)}reCheck={reCheck} setRecheck={setRecheck}/>
                </TabPanel>
            </Tabs>
        
        </div>
    )
}

export default ObjectTabs;