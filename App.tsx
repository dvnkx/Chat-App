import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Walkthrough} from './src/screens/Walkthrough';
import {SignIn} from './src/screens/SignIn';
import {SignUp} from './src/screens/SignUp';
import {Provider} from 'react-redux';
import {setStore} from './src/store/store';
import './src/firebase/firebase';
import {ShavronLeft} from './src/Components/ChavronLeft';
import {ProfileAccount} from './src/screens/ProfileAccount';
import {Tabs} from './src/screens/Tabs';
import {Chat} from './src/screens/Chat';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './src/firebase/firebase';
import {
  uploadFStatusToServer,
  uploadTStatusToServer,
} from './src/Components/uploadData';

type RootStackParamList = {
  Walkthrough: {name: string} | undefined;
  SignIn: {name: string} | undefined;
  SignUp: {name: string} | undefined;
  Contacts: {name: string} | undefined;
  ProfileAccount: {name: string} | undefined;
  More: {name: string} | undefined;
  Chats: {name: string} | undefined;
  Tabs: {name?: string} | undefined;
  Chat: {name?: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  const store = setStore();

  const [authState, setAuthState] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, data => {
      if (data) {
        setAuthState(true);
        uploadTStatusToServer();
      } else {
        setAuthState(false);
      }
    });
  }, []);

  const authSettings = {
    headerBackTitleVisible: false,
    headerTitle: '',
    headerShadowVisible: false,
    headerBackImage: () => <ShavronLeft />,
  };

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
            options={authSettings}
          />
          <RootStack.Screen
            name="SignUp"
            component={SignUp}
            options={authSettings}
          />
          {authState ? (
            <RootStack.Screen
              name="ProfileAccount"
              component={ProfileAccount}
              options={{
                headerShown: false,
              }}
            />
          ) : null}
          {authState ? (
            <RootStack.Screen
              name="Tabs"
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
          ) : null}
          {authState ? (
            <RootStack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerShown: false,
              }}
            />
          ) : null}
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
