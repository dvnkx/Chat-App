import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Walkthrough} from './src/screens/Walkthrough';
import {SignIn} from './src/screens/SignIn';
import {SignUp} from './src/screens/SignUp';
import {Contacts} from './src/screens/Contacts';
import {Provider} from 'react-redux';
import {setStore} from './src/store/store';
import './src/firebase/firebase';
import {ShavronLeft} from './src/components/ChavronLeft';

type RootStackParamList = {
  Walkthrough: {name: string};
  SignIn: {name: string} | undefined;
  SignUp: {name: string} | undefined;
  Contacts: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  const store = setStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
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
            options={{
              headerBackTitleVisible: false,
              headerTitle: '',
              headerShadowVisible: false,
              headerBackImage: () => <ShavronLeft />,
            }}
          />
          <RootStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerBackTitleVisible: false,
              headerTitle: '',
              headerShadowVisible: false,
              headerBackImage: () => <ShavronLeft />,
            }}
          />
          <RootStack.Screen name="Contacts" component={Contacts} />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
