import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { EModal } from '../common';

export type State = {
  activeModal: EModal | null,
};

const initialState: State = {
  activeModal: null,
};

export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<EModal>) => {
      state.activeModal = action.payload;
    },
    hide: state => {
      state.activeModal = null;
    },
  },
});

export const { show, hide } = slice.actions;
export const selector = (state: RootState) => state.modal.activeModal;

export default slice.reducer;
