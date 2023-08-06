import React, { useMemo , useState} from "react";
import {Calendar, momentLocalizer,Navigate,dayjsLocalizer} from "react-big-calendar";
import moment from "moment";
import {Modal} from 'react-responsive-modal';
import './components.css';

import "react-big-calendar/lib/css/react-big-calendar.css";
import Img1 from "../assets/img/avatar.jpg"
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import dayjs from 'dayjs'
var minMax = require('dayjs/plugin/minMax')
dayjs.extend(minMax)
// dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2018-01-05'))
// dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-05')])

const localizer = momentLocalizer(moment);
// const localizer = dayjsLocalizer(dayjs);
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
const ObjectPlanningTab =({data})=> {
    const [events,
        setEvents] = useState([   {
        //     start: moment().toDate(),
        //     end: moment()
        //         .add(0, "days")
        //         .toDate(),
        //     employeeName: "Ali Modanlou",
        //     shift:"s1"
        // },
        // {
        //     start: moment().toDate(),
        //     end: moment()
        //         .add(0, "days")
        //         .toDate(),
        //     employeeName: "Sohrab Pakzad",
        //     shift:"s2"
        // },
        // {
        //     start: moment().toDate(),
        //     end: moment()
        //         .add(0, "days")
        //         .toDate(),
        //     employeeName: "Sohrab Pakzad",
        //     shift:"s2"
        }
    ]);

    const [openModal,
        setOpenModal] = useState(false);
  

   const onClickButton = e => {
       console.log(e)
       
    setOpenModal(true)
    }
   const onCloseModal = () => {
    setOpenModal(false)
    }
   const  customSlotPropGetter = (prop) => {
 console.log(prop)
          prop.disabled=true;
    
      }
      function MyWeek({
        date,
        localizer,
        max = localizer.endOf(new Date(), 'day'),
        min = localizer.startOf(new Date(), 'day'),
        scrollToTime = localizer.startOf(new Date(), 'day'),
        ...props
      }) {
        const currRange = useMemo(
          () => MyWeek.range(date, { localizer }),
          [date, localizer]
        )
      
        return (
          <TimeGrid
            date={date}
            eventOffset={15}
            localizer={localizer}
            max={max}
            min={min}
            
            // style={{height:"40vh"}}
            range={currRange}
            // scrollToTime={scrollToTime}
            {...props}
          />
          // <div>test</div>
        )
      }
      
      // MyWeek.propTypes = {
      //   date: PropTypes.instanceOf(Date).isRequired,
      //   localizer: PropTypes.object,
      //   max: PropTypes.instanceOf(Date),
      //   min: PropTypes.instanceOf(Date),
      //   scrollToTime: PropTypes.instanceOf(Date),
      // }
      
      MyWeek.range = (date, { localizer }) => {
        const start = new Date;
        const end =new Date(2023, 6,31);
      
        let current = start
        const range = []
      
        while (localizer.lte(current, end, 'day')) {
          range.push(current)
          current = localizer.add(current, 1, 'day')
        }
      
        return range
      }
      
      MyWeek.navigate = (date, action, { localizer }) => {
        switch (action) {
          case Navigate.PREVIOUS:
            return localizer.add(date, -7, 'day')
      
          case Navigate.NEXT:
            return localizer.add(date, 7, 'day')
      
          default:
            return date
        }
      }
      
      MyWeek.title = (date) => {
        return `My awesome week: ${date.toLocaleDateString()}`
      }
      const ColoredDateCellWrapper = ({ children }) =>
      React.cloneElement(React.Children.only(children), {
        style: {
          // backgroundColor: 'lightblue',
        },
      })
      const { components, defaultDate,views,max,min } = useMemo(
        () => ({
          components: {
            // agenda: {
            //   event: EventAgenda,
            // },
            // timeSlotWrapper: ColoredDateCellWrapper,

            event: Event,
            // month:{
            //   dateHeader: (props) => (
            //     <div>Custom Date Header</div>
            //   )
            //   ,
          
            // }
          },
          views: {
            month:true,
            // week: MyWeek,
          },
          max: dayjs().endOf('day').subtract(1, 'hours').toDate(),
          min: new Date(2015, 3, 7),
          defaultDate: data?.startDate,

          // defaultDate: new Date(2015, 3, 7),
        }),
        []
      )


      const customDayPropGetter = (date) => {
        // if (date.getDate() === 7 || date.getDate() === 15)
        var startDate = data?.startDate
        // var endDate   = new Date(2023, 7, 31)
        var endDate   =  data?.endDate
        var range = moment(date).isBetween(startDate, endDate);
        if (!range)
        
          return {
            style: {
              // border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
              backgroundColor:"#d9d9d9",
              // display: "block"
              // display:'none'
            },
          }
        else return {
          
        }
      }
  
        return (
            <div className="App">
                <Calendar
                          components={components}
                          // slotPropGetter={customSlotPropGetter}
                    selectable={true}
                    localizer={localizer}
                    defaultDate={defaultDate}
                    defaultView="month"
                    events={events}                    
                    dayPropGetter={customDayPropGetter}
                    views={views}
                    // min={new Date(2015, 3, 7)}
                    max={max}
                    // startAccessor={"2023/07/25"}
                    // endAccessor={new Date()}
                    style={{
                    height: "120vh"
                }}
                
                    onSelectSlot={(e)=>onClickButton(e)}/>
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