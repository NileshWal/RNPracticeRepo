import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/User';

//Created redux store.

console.log('User reducer:', userReducer);

const rootReducers = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer: rootReducers });

export default store;
