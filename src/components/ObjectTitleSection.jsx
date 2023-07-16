import React from "react";


const ObjectTitleSection = () =>{

    return (
        <div className="flex justify-between">
        

       

       <div>
       <p className="font-bold text-lg text-[#000] ml-4 mt-8">
          Object
        </p>

        <div className="flex items-center mt-4  ml-4">
          <p className="font-medium text-sm text-[#000]">
            Dashboard
          </p>
          <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
            .
          </p>
          <p className="font-medium text-sm text-[#000]">
           Object
          </p>
        </div>
       </div>
       <button className="bg-green rounded-lg shadow-green text-white h-[40px] px-7">
                + New Object
        </button>
        </div>

 
    )
}

export default ObjectTitleSection;