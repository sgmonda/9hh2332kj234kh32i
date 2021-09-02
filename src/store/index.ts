import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counter from './counter';
import modal from './modal';
import navigation from './navigation';

const store = configureStore({
  reducer: {
    counter,
    modal,
    navigation,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
