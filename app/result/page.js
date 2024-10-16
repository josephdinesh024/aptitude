import React from 'react'
import { cookies } from "next/headers";
import Link from 'next/link';

const page = async() => {
    let scores = cookies().get('score')?.value
    if(scores)
        scores=JSON.parse(scores)
    
    const totalval = scores.reduce((prival,curnval)=>prival+curnval,0)
    const length = scores?.length-1 

    
  return (
    <div className="">
        <Link href='/' className="absolute top-0 btn btn-ghost text-xl">Home</Link>
        {scores && <> <div className="m-12 mt-28 flex flex-col sm:flex-row">
            <div className='w-1/2'>
                <h1 className='m-4 text-2xl w-64'>Over All Percent</h1>
                <div className="w-48 h-48 radial-progress text-primary" style={{ "--value": (totalval / (length+1))*10 }} role="progressbar">
                    {((totalval / (length+1))*10).toFixed(0)}%
                </div>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3'>
                {scores?.map((score,index)=>(
                    <div key={index}>
                    <h1 className='m-4 text-lg'>{index+1} Attempt</h1>
                    <div className="p-6 sm:p-10 radial-progress text-violet-500" style={{ "--value": score*10 }} role="progressbar">
                        {score*10}%
                    </div>
                    </div>
                ))}
            </div>
        </div>

        </>
        }
    </div>
  )
}

export default page