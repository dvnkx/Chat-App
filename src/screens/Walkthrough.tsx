import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {NavigationProps} from '../..App';
import {ASSETS} from '../utils/assets';
import {Routes} from '../utils/routes';

// TODO: css fix (like at figma copy)

export const Walkthrough = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClickNext = useCallback(() => {
    navigation.navigate(Routes.login);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image style={styles.startImg} source={ASSETS.walkthroughImage} />
        </View>
        <Text style={styles.text}>
          Connect easily with your family and friends over countries
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.termsBtn}>
          <Text style={{fontFamily: 'Mulish'}}>Terms & Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={handleClickNext}>
          <Text style={{fontFamily: 'Mulish'}}>Start Messaging</Text>
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
    color: '#0F1828',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Mulish',
  },
  termsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
  },
  startBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 327,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#91b3fa',
  },
  buttons: {
    flex: 2,
    paddingBottom: 30,
  },
  startImg: {
    width: '100%',
    height: 300,
  },
});
