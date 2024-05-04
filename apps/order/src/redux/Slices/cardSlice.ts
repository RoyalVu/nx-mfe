import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<number> = [];

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;
export default cardSlice.reducer;
