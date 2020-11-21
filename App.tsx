import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import {GLOBAL_STYLE_VARIABLES} from './constants';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: GLOBAL_STYLE_VARIABLES.primaryColor,
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={LandingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
