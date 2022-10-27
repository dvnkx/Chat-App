import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {UIInput} from '../Components/UIInput';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textPos}>
        <Text style={{fontFamily: 'Mulish', fontSize: 24, textAlign: 'center'}}>
          Enter your email address and password
        </Text>
      </View>
      <View>
        <Text style={{fontFamily: 'Mulish', fontSize: 16}}>
          or sign up if you don`t have an account{' '}
        </Text>
      </View>
      <View style={styles.input}>
        <UIInput
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
        />
        <UIInput placeholder={'Enter your password'} />
      </View>
      <View style={styles.buttons}>
        <View style={{paddingBottom: 15}}>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={{fontFamily: 'Mulish'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={{fontFamily: 'Mulish'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'Mulish',
  },
  input: {
    paddingTop: 95,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textPos: {
    paddingTop: 79,
    paddingBottom: 5,
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 46,
    borderRadius: 30,
    backgroundColor: '#91b3fa',
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: 25,
    borderRadius: 30,
  },
  buttons: {
    alignItems: 'center',
    paddingTop: 195,
  },
});
