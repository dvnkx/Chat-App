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
  const {name, surname} = useAppSelector(state => state.data);

  const handleClickToProfile = useCallback(() => {
    navigation.navigate(Routes.PROFILEACCOUNT);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.introPos}>
        <Text style={styles.intro}>More</Text>
      </View>
      <View style={styles.pos}>
        <View style={styles.profileContent}>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={handleClickToProfile}>
            <View style={styles.imgPos}>
              <Image style={styles.avatar} source={ASSETS.defaultAvatarImage} />
              <View style={styles.datapos}>
                <Text style={styles.text}>
                  {name} {surname}
                </Text>
                <Text style={styles.email}>{email}</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </View>
          </TouchableOpacity>
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
  introPos: {
    paddingTop: 47,
    paddingBottom: 21,
    paddingLeft: 24,
    paddingRight: 24,
  },
  intro: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
  profileBtn: {
    backgroundColor: '#fff',
  },
  imgPos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '600',
  },
  email: {
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '400',
    color: 'adb5bd',
  },
  pos: {
    flexDirection: 'row',
  },
  avatar: {
    width: 49.1,
    height: 50,
  },
  chevron: {
    width: 24,
    height: 24,
  },
  chevronPos: {
    paddingRight: 16,
    justifyContent: 'center',
  },
  profileContent: {
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
  },
  datapos: {
    paddingRight: 139,
    paddingLeft: 20,
    flexDirection: 'column',
    padding: 10,
  },
});
