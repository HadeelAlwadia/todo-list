import { Card, CardContent,CardMedia, Typography } from "@mui/material"
import { TodoProperty, deleteItemOfList } from "../../../redux/module/todoListSlice"
import { Button } from "../../common/index.style"
import { useDispatch } from "react-redux"

const Todo = ({id,imgUrl,name}:TodoProperty) => {
  const dispatch=useDispatch();
  const handleDeleteItem=()=>dispatch(deleteItemOfList({id}))
  return (
    <Card sx={{ minWidth: { xs: '300px', sm: '400px' }, height: 430 }}>
    <CardMedia
      component='img'
      alt='green iguana'
      sx={{ height: 250, maxWidth: 400 }}
      image={imgUrl}
    />
    <CardContent
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant='h5' component='div'>
        {name}
      </Typography>
     
      <Button onClick={handleDeleteItem}>
        delete
      </Button>
   </CardContent>

  </Card>
  )
}

export default Todo
