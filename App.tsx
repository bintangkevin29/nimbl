import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import {GLOBAL_STYLE_VARIABLES} from './constants';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: GLOBAL_STYLE_VARIABLES.primaryColor,
    background: GLOBAL_STYLE_VARIABLES.primaryColor,
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {backgroundColor: GLOBAL_STYLE_VARIABLES.primaryColor},
        }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
