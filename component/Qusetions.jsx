'use client'

import { useState, useEffect } from 'react';
import Question from './Question';
import {setCookies} from './SetCooke'


const Questions = (topic) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [indexs,setIndexs] = useState(0);
  const [score,setScore] = useState(0);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = [];

        for (let i = 0; i < 10; i++) {
          const res = await fetch('https://aptitude-api.vercel.app/'+topic.topic);
          const data = await res.json();
          data.selected = null
          data.correctAns = 0
          fetchedQuestions.push(data);
        }

        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []); 

  const setselect = (questionIndex,selectOption) =>{
    if(questions[questionIndex].answer===selectOption && questions[questionIndex].correctAns != 1){
      questions[questionIndex].correctAns = 1;
      setScore((val)=>val+1);
    }
    if(questions[questionIndex].answer!==selectOption && questions[questionIndex].correctAns == 1){
      questions[questionIndex].correctAns = 0;
      setScore((val)=>val-1);
    }
    console.log(questions[questionIndex].answer)
    questions[questionIndex].selected = selectOption;
  }
  
  if (loading) {
    return <div className='flex'>
      <p className='text-xl'>Loading questions</p>
      <span className="loading loading-dots loading-xs"></span>
      </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div> 
      <div>
      <h1>{indexs+1}) &nbsp;Question </h1>
      {questions && <Question question={questions[indexs]} index={indexs} setSelect={setselect}/>}
      </div>
      <div className='space-x-4'>
            <button className='btn m-4' onClick={()=>setIndexs((value)=>value-1)} disabled={indexs==0?true:false}>Previous</button>
            {indexs >= questions.length - 1?
            <a href='/result'><button 
            className="btn btn-outline btn-secondary"
            onClick={()=>setCookies(score)}>Submit</button></a>:
            <button className="btn btn-active btn-ghost" onClick={()=>setIndexs((value)=>value+1)}>Next</button>
            }
      </div>
       
    </div>
  );
};

export default Questions;


