import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemss: [],
  },
  reducers: {
    //can have many reducers in it. Currently it has only cartReducer b/c name of the slice in cart and only one red
    //reducers funcs corresponding to each action. actions and reduces here
    //reducer is an object. adding, removing an item or clearing the cart these are the actions
    addItem: (state, action) => {
      //mutating/modifying the satate here
      //the State in this gets the acces to the initialState of an item declared above
      //modifies the state based on the action
      state.itemss.push(action.payload);
      //when click on the add button it dispatches an action and it will add item and it will
      //get the payload when call the addItem

      //earlier in older version (vanilla react) state.itemss.push(action.payload); this was prohibited
      //dont mutate state in older version
      //Eg:- const newState=[...state];
      //     newState.items.push(action.payload);
      //     return newState;

      //But using Redux Toolkit we have to mutate the state according to the State. But redux in background is still crating the older version with the help of immer lib.
      //Redux Toolkit uses immer behind 
      //immer:- is a tiny package that allows you to work with state in a more convenient way.
    },
    removeItem: (state) => {
      state.itemss.pop();
    },

    clearCart: (state) => {
      state.itemss.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
