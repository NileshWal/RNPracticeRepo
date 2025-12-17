import { combineReducers, configureStore } from '@reduxjs/toolkit';
import User from './reducers/User';
import { logger } from 'redux-logger';

//Created redux store.

console.log('User reducer:', User);

const rootReducers = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducers,
  //Logging middleware for redux actions. It will show prev and next state and action done.
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
