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
  getTotalPrice:(cart:Cart[])=>number
};


const initialState: CartList = {
  cart: items,
  getTotalPrice:(cart:Cart[])=>cart.reduce((total:number,product:Cart)=>total+product.price*product.quantity,0)
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct: (state, action: PayloadAction<Cart>) => {
      const foundProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
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
    let findProduct=null
     if(payload.typeOfDelete==='decressQuantity'){
         findProduct=state.cart.find((product:Cart)=>product.id===payload.id) as Cart
    --findProduct.quantity
      }

    
      const newCart = state.cart.filter(
        (item) => item.id !== payload.id
      );
      
      payload.typeOfDelete==='decressQuantity'?newCart.push(findProduct as Cart):console.log(findProduct)


        return {...state,cart:newCart}
      
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
