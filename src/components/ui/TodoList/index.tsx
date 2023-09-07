import {  Stack } from "@mui/material"
import { useAppSelector } from "../../../redux/store"
import Todo from "../Todo"
import { Button } from "../../common/index.style"
import { useDispatch } from "react-redux"
import { emptyTodoList } from "../../../redux/module/todoListSlice"

 const TodoList = () => {
  const {todoList} =useAppSelector(state=>state)
  const dispatch=useDispatch()
  const handleEmptyList=()=>dispatch(emptyTodoList())

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
      <Button style={{marginLeft:'70%'}} onClick={handleEmptyList}>remove all products</Button>

    </>
  
  

  )
}
export default TodoList
