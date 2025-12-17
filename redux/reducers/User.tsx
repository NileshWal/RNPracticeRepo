import { createSlice } from '@reduxjs/toolkit';

//Created redux slice.

const defaultState = {
  firstName: 'Joe',
  lastName: 'Rogan',
  userId: 1,
};

export const User = createSlice({
  name: 'User',
  initialState: defaultState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { updateFirstName } = User.actions;

export default User.reducer;
