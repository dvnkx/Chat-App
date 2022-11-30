import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats} from './Chats';
import {Contacts} from './Contacts';
import {More} from './More';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCallback} from 'react';

const Tab = createBottomTabNavigator();

interface IGetIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export const Tabs = () => {
  const getIcon = useCallback(
    (iconName: string) =>
      ({focused, color, size}: IGetIconProps) =>
        focused ? (
          <Icon name={iconName} size={size} color={color} />
        ) : (
          <Icon name={`${iconName}-outline`} size={size} color={color} />
        ),
    [],
  );

  const getScreenOptions = useCallback(
    (iconName: string) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: getIcon(iconName),
    }),
    [getIcon],
  );

  return (
    <Tab.Navigator initialRouteName="Contacts">
      <Tab.Screen
        // TODO: replace with Routes
        name="Contacts"
        component={Contacts}
        options={getScreenOptions('people')}
      />
      <Tab.Screen
        // TODO: replace with Routes
        name="Chats"
        component={Chats}
        options={getScreenOptions('chatbubble')}
      />
      <Tab.Screen
        // TODO: replace with Routes
        name="More"
        component={More}
        options={getScreenOptions('options')}
      />
    </Tab.Navigator>
  );
};
