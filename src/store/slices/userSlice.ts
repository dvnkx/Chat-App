import {createSlice} from '@reduxjs/toolkit';

export interface IUserStore {
  email: null;
  id: null;
  name: null;
  surname?: null;
  image?: string;
}

const initialState: IUserStore = {
  email: null,
  id: null,
  name: null,
  surname: null,
  image: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    setInfo(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.image = action.payload.image;
    },
    logOut(state) {
      state.email = null;
      state.id = null;
      state.name = null;
      state.surname = null;
      state.image = undefined;
    },
  },
});

export default userSlice.reducer;
