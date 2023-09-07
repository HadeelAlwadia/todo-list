import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import itemsOfTodoList from '../../data/items.json'
 

export interface TodoProperty  {
  id: string;
  name: string;
  imgUrl: string;
};
const items:TodoProperty[]= itemsOfTodoList;

const initialState: TodoProperty[] = items 

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
   deleteItemOfList:(state,{payload}:PayloadAction<{id:string}>)=>{
     const newTodoList=state.filter(item=>item.id!==payload.id)
     return [...newTodoList]
   },
   addItemOfList:(state,{payload}:PayloadAction<TodoProperty>)=>{
      return [payload,...state]
 
   },
   emptyTodoList:()=>[]

  }}
);

export default todoListSlice.reducer;
export const {

  addItemOfList,
  deleteItemOfList,
  emptyTodoList
} = todoListSlice.actions;
