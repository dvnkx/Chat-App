import {StyleSheet, TextInput, View} from 'react-native';

export const SignInInput = () => {
  return (
    <View>
      <View style={{paddingBottom: 12}}>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter your email"
          style={styles.input}
        />
      </View>
      <View>
        <TextInput placeholder="Enter your password" style={styles.input} />
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
