import { createSlice } from '@reduxjs/toolkit';

const itemsInitialState = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    prepare({ name, number, id }) {
      return {
        payload: {
          name,
          number,
          id,
        },
      };
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
