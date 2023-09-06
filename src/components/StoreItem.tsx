import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import { formatCurrency } from '../utilities/formatCurrency'
import {  addProduct } from '../redux/module/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}


const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const isProductInCart = useSelector((state:RootState)=>state.cart.cart).find((product)=>product.id===id)?true:false
 console.log(isProductInCart)
const dispatch=useDispatch();
  /**
   * onIncreaseHandler can declation as handleAddProduct
   */
  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id,
        name,
        price,
        imgUrl,
        quantity: 1
      })
    )
  }

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
        <Typography variant='h6' component='span' color='text.secondary'>
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={isProductInCart ? () =>{}: handleAddProduct}
          sx={{ margin: '30px auto 0px' }}
          variant='contained'
          size='medium'
        >
          {isProductInCart ? 'IN Cart':'Add To Cart' }
        </Button>
      </CardActions>
    </Card>
  )
}

export default StoreItem
