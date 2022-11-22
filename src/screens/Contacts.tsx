import {ASSETS} from '../utils/assets';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {UIContacts} from '../Components/UIContacts';
import {auth} from '../firebase/firebase';
import {UISearchInput} from '../Components/UISearchInput';

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
        <UISearchInput placeholder="Search" />
        <ScrollView style={styles.scroll}>
          <UIContacts
            avatar={ASSETS.women1}
            userName={'Natalia'}
            status={'Online'}
            onlineStatus={true}
          />
          <UIContacts
            avatar={ASSETS.male}
            userName={'Hipster'}
            status={'Online'}
            onlineStatus={true}
          />
          <UIContacts
            avatar={ASSETS.guy}
            userName={'Cool Man'}
            status={'Last seen yesterday'}
            onlineStatus={false}
          />
          <UIContacts
            avatar={ASSETS.women2}
            userName={'Alexandra'}
            status={'Last seen 3 hours ago'}
            onlineStatus={false}
          />
          <UIContacts
            avatar={ASSETS.defaultAvatarImage}
            userName={'Unknown'}
            status={'Online'}
            onlineStatus={true}
          />
          <UIContacts
            avatar={ASSETS.defaultAvatarImage}
            userName={'Jacky'}
            status={'Last seen 1 week ago'}
            onlineStatus={false}
          />
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
});
