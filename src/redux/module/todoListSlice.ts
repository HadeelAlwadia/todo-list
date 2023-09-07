import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import itemsOfTodoList from '../../data/items.json'
 export type typeOfDeleteProduct='decressQuantity'|'deleteProduct'
 

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
     const newTodoLost=state.filter(item=>item.id!==payload.id)
     state=newTodoLost
   },
   addItemOfList:(state,{payload}:PayloadAction<TodoProperty>)=>{
      state.push(payload)
 
   },
   emptyTodoList:(state:TodoProperty[])=>{
    state=[]
   }

  }}
  
  
);

export default todoListSlice.reducer;
export const {

  addItemOfList,
  deleteItemOfList,
  emptyTodoList
} = todoListSlice.actions;

/**
 * 
 * 
 */