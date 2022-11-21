import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {UIInput} from '../Components/UIInput';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NavigationProps} from '../../App';
import {Routes} from '../utils/routes';
import {useFormik} from 'formik';
import {authSchema} from '../utils/schemas';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useAppDispatch} from '../hooks/redux';
import {setUser} from '../store/slices/userSlice';
import {auth} from '../firebase/firebase';

export const SignIn = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleClickToSignUp = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, []);
  const handleClickToTabs = useCallback(() => {
    navigation.navigate(Routes.TABS);
  }, []);

  const dispatch = useAppDispatch();

  const {values, errors, isValid, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authSchema,
    validateOnChange: true,
    onSubmit: values => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(({user}) => {
          console.log(user.email);
          dispatch(
            setUser({
              emai: user.email,
              id: user.uid,
            }),
          );
        })
        .catch(console.error);
      handleClickToTabs();
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textPos}>
        <Text style={styles.signInText}>
          Enter your email address and password
        </Text>
      </View>
      <View>
        <Text style={styles.signUpText}>
          or sign up if you don`t have an account{' '}
        </Text>
      </View>
      <View style={styles.input}>
        <UIInput
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
          autoCorrect={false}
        />
        <UIInput
          placeholder={'Enter your password'}
          value={values.password}
          onChange={handleChange('password')}
          error={errors.password}
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.signInBtnPos}>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={handleSubmit as () => void}
            disabled={!isValid}>
            <Text style={styles.signInBtnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleClickToSignUp}
          disabled={!isValid}>
          <Text style={styles.signUpBtnText}>Sign up</Text>
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
  signInText: {
    fontFamily: 'Mulish',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  signUpText: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 14,
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 46,
    borderRadius: 30,
    backgroundColor: '#91b3fa',
  },
  signInBtnText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
  },
  signInBtnPos: {
    paddingBottom: 15,
  },

  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: 25,
    borderRadius: 30,
  },
  signUpBtnText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
  },
  buttons: {
    alignItems: 'center',
    paddingTop: 195,
  },
});
