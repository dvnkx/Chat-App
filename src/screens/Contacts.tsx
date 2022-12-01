import {ASSETS} from '../utils/assets';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UIContacts} from '../сomponents/UIContacts';
import {collection, DocumentData, getDocs} from 'firebase/firestore';
import {UISearchInput} from '../сomponents/UISearchInput';
import {useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';
import {auth, db} from '../firebase/firebase';
import {useNavigation} from '@react-navigation/native';

export const Contacts = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState<DocumentData[]>([]);

  const debouncedResult = useMemo(() => {
    return debounce(setSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResult.cancel();
    };
  });

  // let listToDisplay = contacts;
  // if (search !== '') {
  //   listToDisplay = contacts.filter(contact => {
  //     return contact.includes(search);
  //   });
  // }

  useEffect(() => {
    const getUsers = async () => {
      const data: DocumentData[] = [];
      const qSnapshot = await getDocs(collection(db, 'Users'));
      qSnapshot.forEach(doc => {
        if (doc === null) {
          Alert.alert('Congratulations, you first at my app');
        } else {
          data.push(doc.data());
        }
      });
      setContacts(data);
    };
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('kek');
          }}>
          <Image style={styles.headerBtn} source={ASSETS.plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <UISearchInput
            placeholder="Search"
            keyboardType="email-address"
            value={search}
            onChange={debouncedResult}
            autoCorrect={false}
          />
        </View>
        <ScrollView style={styles.scroll}>
          {contacts.map(({name, onlineStatus, email}) => {
            if (email === auth.currentUser!.email) {
              return null;
            } else {
              return (
                <UIContacts
                  key={Math.floor(Math.random() * 1000)}
                  userName={name}
                  onlineStatus={onlineStatus}
                  status={onlineStatus === true ? 'Online' : 'Offline'}
                  avatar={ASSETS.defaultAvatarImage}
                />
              );
            }
          })}
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
});
