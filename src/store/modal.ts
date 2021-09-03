import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { EModal, User } from '../common';

export type State = {
  activeModal: EModal | null,
  user?: User,
};

const initialState: State = {
  activeModal: null,
};

export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<{ type: EModal, user?: User }>) => {
      console.log('SHOWING', action.payload);
      Object.assign(state, { activeModal: action.payload.type, user: action.payload.user });
    },
    hide: state => {
      Object.assign(state, { activeModal: null, _id: null });
    },
  },
});

export const { show, hide } = slice.actions;
export const selector = (state: RootState) => state.modal;

export default slice.reducer;
