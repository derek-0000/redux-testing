'use client'
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { isTemplateExpression } from "typescript"

export interface TodoItem{
    value:string,
    done:boolean
}
export interface TodoList {
    value:Array<TodoItem>
}
const initialState: TodoList = {
    value: new Array<TodoItem>()
}
export const todoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addItem:(state, action:PayloadAction<string>)=>{
            const item:TodoItem = {
                value:action.payload,
                done:false
            }
            state.value.push(item)
        },
        removeItem:(state, action:PayloadAction<string>)=>{
            const updatedList = state.value.filter((item:TodoItem)=>item.value != action.payload)
            state.value = updatedList 
        }
    }
})
export const { addItem, removeItem} = todoListSlice.actions

export default todoListSlice.reducer