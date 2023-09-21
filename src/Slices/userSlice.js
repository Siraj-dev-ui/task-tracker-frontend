import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getPlayer: () => {},
    setUser: (state, action) => {
      // console.log('dispatching user', action.payload);
      state.user = action.payload;
      // console.log(state);
      return state;
    },
    resetUserState: (state) => {
      state.user = {};

      return state;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      return state;
    },
    removeToken: (state) => {
      state.token = '';
      return state;
    },
    // changePlayerLocation: () => {},
    // getPlayerNewLocation: () => {},
    // setPlayerNewLocation: (state, action) => {
    //   state.playerDetails.c_location = action.payload;
    //   return state;
    // },
  },
});

export const { setUser, resetUserState, setToken, removeToken } =
  userSlice.actions;

export default userSlice.reducer;
