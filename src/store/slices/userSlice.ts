import {createSlice} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import {ASSETS} from '../../utils/assets';

export type User = {
  email: null;
  id: null;
  name: null;
  surname?: null;
  image?: ImageSourcePropType;
};

const initialState: User = {
  email: null,
  id: null,
  name: null,
  surname: null,
  image: ASSETS.defaultAvatarImage,
};

const userSlice = createSlice({
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
  },
});

export const {setUser, setInfo} = userSlice.actions;
export default userSlice.reducer;
