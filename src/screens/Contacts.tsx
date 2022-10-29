import {StyleSheet, Text, View} from 'react-native';

export const Contacts = () => {
  return (
    <View style={styles.container}>
      <Text>Constacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
