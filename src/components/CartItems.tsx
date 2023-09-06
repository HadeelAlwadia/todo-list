import { Button, Menu, Modal, Stack, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "../redux/store";
import { formatCurrency } from "../utilities/formatCurrency";

const CartItems = () => {
  const {cart,getTotalPrice} = useAppSelector((state) => state.cart);
  //here make the carible controll in module of cart
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
    
  const handleToggleModalCart = () => setIsOpenModalCart(!isOpenModalCart);

  return (
    <div>

      {cart.length  /*this delete becuse 0 get falseth value  */ && (
        <div>
          <div
            onClick={handleToggleModalCart}
            className="bg-white border-[1px] border-blue-500 mr-3 p-2 rounded-full cursor-pointer group duration-300 hover:bg-blue-500 hover:text-white relative"
          >
            <ShoppingCart className="text-[18px] text-blue-500 duration-300 group-hover:text-white" />
            <span className=" absolute translate-x-[60%] translate-y-[-25%] flex flex-row justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
              {cart.length}
            </span>
          </div>
          <Modal
            open={isOpenModalCart}
            onClose={handleToggleModalCart}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Menu
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={isOpenModalCart}
              onClose={handleToggleModalCart}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Stack
                sx={{ minWidth: 600 }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={1.5}
              >
                <Typography variant="h6"> CART</Typography>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    width: "fit-content",
                    transition: "0.4",
                    "&:hover": {
                      background: "black",
                      color: "white",
                    },
                  }}
                  onClick={handleToggleModalCart}
                >
                  <CloseIcon />
                </Button>
              </Stack>
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
              <Stack direction="row" justifyContent="flex-end" p={1.5}>
                <Typography variant="h5" component="p">
                  Total Price: {formatCurrency(getTotalPrice(cart) )}
                </Typography>
              </Stack>
            </Menu>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default CartItems;
