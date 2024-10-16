'use client'
import { useState } from "react"
import { setselect } from "./Qusetions"

const Question = ({question,index,setSelect}) => {
    const [selectedAnswer,setSelectedAnswer] = useState(question.selected);
    const setAnswer = (indexof,option) =>{
      setSelectedAnswer(option)
      setSelect(indexof,option)
    }
  return (
    <div className="m-4">
        {question && <div>
                <p>{question.question} </p>
                {question.options.map((option, i) => (
                  <div className="m-2" key={i}>
                    <label>
                    <input
                      type="radio"
                      className="radio radio-accent"
                      value={option}
                      checked={question.selected?question.selected===option:selectedAnswer === option}
                      onChange={() => setAnswer(index,option)}
                    />
                    {option}
                  </label>
                </div>
                ))}
            </div>
            }
    </div>
  )
}

export default Question