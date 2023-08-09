import React from "react";
import {ReactComponent as Attachment} from "../assets/icon/attach.svg"
import {ReactComponent as Send} from "../assets/icon/send.svg"
import { ReactComponent as Support } from "../assets/icon/support.svg";
import { ReactComponent as User } from "../assets/icon/profile.svg";
const TicketDetail = () => {

    return (
        <div className="px-4">
            <div className="w-full   rounded-2xl  shadow-tableShadow mt-5">

                <div className="flex border-b-2 border-borderGray border-dashed justify-between py-4 px-8">
                 <div className="flex flex-col justify-end items-start">
                  <div className="flex my-2">
           
         
                 <span className="text-black font-bold text-base mr-2">
                        Title : 

                      
                    </span>
               
                    <span className="font-medium">
                             Change Password is not working
                        </span>
                  </div>
                  <div className="flex my-2">
           
         
           <span className="text-black font-bold text-base mr-2">
                  Priority : 

                
              </span>
         
              <span className="font-medium">
                       Low
                  </span>
            </div>
            <div className="flex my-2">
           
         
           <span className="text-black font-bold text-base mr-2">
                  Status : 

                
              </span>
         
              <div className="px-4 h-[30px] text-sm font-bold text-mainColor bg-lightOrange flex justify-center items-center rounded-full">
                Waiting
              </div>
            </div>
                  </div>
                 <div className="flex flex-col justify-end items-end">
                 <div className="flex  my-2">
                  <span className="text-black font-bold text-base mr-2">
                        Register Date : 

                      
                    </span>
                    <span className="font-medium">
                            2023/10/10
                        </span>
                  </div>
                  <div className="flex  my-2">
                  <span className="text-black font-bold text-base mr-2">
                        Last Update Date : 

                      
                    </span>
                    <span className="font-medium">
                            2023/12/12
                        </span>
                  </div>
                 </div>
                </div>
                <div className="flex items-end my-8 px-8 ">
           
            <div className="w-full">
              <span className="font-IRSans text-black mb-3">
                Type Your Massage Here
              </span>
              <div className="flex w-full h-auto items-start justify-between   px-2 py-3 ">
               <div className="flex flex-col w-full">
               <textarea className="w-[95%] min-h-[50px] overflow-y-auto resize-none border border-borderGray mt-2 rounded-md" placeholder="Type your message here..." />
                
                <button className="bg-[#EDF3FA] h-[20px] w-max px-4 mt-4 py-3  rounded-md flex justify-center items-center">
             <span>
                Attach File
             </span>
            </button>
               </div>
                <button className="px-5 py-2 flex items-center justify-center rounded-lg bg-green h-[40px]">
                  <span className="font-bold text-lg text-white">
                    Send
                  </span>
                </button>
              </div>
             
            </div>
            
         </div>
         <div className="flex justify-end mb-4 px-8">
         <div className="w-[80%] bg-lightGreen min-h-[200px] ml-3 rounded-lg p-5 overflow-y-auto">
              <div className="w-full flex justify-end border-b border-b-black pb-4">
                <p className="font-IRSans text-black font-bold text-sms">
                    Admin 1 | Jack Win
                </p>
              </div>
              <p className="font-IRSans text-black font-normal text-base m-4">
               I will be answer your text 1 hour later.
                <br/>
                thanks
              </p>
              </div>
           
         <div className="bg-green h-[47px] ml-2 w-[47px] rounded-md flex justify-center items-center">
              <Support/>
            </div>
           
         </div>

         <div className="flex justify-start mb-4 px-8">
         <div className="bg-green mr-2 h-[47px] w-[47px] rounded-md flex justify-center items-center">
              <User/>
            </div>
         <div className="w-[80%] bg-[#F7F7F7] min-h-[200px] mr-3 rounded-lg p-5 overflow-y-auto">
              <div className="w-full flex justify-start border-b border-b-black pb-4">
                <p className="font-IRSans text-black font-bold text-sms">
                  Ali Athari
                </p>
              </div>
              <p className="font-IRSans text-black font-normal text-base m-4">
                I cant send message !
              </p>
              </div>
           
         
           
         </div>
            </div>
        </div>
    )
}

export default TicketDetail;