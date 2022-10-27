import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';

interface IInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

export const UIInput = (props: IInputProps) => {
  return (
    <View>
      <View style={{paddingBottom: 12}}>
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 327,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    paddingLeft: 10,
    fontFamily: 'Mulish',
  },
});
