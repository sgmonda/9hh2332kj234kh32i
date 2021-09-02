import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { User } from '../common';

export type State = {
  pages: number;
  page: number;
  items: User[];
};

const initialState: State = {
  page: 0,
  pages: 1,
  items: [],
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setListData: (state, action: PayloadAction<Partial<State>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setListData } = slice.actions;
export const selector = (state: RootState) => state.users;

export default slice.reducer;
