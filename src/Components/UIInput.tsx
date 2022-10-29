import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';

interface IInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  onChange: (text: string) => void;
  error?: string;
}

export const UIInput: React.FC<IInputProps> = props => {
  return (
    <View style={styles.inputPad}>
      <TextInput
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onChange}
        style={
          props.error && props.value ? styles.notValidInput : styles.validInput
        }
      />
    </View>
  );
};

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
});
