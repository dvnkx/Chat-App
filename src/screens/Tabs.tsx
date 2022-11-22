import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats} from './Chats';
import {Contacts} from './Contacts';
import {More} from './More';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Contacts">
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => {
            if (route.name === 'Contacts') {
              return focused ? (
                <Icon name="people" size={size} color={color} />
              ) : (
                <Icon name="people-outline" size={size} color={color} />
              );
            }
          },
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => {
            if (route.name === 'Chats') {
              return focused ? (
                <Icon name="chatbubble" size={size} color={color} />
              ) : (
                <Icon name="chatbubble-outline" size={size} color={color} />
              );
            }
          },
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => {
            if (route.name === 'More') {
              return focused ? (
                <Icon name="options" size={size} color={color} />
              ) : (
                <Icon name="options-outline" size={size} color={color} />
              );
            }
          },
          tabBarShowLabel: false,
        })}
      />
    </Tab.Navigator>
  );
};
