import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats} from './Chats';
import {Contacts} from './Contacts';
import {More} from './More';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Contacts">
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
