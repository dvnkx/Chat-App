import {useNavigation} from '@react-navigation/native';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../hooks/redux';
import {useCallback} from 'react';
import {Routes} from '../utils/routes';
import type {NavigationProps} from '../../App';

export const Contacts = () => {
  const {name, surname, image} = useAppSelector(state => state.data);
  const navigation = useNavigation<NavigationProps>();
  const handleClickToConstacts = useCallback(() => {
    navigation.navigate(Routes.PROFILEACCOUNT);
  }, []);

  return (
    <View style={styles.container}>
      <Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
