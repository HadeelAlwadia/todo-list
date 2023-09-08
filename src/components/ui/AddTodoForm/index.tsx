import { useDispatch } from 'react-redux'
import { Button } from '../../common/index.style'
import { Form, TextFiled } from './AddTodoForm.style'
import {  useState } from 'react'
import { addItemOfList } from '../../../redux/module/todoListSlice'
import { uniqueId } from '../../../utils'
import car from '/imgs/car.jpg'

const AddTodoForm =
() => {
  const [value, setValue] = useState('');
  const [haveError,setHaveError]=useState(false)
  const dispatch = useDispatch()
  const handleChangeValue = (newValue: string) => {setValue(newValue); setHaveError(false)}

  const handleAddItemToList = (e:React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    value
      ? dispatch(addItemOfList({ id: uniqueId(), imgUrl: car, name: value }))
      : setHaveError(true)
  }
  return (
    <Form onSubmit={handleAddItemToList}>
      <TextFiled errorInput={haveError}
        onChange={e => handleChangeValue(e.target.value)}
        value={value}
      />
      <Button type='submit'>Add</Button>
    </Form>
  )
}

export default AddTodoForm
