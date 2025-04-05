import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload.card.info.id;
      const index = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );

      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          // Reduce quantity step-by-step
          state.items[index].quantity -= 1;
        } else {
          // Remove item if quantity is 1
          state.items.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
