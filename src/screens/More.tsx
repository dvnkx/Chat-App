import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ASSETS} from '../utils/assets';
import type {NavigationProps} from '../../App';
import {Routes} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {auth} from '../firebase/firebase';

export const More = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClickToProfile = useCallback(() => {
    navigation.navigate(Routes.PROFILEACCOUNT);
  }, []);

  const handleClickToContacts = useCallback(() => {
    navigation.navigate(Routes.CONTACTS);
  }, []);

  const handleClickToChats = useCallback(() => {
    navigation.navigate(Routes.CHATS);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>More</Text>
      </View>
      <View>
        <View style={styles.profileContent}>
          <View style={styles.profileButtonPos}>
            <TouchableOpacity
              onPress={handleClickToProfile}
              style={styles.profileButton}>
              <View style={styles.avatarPos}>
                <Image
                  style={styles.profileAvatar}
                  source={ASSETS.defaultAvatarImage}
                />
              </View>
              <View style={styles.userData}>
                <View style={styles.namePos}>
                  <Text style={styles.text}>
                    Name {auth.currentUser!.displayName}
                  </Text>
                </View>
                <Text style={styles.userEmail}>{auth.currentUser!.email}</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabsContent}>
          <View style={styles.tabsPos}>
            <TouchableOpacity
              style={styles.tabsButton}
              onPress={handleClickToContacts}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.defaultAvatarImage} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Account</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsPos}>
            <TouchableOpacity
              style={styles.tabsButton}
              onPress={handleClickToChats}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.chats} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Chats</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsContent}>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.appereance} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Appereance</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.notifications} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Notifications</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.privacy} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Privacy</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.data} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Data Usage</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderPos}>
          <View style={styles.border}></View>
        </View>
        <View style={styles.tabsContent}>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.help} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Help</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsPos}>
            <TouchableOpacity style={styles.tabsButton}>
              <View style={styles.iconPos}>
                <Image style={styles.icon} source={ASSETS.message} />
              </View>
              <View style={styles.textPos}>
                <Text style={styles.text}>Invite your friends</Text>
              </View>
              <View style={styles.chevronPos}>
                <Image style={styles.chevron} source={ASSETS.chevronRight} />
              </View>
            </TouchableOpacity>
          </View>
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
  profileContent: {
    alignItems: 'center',
    width: 375,
    height: 66,
  },
  profileButton: {
    width: 343,
    height: 50,
    flexDirection: 'row',
  },
  profileButtonPos: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarPos: {
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 24,
    height: 24,
  },
  userData: {
    paddingLeft: 20,
  },
  namePos: {
    paddingBottom: 2,
  },
  userEmail: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 12,
    opacity: 0.5,
  },
  chevron: {
    width: 7.42,
    height: 12.02,
  },
  text: {
    fontFamily: 'Mulish',
    fontWeight: '600',
  },
  tabsContent: {
    width: 375,
    height: 104,
  },
  tabsPos: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  tabsButton: {
    width: 343,
    height: 40,
    flexDirection: 'row',
  },
  icon: {
    width: 17,
    height: 17,
  },
  iconPos: {
    justifyContent: 'center',
  },
  textPos: {
    paddingLeft: 6,
    justifyContent: 'center',
  },
  chevronPos: {
    position: 'absolute',
    paddingTop: 15,
    paddingLeft: 320,
  },
  optionsContent: {
    width: 375,
    height: 204,
  },
  border: {
    width: 342,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  borderPos: {
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
  },
});
