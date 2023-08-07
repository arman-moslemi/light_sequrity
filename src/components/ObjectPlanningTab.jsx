import React, { useMemo , useState,useEffect} from "react";
import {Calendar, momentLocalizer,Navigate,dayjsLocalizer} from "react-big-calendar";
import moment from "moment";
import {Modal} from 'react-responsive-modal';
import './components.css';
import { useParams } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Img1 from "../assets/img/avatar.jpg"
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import dayjs from 'dayjs';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../commons/axiosReq";
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
  const params = useParams().id;
  const [reCheck, setRecheck] = useState(false);
  const [mission, setMission] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [shift, setShift] = useState();
  const [misEmp, setMisEmp] = useState();
  const [date, setDate] = useState();

  // const [reCheck, setRecheck] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {

      auth();
  }, [reCheck]);
  const auth = async () => {
      const cookies = new Cookies();
      var token = cookies.get('token');
      console.log(token)
      if (!token) {
          navigate("/login");
      } else {

          GetData()

      }
  };
  const GetData = async () => {
      const miss = await axiosReq("Objects/"+params+"/missions");
      console.log(777)
      console.log(miss)

      setMission(miss)
      const emp = await axiosReq("Objects/"+params+"/securityemployees");
      console.log(88)

      console.log(emp)
      console.log(data)

      setEmployee(emp)
      

  }
  const addMission = async () => {
    var ss= date?.split('T')[0];
      const miss = await axiosReq("Objects/"+params+"/missions",{
        missionWorkDayPlans:[
     {   employeeId: misEmp,
        objectShiftId: shift,
        date: "2023-07-05T22:16:39.613Z",
        dayOfWeek:(ss?.split('-')[2]%7).toString()
      }
        ]
      });
      if (miss?.status == 200 || miss?.status == 204 || miss?.status == 201) {
        // navigate("/tashakolRegister2",{
        //   OrganizationID:data?.organizationId
        // });
        // setShowSuccessModal(true)
        console.log(777)
        console.log(miss)
        alert("success")
        onCloseModal();
    }
    else {
        alert("Please fill inputs")
    }
    
    
      

  }
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
     

      const  formatDateTime=(sDate,FormatType)=> {
        var lDate = new Date(sDate)
    
        var month=new Array(12);
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
    
        var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
    
        var hh = lDate.getHours() < 10 ? '0' + 
            lDate.getHours() : lDate.getHours();
        var mi = lDate.getMinutes() < 10 ? '0' + 
            lDate.getMinutes() : lDate.getMinutes();
        var ss = lDate.getSeconds() < 10 ? '0' + 
            lDate.getSeconds() : lDate.getSeconds();
    
        var d = lDate.getDate();
        var dd = d < 10 ? '0' + d : d;
        var yyyy = lDate.getFullYear();
        var mon = eval(lDate.getMonth()+1);
        var mm = (mon<10?'0'+mon:mon);
        var monthName=month[lDate.getMonth()];
        var weekdayName=weekday[lDate.getDay()];
    
        if(FormatType==1) {
           return mm+'/'+dd+'/'+yyyy+' '+hh+':'+mi;
        } else if(FormatType==2) {
           return weekdayName+', '+monthName+' '+ 
                dd +', ' + yyyy;
        } else if(FormatType==3) {
           return mm+'/'+dd+'/'+yyyy; 
        } 
        // else if(FormatType==4) {
        //    var dd1 = lDate.getDate();    
        //    return dd1+'-'+Left(monthName,3)+'-'+yyyy;    
        // } 
        else if(FormatType==5) {
            return mm+'/'+dd+'/'+yyyy+' '+hh+':'+mi+':'+ss;
        } else if(FormatType == 6) {
            return mon + '/' + d + '/' + yyyy + ' ' + 
                hh + ':' + mi + ':' + ss;
        } else if(FormatType == 7) {
            return  yyyy + '-' + lDate.getMonth()+1 + 
                '-' + dd + 'T' + hh + ':' + mi + ':' + ss;
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
                
                    onSelectSlot={(e)=>{onClickButton(e);console.log( setDate(formatDateTime(e.slots[0],7)))}}/>
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
{
  employee[0]?.securityEmployees?.map((item)=>{
    return(
      <div className="w-[50%] border-b border-b-borderGray">
      <div className="flex items-center my-2">

<input
required="true"
className="text-green bg-white border-borderGray focus:ring-mainColor checked:bg-mainColor"
type="checkbox"
value={item?.employeeId}
id="vendingMachine"
onChange={(e)=>setMisEmp(e.target.value)}

/>
<img src={Img1} className="w-[40px] h-[40px] rounded-full ml-2 mr-2" alt="avatar"/>
<span >{item?.user?.firstName} {item?.user?.lastName}</span>


      </div>
  </div>
    )
  })
}
                    
                    
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
                            onChange={(e)=>setShift(e.target.value)}
                            className="w-full bg-white rounded-sm border border-borderGray py-3 px-4">
                                <option value="none" selected disabled hidden>Select The Shift</option>
                                {
                                data?.shifts?.map((item2)=>{
                                  return(
                                    <option value={item2?.objectShiftId}>   {item2?.title} - {item2?.shiftType?.title} -  {item2?.startTime} - {item2?.endTime}</option>

                                  )
                                })
                                }
                      
                        </select>
                                  
                                </div>
                         
                                <button
                           onClick={()=>addMission()}
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