import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { User } from '../common';

const getStoredUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.name && user.id) return user;
  } catch (_) {
    return null;
  }
};

const storeUser = (user: User | null) => {
  localStorage.setItem('user', JSON.stringify(user || {}));
};

export type State = {
  user: User | null,
};

const initialState: State = {
  user: getStoredUser(),
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      storeUser(action.payload);
    },
    logout: state => {
      state.user = null;
      storeUser(null);
    }
  },
});

export const { login, logout } = slice.actions;
export const selector = (state: RootState) => state.auth;

export default slice.reducer;
