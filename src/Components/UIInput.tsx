import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface IInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  onChange: (text: string) => void;
  error?: string;
  autoCorrect?: boolean;
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
        autoCorrect={props.autoCorrect}
      />
      <View>
        {props.error ? (
          <Text style={styles.error}>Not valid properties</Text>
        ) : null}
      </View>
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
  error: {
    fontFamily: 'Mulish',
    fontSize: 10,
    fontWeight: '500',
    color: 'red',
    paddingLeft: 10,
  },
});
