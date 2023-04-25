"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React, { useState } from "react"


const inter = Inter({ subsets: ['latin'] })

type comingData={
  Todo:string;
}

export default function Home() {
  let [Data,setData] = useState([{Todo:"This is Sample Todo"}])
  const [text,setText] =useState("")
    function Add(){
        Data.push({Todo:text})
        setData([...Data])
    }   
    function Delete(ind:number){
      console.log(typeof(ind))
        Data.splice(ind,1)
        setData([...Data])
    }   
    function Edit(ind:number){
      let a:string;
      a=String(prompt("Enter New Todo"))
      Data[ind].Todo=a
      setData([...Data])
    }
  return (
    <div className='flex h-screen bg-gradient-to-r from-cyan-200 via-blue-300 to-cyan-400 flex-col items-center'>
    <h1 className='font-bold text-rose-400 text-5xl m-6'>Todo App</h1>
        <div className='flex flex-col gap-4'>
            <input type="text" className='w-64 h-10 rounded-2xl p-4 ' placeholder="Enter Todo here.." onChange={(e)=>{setText(e.target.value);}}/>
            <button className='self-center w-36 bg-gradient-to-r to-rose-300 from-cyan-300 rounded-xl border-2 border-white h-9' onClick={()=>Add()}>Add</button>
            </div>
    <div className="w-auto bg-gradient-to-r from-rose-100 to-rose-300 rounded-2xl mt-8 p-5">
            <ol className="list-decimal list-inside flex flex-col gap-3">
                {Data.length>0&&Data.map((e:comingData,i)=>{
                    return(
                        <div key={i} className="flex">
                        <li className="w-72">{e.Todo}</li>
                        <div className="w-44 flex justify-between">
                            <div>
                            <button onClick={()=>Edit(i)} className="text-white bg-gradient-to-r from-cyan-200 via w-20 rounded-lg border-2 border-white">Edit</button>
                            </div>
                            <div>
                          <button onClick={()=>Delete(i)} className="text-white bg-gradient-to-r from-cyan-200 via w-20 rounded-lg border-2 border-white">Delete</button>
                            </div>
                        </div>
                        </div>
                        )
                })}
            </ol>
        </div>
    </div>
  )
}
