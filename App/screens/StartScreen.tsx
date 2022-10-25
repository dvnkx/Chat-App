import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image
            style={styles.startImg}
            source={require('../pictures/startpage.jpg')}
          />
        </View>
        <Text style={styles.text}>
          Connect easily with your family and friends over countries
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.termsBtn}>
          <Text>Terms & Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => {
            navigation.navigate('Number');
          }}>
          <Text>Start Messaging</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 3,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  termsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 35,
    marginBottom: 10,
  },
  startBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#91b3fa',
  },
  buttons: {
    flex: 2,
  },
  startImg: {
    width: '100%',
    height: 300,
  },
});
