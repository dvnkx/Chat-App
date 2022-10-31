import {createSlice} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import {ASSETS} from '../../utils/assets';

type Info = {
  name: null;
  surname?: null;
  image?: ImageSourcePropType;
};

const initialState: Info = {
  name: null,
  surname: null,
  image: ASSETS.defaultAvatarImage,
};

const infoSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setInfo(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.image = action.payload.image;
    },
  },
});

export const {setInfo} = infoSlice.actions;
export default infoSlice.reducer;
