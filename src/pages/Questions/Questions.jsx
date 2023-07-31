import React from "react";
import LeftMenu from "../../components/LeftMenu";
import Header from "../../components/Header";
import QuestionTitleSection from "../../components/QuestionTitleSection";
import TextQuestionsTab from "../../components/TextQuestionsTab";
const Questions = () =>{

    return(
        <div className="flex">
            <LeftMenu/>
            <div className="w-full px-4">
                <Header className="w-[90%] mx-auto"/>
                <QuestionTitleSection/>
                <TextQuestionsTab/>
            </div>

        </div>
    )
}
export default Questions;