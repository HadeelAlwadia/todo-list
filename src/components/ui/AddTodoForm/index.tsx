import { Input } from "@mui/material"
import { Button } from "../../common/index.style"
import { Form, TextFiled } from "./AddTodoForm.style"

const AddTodoForm = () => {
  return (
    <Form>
      <TextFiled />
      <Button type="submit">Add</Button> 
    </Form>
  )
}

export default AddTodoForm
