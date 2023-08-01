import React ,{useState} from "react";


const EditAgencyTitleSection = () => {
    return (
        <div className="flex justify-between items-center mt-8  mx-4">
            <div>
                <p className="font-bold text-lg text-[#000]">
                    Edit Agency
                </p>

                <div className="flex items-center ">
                    <p className="font-medium text-sm text-[#000]">
                        Dashboard
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                    <p className="font-medium text-sm text-[#000]">
                        Agency List
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                    <p className="font-medium text-sm text-[#000]">
                        Edit Agency
                    </p>
                </div>
            </div>
           
        </div>

    )
}

export default EditAgencyTitleSection;