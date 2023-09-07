import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 export type typeOfDeleteProduct='decressQuantity'|'deleteProduct'
const items: Cart[] =
  localStorage.getItem("cartItems")/* !== null  delete this becuse when dont exiest in localstorge return undefinent so when localstorge havent value take first choose*/
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [];

const saveDataToLS = (items: Cart[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

interface Cart  {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

export interface CartList{
  cart: Cart[];
};


const initialState: CartList = {
  cart: items,
}
export const getTotalprice=(cart:Cart[])=>cart.reduce((total,product)=>total+(product.price*product.quantity),0)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state:CartList, action: PayloadAction<Cart>) => {
      const foundProduct =state.cart.find(
        product => product.id === action.payload.id
      );
      console.log(state)
      if (foundProduct) {
      foundProduct.quantity += 1;
      } else {
        const productClone = {
          ...action.payload,
          quantity: 1 
        };
        state.cart.push(productClone);
      }

      saveDataToLS(state.cart);
    },

     deleteProduct: (state, {payload}: PayloadAction<{ id: number,typeOfDelete:typeOfDeleteProduct}>) => {
       
      let indexOfProduct=0
      const foundProduct=payload.typeOfDelete==='decressQuantity'? state.cart.find(
        (product,index) => {indexOfProduct=index; return(product.id === payload.id)}
      ):null;

      if (foundProduct) {
        foundProduct.quantity -= 1;
        state.cart[indexOfProduct]=foundProduct
      } else {
       const newCart=state.cart.filter(product=>product.id!==payload.id)
        state.cart=newCart;
      }
      
      saveDataToLS(state.cart);
    },
    emptyCart:(state)=>({...state,cart:[]})
    //this case add in cart becuse the perfect thing every thing spesfic for cart they you be in cart slice

  }}
  
);

export default cartSlice.reducer;
export const {
  addProduct,
  deleteProduct,
  emptyCart
  
} = cartSlice.actions;

//Proxy Object
//https://www.reddit.com/r/reactjs/comments/ohibsl/arrayfind_returns_proxy_object/?rdt=65434