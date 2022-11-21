import {ASSETS} from '../utils/assets';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
        <TouchableOpacity>
          <Image style={styles.headerBtn} source={ASSETS.plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="Search" />
          <View style={styles.iconPos}>
            <Image style={styles.inputIcon} source={ASSETS.search} />
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.women1} />
            <View style={styles.statusPos}>
              <View style={styles.status}></View>
            </View>
            <View style={styles.userData}>
              <Text style={styles.userName}>Natalia</Text>
              <Text style={styles.userStatus}>Online</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.male} />
            <View style={styles.statusPos}>
              <View style={styles.status}></View>
            </View>
            <View style={styles.userData}>
              <Text style={styles.userName}>Hipstes</Text>
              <Text style={styles.userStatus}>Online</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.guy} />
            <View style={styles.userData}>
              <Text style={styles.userName}>Cool Man</Text>
              <Text style={styles.userStatus}>Last seen yesterday</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.women2} />
            <View style={styles.userData}>
              <Text style={styles.userName}>Alexandra</Text>
              <Text style={styles.userStatus}>Last seen 3 hours ago</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.avatar} />
            <View style={styles.statusPos}>
              <View style={styles.status}></View>
            </View>
            <View style={styles.userData}>
              <Text style={styles.userName}>Unknown</Text>
              <Text style={styles.userStatus}>Online</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Image style={styles.avatar} source={ASSETS.avatar} />
            <View style={styles.userData}>
              <Text style={styles.userName}>Jacky</Text>
              <Text style={styles.userStatus}>Last seen 1 week ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 57,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 13,
  },
  headerText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
  headerBtn: {
    width: 14,
    height: 14,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingTop: 16,
  },
  user: {
    flexDirection: 'row',
    width: 327,
    height: 68,
  },
  userName: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
  },
  userStatus: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 12,
    paddingTop: 2,
    color: '#ADB5BD',
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
  },
  inputIcon: {
    width: 16,
    height: 16,
    opacity: 0.3,
  },
  iconPos: {
    position: 'absolute',
    paddingLeft: 8,
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
    paddingLeft: 40,
  },
});
