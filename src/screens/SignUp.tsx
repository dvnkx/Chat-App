import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UIInput} from '../Components/UIInput';
import {Routes} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import type {NavigationProps} from '../../App';
import {useFormik} from 'formik';
import {authSchema} from '../utils/schemas';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/firebase';

export const SignUp = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClickToProfile = useCallback(() => {
    navigation.navigate(Routes.PROFILEACCOUNT);
  }, []);

  const {values, errors, isValid, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authSchema,
    validateOnChange: true,
    onSubmit: values => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(({user}) => {
          console.log(user);
        })
        .catch(console.error);
      handleClickToProfile();
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textPos}>
        <Text style={styles.signUpText}>Sign up</Text>
      </View>
      <View style={styles.input}>
        <UIInput
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
        />
        <UIInput
          placeholder={'Enter your password'}
          value={values.password}
          onChange={handleChange('password')}
          error={errors.password}
        />
      </View>
      <View style={styles.btnPos}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSubmit}
          disabled={!isValid}>
          <Text style={styles.btnText}>Sign up</Text>
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
  btnText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
  },
  btnPos: {
    paddingTop: 274,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 46,
    borderRadius: 30,
    backgroundColor: '#91b3fa',
  },
  textPos: {
    paddingTop: 79,
    paddingBottom: 5,
  },
  signUpText: {
    fontFamily: 'Mulish',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});
