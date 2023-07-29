import React, { useMemo , useState} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import {Modal} from 'react-responsive-modal';
import './components.css';

import "react-big-calendar/lib/css/react-big-calendar.css";
import Img1 from "../assets/img/avatar.jpg"
const localizer = momentLocalizer(moment);
function EventAgenda({ event }) {
    return (
      <span>
        <span >{event.employeeName}</span>
        <span>{event.shift}</span>
      </span>
    )
  }
  function Event({ event }) {
    return (
     <div className="bg-mainColor flex items-center py-[5px] px-4 rounded-full justify-between my-[0px]">
   <span className="text-sm font-semibold">{event.employeeName}</span>
       
   <span className="text-sm font-semibold">{event.shift}</span>
     
     </div>
    )
  }
const ObjectPlanningTab =()=> {
    const [events,
        setEvents] = useState([   {
            start: moment().toDate(),
            end: moment()
                .add(0, "days")
                .toDate(),
            employeeName: "Ali Modanlou",
            shift:"s1"
        },
        {
            start: moment().toDate(),
            end: moment()
                .add(0, "days")
                .toDate(),
            employeeName: "Sohrab Pakzad",
            shift:"s2"
        },
        {
            start: moment().toDate(),
            end: moment()
                .add(0, "days")
                .toDate(),
            employeeName: "Sohrab Pakzad",
            shift:"s2"
        }
    ]);

    const [openModal,
        setOpenModal] = useState(false);
  

   const onClickButton = e => {
       
    setOpenModal(true)
    }
   const onCloseModal = () => {
    setOpenModal(false)
    }
   const  customSlotPropGetter = () => {
 
          return { }
    
      }

      const { components, defaultDate } = useMemo(
        () => ({
          components: {
            agenda: {
              event: EventAgenda,
            },
            event: Event,
          },
          defaultDate: new Date(2015, 3, 7),
        }),
        []
      )
        return (
            <div className="App">
                <Calendar
                          components={components}
                          slotPropGetter={customSlotPropGetter}
                    selectable={true}
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    dayPropGetter={customSlotPropGetter}
                    style={{
                    height: "100vh"
                }}
                    onSelectSlot={onClickButton}/>
                <Modal open={openModal} onClose={onCloseModal} className="bg-mainColor">
                     

                    <div className="relative w-[100%]  mx-auto max-w-5xl">

                        <div
                            className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full outline-none focus:outline-none">

                            <div className="flex items-centers justify-left px-3">

                                <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
                                Planning For This Date
                                </span>

                            </div>

                          
                                <div class="w-full  px-3 my-3 flex flex-col">
                                    <label
                                        class="font-bold text-[#000] mb-3"
                                        for="title">
                                       Select Employee
                                    </label>
                                
                     <div className="flex flex-wrap h-40 overflow-y-auto">

                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                        <div className="w-[50%] border-b border-b-borderGray">
                            <div className="flex items-center my-2">
                     
              <input
                required="true"
                className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
                type="checkbox"
                value=""
                id="vendingMachine"
                

              />
              <img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
              <span >Ali Modanlou</span>

           
                            </div>
                        </div>
                     </div>
                                  
                                </div>
                                <div class="w-full  px-3 my-3 flex flex-col">
                                    <label
                                        class="font-bold text-[#000] mb-3"
                                        for="title">
                                       Shift Selection For The Selected Employee
                                    </label>
                                
                        <select
                        required="true"
                            id="statusSelect"
                            name="statusSelect"
                            className="w-full bg-white rounded-sm border border-borderGray py-3 px-4">
                                <option value="none" selected disabled hidden>Select The Shift</option>
                            <option value="s1">S1 - daily - 8:00 - 12:00</option>
                            <option value="s2">S2 - daily - 8:00 - 12:00</option>
                            <option value="s3">S3 - daily - 8:00 - 12:00</option>
                            <option value="s4">S4 - daily - 8:00 - 12:00</option>
                        </select>
                                  
                                </div>
                         
                                <button
                           onClick={onCloseModal}
                            className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-green  text-white mt-5 hover:bg-[#008a5c] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                            Add To Calendar
                        </button>
                            <div
                                className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                            
                            </div>
                        </div>
                    </div>
             
             
                </Modal>
            </div>
        );
    
}

export default ObjectPlanningTab;