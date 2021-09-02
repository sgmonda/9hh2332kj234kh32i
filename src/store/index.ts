import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import modal from './modal';
import navigation from './navigation';
import auth from './auth';

const store = configureStore({
  reducer: {
    modal,
    navigation,
    auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
