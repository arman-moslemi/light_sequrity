import React from "react";

const ObjectTitleSection = () => {

    return (
        <div className="flex justify-between items-center mt-8  mx-4">
            <div>
                <p className="font-bold text-lg text-[#000]">
                    Object
                </p>

                <div className="flex items-center ">
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
            <button className="bg-green rounded-lg shadow-greenShadow text-white font-bold h-[40px] px-7 hover:bg-menuActive hover:text-green" >
                + New Object
            </button>
        </div>

    )
}

export default ObjectTitleSection;