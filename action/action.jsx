'use client'
import { useRouter } from 'next/navigation'


export function redirectResult(){
    console.log('redirect')
  const route = useRouter();
  route.push('/result')
}
