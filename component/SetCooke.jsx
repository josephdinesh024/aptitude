'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export const setCookies = (score) =>{
    let cookeData = cookies().get('score')?.value
    
    cookeData = cookeData?JSON.parse(cookeData):[]
    if(cookeData?.length==10){
        cookeData.shift()
    }
    cookeData.push(score)

    cookies().set('score',JSON.stringify(cookeData));

    redirect('/result')
    
}
