import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UIInput} from '../components/UIInput';
import {Routes} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import type {NavigationProps} from '../../App';
import {useFormik} from 'formik';
import {signUpSchema} from '../utils/schemas';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from '../store/slices/userSlice';

export const SignUp = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClickToConstacts = useCallback(() => {
    navigation.navigate(Routes.CONTACTS);
  }, []);

  const dispatch = useAppDispatch();
  const {email, id} = useAppSelector(state => state.user);

  const {values, errors, isValid, handleChange} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    onSubmit: values => {
      console.log(values);
    },
  });

  const handleClick = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({user}) => {
        console.log(user.email);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
        handleClickToConstacts();
      })
      .catch(console.error);
  };

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
          onPress={handleClick}
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
    textAlign: 'center',
  },
});
