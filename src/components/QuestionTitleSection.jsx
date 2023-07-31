import React ,{useState} from "react";
import { Link } from "react-router-dom";
const QuestionTitleSection = () => {

    return (
        <div className="flex justify-between items-center mt-8  mx-4">
            <div>
                <p className="font-bold text-lg text-[#000]">
                    Questions
                </p>

                <div className="flex items-center ">
                    <p className="font-medium text-sm text-[#000]">
                        Dashboard
                    </p>
                    <p className="font-medium text-3xl text-menuItem mx-3 mt-[-15px]">
                        .
                    </p>
                    <p className="font-medium text-sm text-[#000]">
                        Questions
                    </p>
                </div>
            </div>
          
        </div>

    )
}

export default QuestionTitleSection;