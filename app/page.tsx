'use client'
import { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '@/redux/features/todoSlice'
import { useRef } from 'react'

import Image from 'next/image'

export default function Home() {
  const todoList = useSelector((state:RootState)=>state.todolist.value)
  const dispatch = useDispatch();
  const userInput = useRef<string>("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-2xl'>Redux To-do Testing</h1>
      <div className='flex flex-col gap-12'>
        <div>
          {todoList.map((item,index)=>{
            return(
              <>
                <input type='radio'/>
                <div>{item.value}</div>
              </>
            )
          })}
        </div>
        <input onChange={e => userInput.current = e.target.value} type="text" name="" id="" />
        <button onClick={()=>dispatch(addItem(userInput.current))}>Add Todo</button>
        <button onClick={()=>dispatch(removeItem(userInput.current))}>Remove Todo</button>
      </div>
    </main>
  )
}
