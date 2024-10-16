
'use client'

import { useState, useEffect } from 'react';
import Question from '@/component/Question';
import {setCookies} from '@/component/SetCooke'


const Questions = ({params}) => {
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
          const res = await fetch('https://aptitude-api.vercel.app/'+params.topic);
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
  },[]); 

  const setselect = (questionIndex,selectOption) =>{
    if(questions[questionIndex].answer===selectOption && questions[questionIndex].correctAns != 1){
      questions[questionIndex].correctAns = 1;
      setScore((val)=>val+1);
    }
    if(questions[questionIndex].answer!==selectOption && questions[questionIndex].correctAns == 1){
      questions[questionIndex].correctAns = 0;
      setScore((val)=>val-1);
    }
    questions[questionIndex].selected = selectOption;
  }
  
  if (loading) {
    return <div className='flex space-x-1 p-8 sm:p-32'>
      <p className='text-xl'>Loading questions</p>
      <span className="mt-2 loading loading-dots loading-xs"></span>
      </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='relative h-full text-xl'> 
      <div className='p-4'>
      <h1 className='mb-4 underline'>{indexs+1}) &nbsp;Question </h1>
      {questions && <Question question={questions[indexs]} index={indexs} setSelect={setselect}/>}
      </div>
      <div className='space-x-2 absolute right-0 bottom-0'>
            <button className='btn' onClick={()=>setIndexs((value)=>value-1)} disabled={indexs==0?true:false}>Previous</button>
            {indexs >= questions.length - 1?
            <button 
            className="btn btn-outline btn-secondary"
            onClick={()=>{
              setCookies(score)}}>Submit</button>:
            <button className="btn btn-active btn-ghost" onClick={()=>setIndexs((value)=>value+1)}>Next</button>
            }
      </div>
       
    </div>
  );
};

export default Questions;



