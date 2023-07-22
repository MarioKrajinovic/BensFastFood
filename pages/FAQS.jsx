import React from "react"
import faqsData from "../faqs"

export default function FAQS(){
    const [clickedQuestion, setClickedQuestion] = React.useState([
        {
            id: 1,
            clicked: false
        },
        {
            id: 2,
            clicked: false
        },
        {
            id: 3,
            clicked: false
        },
        {
            id: 4,
            clicked: false
        },
        {
            id: 5,
            clicked: false
        },
        {
            id: 6,
            clicked: false
        },
        {
            id: 7,
            clicked: false
        },
        {
            id: 8,
            clicked: false
        },
    ])

    function getAnswer(id){
        setClickedQuestion(prevClickedQuestion => prevClickedQuestion.map(question => {
            if (question.id === id){
                return {...question, "clicked": !question.clicked}
            }
            else{
                return question
            }
        }))
    }
    console.log(clickedQuestion)

    const faqsInfo = faqsData.map(info => {
        return(
            <div className="info" data-aos="fade-up" key={info.id}>
                <div className="question" onClick={() => getAnswer(info.id)}>
                    <div className="plus-minus">
                        <div className={clickedQuestion[info.id - 1].clicked === true ? "change" : "bar1"}></div>
                        <div className="bar2"></div>
                    </div>
                    <div><h2>{info.question}</h2></div>
                </div>
                <div className={clickedQuestion[info.id - 1].clicked === true ? "get-answer" : "answer"}><p>{info.answer}</p></div>
            </div>
        )
    })
    return(
        <div id="faqs">
            <div className="faqs-title">
                <h1 data-aos="fade-up">FAQS</h1>
                <p data-aos="fade-up">You've got questions, we've got answers.</p>
            </div>
            <div className="faqs-info">
                {faqsInfo}
            </div>
        </div>
    )
}