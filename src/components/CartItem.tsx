import { Box, Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { formatCurrency } from "../utilities/formatCurrency";
import { addProduct,deleteProduct, typeOfDeleteProduct } from "../redux/module/cartSlice";
import { useDispatch } from "react-redux";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};



const CartItem = ({ id, name, price, imgUrl, quantity }: CartItemProps) => {
  const dispatch=useDispatch();

   /***
   *  * onIncreaseHandler can declation as handleDeleteProduct

   */
   const handleAddProduct = () => {
    dispatch(
      addProduct({
        id,
        name,
        price,
        imgUrl,
        quantity
      })
    )
    }

    const handleDeleteProduct = (typeOfDelete:typeOfDeleteProduct) => {
      dispatch(
        deleteProduct({id,typeOfDelete} ))
      }

  return (
    <Stack p={1.5} direction="column">
      <Stack
        direction="row"
        bgcolor="#f6f6f6"
        p={1.8}
        borderRadius={2.5}
        alignItems="center"
        justifyContent="space-between"
        gap={2.5}
      >
        <Stack
          direction="row"
          justifyItems="center"
          alignItems="center"
          gap={2}
        >
          <Box>
            <img className="w-[90px] h-[90px] object-cover" src={imgUrl} />
          </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Button  variant="contained" onClick={()=>handleDeleteProduct('decressQuantity')}>
                <Typography fontSize={18} >-</Typography>
              </Button>
              <Typography fontSize={20}>{quantity}</Typography>
              <Button  variant="contained" onClick={handleAddProduct}>
                <Typography fontSize={18}>+</Typography>
              </Button>
            </Stack>
   

        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body1" component="p">
            {formatCurrency(price * quantity)}
          </Typography>
          <Button
        onClick={()=>handleDeleteProduct("deleteProduct")}
            sx={{
              color: "red",
              border: "1px solid red",
              width: "fit-content",
              transition: "0.4",
              "&:hover": {
                background: "red",
                color: "white",
              },
            }}
          >
            <CloseIcon />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartItem;
