import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ASSETS} from '../utils/assets';
import {useAppSelector} from '../hooks/redux';
import type {NavigationProps} from '../../App';
import {Routes} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const More = () => {
  const navigation = useNavigation<NavigationProps>();
  const {email} = useAppSelector(state => state.user);
  const {name, surname} = useAppSelector(state => state.user);

  const handleClickToProfile = useCallback(() => {
    navigation.navigate(Routes.PROFILEACCOUNT);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>More</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleClickToProfile}>
            <Image style={styles.profileImg} source={ASSETS.avatar} />
            <View>
              <Text>Name</Text>
              <Text>Email</Text>
            </View>
            <View>
              <Image style={styles.chevron} source={ASSETS.chevronRight} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', backgroundColor: 'yellow'}}>
          <Text>Another person</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 57,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 13,
  },
  headerText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    width: 327,
    height: 68,
  },
  profileImg: {
    width: 47,
    height: 47,
  },
  chevron: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: 'blue',
  },
});
