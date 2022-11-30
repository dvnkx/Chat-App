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
import {ShavronLeft} from './src/сomponents/ChavronLeft';
import {ProfileAccount} from './src/screens/ProfileAccount';
import {Tabs} from './src/screens/Tabs';
import {Chat} from './src/screens/Chat';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './src/firebase/firebase';
import {
  uploadTStatusToServer,
  uploadUserOnlineStatus,
} from './src/services/userManagement';
import {setUser, userSlice} from './src/store/slices/userSlice';
import {Routes} from './src/utils/routes';
import {View} from 'react-native';

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
    onAuthStateChanged(auth, userData => {
      if (userData) {
        store.dispatch(
          userSlice.actions.setUser({
            id: userData.uid,
            email: userData.email,
          }),
        );
        setAuthState(true);
        uploadUserOnlineStatus(userData.uid, true);
      } else {
        const prevUserUid = store.getState().user.id;
        store.dispatch(userSlice.actions.logOut());
        if (prevUserUid) {
          uploadUserOnlineStatus(prevUserUid, false);
        } else {
          console.error('Impossible to set user status offline');
        }
        setAuthState(false);
      }
    });
  }, []); //eslint-disable-line

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
            name={Routes.WALKTHROUGH}
            component={Walkthrough}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name={Routes.SIGN_IN}
            component={SignIn}
            options={authSettings}
          />
          <RootStack.Screen
            // TODO: replace with Routes
            name="SignUp"
            component={SignUp}
            options={authSettings}
          />
          {authState && (
            <RootStack.Group>
              <RootStack.Screen
                // TODO: replace with Routes
                name="ProfileAccount"
                component={ProfileAccount}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                // TODO: replace with Routes
                name="Tabs"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                // TODO: replace with Routes
                name="Chat"
                component={Chat}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="kek"
                component={() => <View style={{backgroundColor: 'red'}} />}
                options={{
                  presentation: 'modal',
                  cardStyle: {
                    marginTop: 75,
                  },
                }}
              />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
