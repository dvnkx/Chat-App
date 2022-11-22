import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {ASSETS} from '../utils/assets';

interface ISearchInput {
  placeholder: string;
}

export const UISearchInput: React.FC<ISearchInput> = props => {
  return (
    <View style={styles.input}>
      <TextInput style={styles.textInput} placeholder={props.placeholder} />
      <View style={styles.iconPos}>
        <Image style={styles.inputIcon} source={ASSETS.search} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 327,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    paddingLeft: 32,
    fontFamily: 'Mulish',
  },
  input: {
    justifyContent: 'center',
  },
  inputIcon: {
    width: 16,
    height: 16,
    opacity: 0.3,
  },
  iconPos: {
    position: 'absolute',
    paddingLeft: 8,
  },
});
