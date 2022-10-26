import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Walkthrough} from './src/screens/Walkthrough';
import {SignIn} from './src/screens/SignIn';

type RootStackParamList = {
  Walkthrough: {name: string};
  SignIn: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const App = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerBackTitleVisible: false, headerTitle: ''}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
