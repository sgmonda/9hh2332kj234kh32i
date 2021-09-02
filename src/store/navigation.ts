import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { EModal } from '../common';

export type State = {
  isCollapsed: boolean,
};

const initialState: State = {
  isCollapsed: true,
};

export const slice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggle: state => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggle } = slice.actions;
export const selector = (state: RootState) => state.navigation.isCollapsed;

export default slice.reducer;
