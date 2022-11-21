import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProps} from '../../App';
import {ASSETS} from '../utils/assets';
import {Routes} from '../utils/routes';

export const Chats = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClickToChat = useCallback(() => {
    navigation.navigate(Routes.CHAT);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerPos}>
        <View style={styles.header}>
          <View style={styles.content}>
            <View style={styles.headerTextPos}>
              <View style={styles.textBlock}>
                <Text style={styles.headerText}>Chats</Text>
              </View>
            </View>
            <View>
              <View style={styles.btnBlock}>
                <View style={styles.btnBlockPos}>
                  <TouchableOpacity style={styles.addChat}>
                    <Image style={styles.headerBtn} source={ASSETS.addChat} />
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity style={styles.hamburger}>
                      <Image
                        style={styles.headerBtn}
                        source={ASSETS.hamburger}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.storyContainer}>
        <ScrollView horizontal={true}>
          <View style={styles.storyPos}>
            <TouchableOpacity style={styles.story}>
              <View>
                <View style={styles.userStory}>
                  <View style={styles.avatarPos}>
                    <View style={styles.userAvatarPos}>
                      <Text style={styles.userAvatar}>+</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.namePos}>
                  <Text style={styles.storyName}>Your Story</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.story}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0, 0.7, 0.9]}
                colors={['#D2D5F9', '#2C37E1']}
                style={styles.usersStory}>
                <View style={styles.avatarPos}>
                  <View style={styles.userAvatarPos}>
                    <Image
                      style={styles.usersAvatar}
                      source={ASSETS.president}
                    />
                  </View>
                </View>
              </LinearGradient>
              <View style={styles.namePos}>
                <Text style={styles.storyName}>Zelenskiy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.story}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0, 0.7]}
                colors={['#D2D5F9', '#2C37E1']}
                style={styles.usersStory}>
                <View style={styles.avatarPos}>
                  <View style={styles.userAvatarPos}>
                    <Image style={styles.usersAvatar} source={ASSETS.women1} />
                  </View>
                </View>
              </LinearGradient>
              <View style={styles.namePos}>
                <Text style={styles.storyName}>Natalia</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.borderPos}>
        <View style={styles.border}></View>
      </View>
      <View style={styles.contactList}>
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="Search" />
          <View style={styles.iconPos}>
            <Image style={styles.inputIcon} source={ASSETS.search} />
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.user} onPress={handleClickToChat}>
            <Image style={styles.avatar} source={ASSETS.women1} />
            <View style={styles.statusPos}>
              <View style={styles.status}></View>
            </View>
            <View style={styles.userData}>
              <View style={styles.chatNameDate}>
                <Text style={styles.userName}>Natalia</Text>
                <Text style={styles.messageDate}>Today</Text>
              </View>
              <View style={styles.chatMessageCount}>
                <Text style={styles.lastMessage}>
                  Dress looking pretty good! Thank you).
                </Text>
                <View style={styles.messageCountPos}>
                  <Text style={styles.messageCount}>1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.user} onPress={handleClickToChat}>
            <Image style={styles.avatar} source={ASSETS.president} />
            <View style={styles.userData}>
              <View style={styles.chatNameDate}>
                <Text style={styles.userName}>Zelenskiy</Text>
                <Text style={styles.messageDate}>11.11</Text>
              </View>
              <View style={styles.chatMessageCount}>
                <Text style={styles.lastMessage}>
                  Watermalone was retuned!. Be brave!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.user} onPress={handleClickToChat}>
            <Image style={styles.avatar} source={ASSETS.blob} />
            <View style={styles.statusPos}>
              <View style={styles.status}></View>
            </View>
            <View style={styles.userData}>
              <View style={styles.chatNameDate}>
                <Text style={styles.userName}>Blob</Text>
                <Text style={styles.messageDate}>Everyday</Text>
              </View>
              <View style={styles.chatMessageCount}>
                <Text style={styles.lastMessage}>You so pathetic!😈</Text>
                <View style={styles.messageCountPos}>
                  <Text style={styles.messageCount}>14</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  headerPos: {
    width: '100%',
    height: 90,
  },
  header: {
    paddingTop: 47,
    paddingBottom: 13,
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    height: 30,
    width: 327,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textBlock: {
    width: 263,
    height: '100%',
  },
  headerTextPos: {
    paddingTop: 3,
  },
  headerText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
  headerBtn: {
    height: 19,
    width: 19,
  },
  btnBlockPos: {
    width: 56,
    height: 24,

    flexDirection: 'row',
  },
  btnBlock: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
  },
  addChat: {paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3},
  hamburger: {paddingTop: 2, paddingBottom: 2, paddingLeft: 8},
  storyContainer: {
    width: '100%',
    height: 104,
  },
  storyPos: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
  },
  story: {
    backgroundColor: '#fff',
    paddingRight: 16,
  },
  userStory: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: '#ADB5BD',
    borderRadius: 16,
  },
  usersStory: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
  },
  userAvatarPos: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#F7F7FC',
    borderRadius: 16,
  },
  avatarPos: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 2,
  },
  userAvatar: {
    fontSize: 21,
    color: '#000',
  },
  usersAvatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#000',
    borderWidth: 3,
    borderColor: '#fff',
  },
  namePos: {
    paddingTop: 4,
    alignItems: 'center',
  },
  storyName: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 10,
  },
  border: {
    width: 400,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  borderPos: {
    alignItems: 'center',
  },
  contactList: {
    width: '100%',
    height: 284,
  },
  textInput: {
    width: 327,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    paddingLeft: 32,
    fontFamily: 'Mulish',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  inputIcon: {
    width: 16,
    height: 16,
    opacity: 0.3,
  },
  iconPos: {
    position: 'absolute',
    paddingRight: 293,
  },
  user: {
    width: 327,
    height: 68,
    paddingLeft: 33,
    flexDirection: 'row',
  },
  userName: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
  },
  messageDate: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 10,
    color: '#ADB5BD',
  },
  lastMessage: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 12,
    paddingTop: 6,
    color: '#ADB5BD',
  },
  messageCountPos: {
    width: 22,
    height: 20,
    borderRadius: 40,
    backgroundColor: '#D2D5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageCount: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 10,
  },

  chatNameDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatMessageCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  userData: {
    paddingLeft: 12,
    width: 259,
    height: 56,
  },
  status: {
    backgroundColor: '#2CC069',
    width: 14,
    height: 14,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statusPos: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 73,
  },
});
