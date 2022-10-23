import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Start = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
  },
  content: {
    flexGrow: 3,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  termsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    borderRadius: 35,
    marginBottom: 10,
  },
  startBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#398ad7',
  },
  buttons: {
    flex: 2,
  },
});
