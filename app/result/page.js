import React from 'react'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

const page = async() => {
    let score = cookies().get('score')?.value
    if(score)
        score=JSON.parse(score)
    // await new Promise((resolve)=>setTimeout(resolve,3000))
    
    
  return (
    <div className="">
        <Link href='/' className="absolute top-0 btn btn-ghost text-xl">Home</Link>
        <div className="m-12 mt-28">
            <div className="radial-progress text-primary" style={{ "--value": score[9]*10 }} role="progressbar">
                {score[9]*10}%
            </div>
        </div>
    </div>
  )
}

export default page