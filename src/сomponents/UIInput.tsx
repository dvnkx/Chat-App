import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

interface IInputProps extends TextInputProps {
  error?: string;
}

export const UIInput: React.FC<IInputProps> = ({
  error,
  value,
  style,
  ...props
}) => (
  <View style={styles.inputPad}>
    <TextInput
      {...props}
      value={value}
      style={[style, error && value ? styles.notValidInput : styles.validInput]}
    />
    <View>
      {error ? <Text style={styles.error}>Not valid properties</Text> : null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  inputPad: {
    paddingBottom: 12,
  },
  validInput: {
    width: 327,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    paddingLeft: 10,
    fontFamily: 'Mulish',
  },
  notValidInput: {
    width: 327,
    height: 36,
    borderWidth: 1,
    borderColor: '#ed4337',
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    paddingLeft: 10,
    fontFamily: 'Mulish',
  },
  error: {
    fontFamily: 'Mulish',
    fontSize: 10,
    fontWeight: '500',
    color: 'red',
    paddingLeft: 10,
  },
});
