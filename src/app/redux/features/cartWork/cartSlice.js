import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add to cart work
    add: (state, action) => {
       let cheackData=state.cartItem.findIndex((item)=>item.id==action.payload.id)
     
       if(cheackData>=0){
        state.cartItem[cheackData].qnty +=1
       }
       else{
        state.cartItem.push(action.payload)
       }
      
    },
    // remove work
    remove: (state,action)=>{
      let updateData=state.cartItem.filter((item)=>item.id!=action.payload)
      state.cartItem=updateData
    },
    //increase-work
    incrementQuantity:(state,action)=>{
      let cheackData=state.cartItem.findIndex((item)=>item.id==action.payload)
      state.cartItem[cheackData].qnty +=1
        
        
    },
    //increase-work
    decrementQuantity:(state,action)=>{
      let cheackData=state.cartItem.findIndex((item)=>item.id==action.payload)
      if(state.cartItem[cheackData].qnty >1){
        state.cartItem[cheackData].qnty -=1
      }
         
    },

    // Clear All
    clearAll:(state,action)=>{
      state.cartItem=[]
    }

    
    
  },
});

export const { add, remove ,incrementQuantity,decrementQuantity,clearAll} = cartSlice.actions;

export default cartSlice.reducer;
