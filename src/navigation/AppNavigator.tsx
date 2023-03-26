import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import HomeScreen from '../screens/Home';
import {RootStackParamList} from './types';
import PuzzleScreen from '../screens/Puzzle';
import LeadersBoardScreen from '../screens/LeadersBoard';
import Screen from '../components/Screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Screen>
        <Stack.Navigator>
          <Stack.Screen name={Routes.HOME} component={HomeScreen} />
          <Stack.Screen name={Routes.PUZZLE} component={PuzzleScreen} />
          <Stack.Screen
            name={Routes.LEADERS_BOARD}
            component={LeadersBoardScreen}
          />
        </Stack.Navigator>
      </Screen>
    </NavigationContainer>
  );
};

export default AppNavigator;
