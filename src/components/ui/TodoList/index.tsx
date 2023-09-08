import {  Stack } from "@mui/material"
import { useAppSelector } from "../../../redux/store"
import Todo from "../Todo"
import { Button } from "../../common/index.style"
import { useDispatch } from "react-redux"
import { emptyTodoList ,relaodTodoList} from "../../../redux/module/todoListSlice"

 const TodoList = () => {
  const {todoList} =useAppSelector(state=>state)
  const dispatch=useDispatch()
  const handleEmptyList=()=>dispatch(emptyTodoList())
  const handleRelaodTodoList=()=>dispatch(relaodTodoList())

  
  return (
    <>
      <Stack
      sx={{
        marginTop:'20px',
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          xl: "start",
        },
      }}
    >
      {todoList.length? todoList.map((item) => 
         <Todo key={item.id} {...item} />
      ):<h3>no item in products</h3>}
      </Stack>
     <Button style={{marginLeft:'70%'}} onClick={todoList.length?handleEmptyList:handleRelaodTodoList}>{todoList.length? 'remove all products':'reload products'}</Button>

    </>
  
  

  )
}
export default TodoList
