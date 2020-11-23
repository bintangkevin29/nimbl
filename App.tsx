import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import {GLOBAL_STYLE_VARIABLES} from './constants';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: GLOBAL_STYLE_VARIABLES.primaryColor,
    background: GLOBAL_STYLE_VARIABLES.primaryColor,
  },
};

const MainScreens: React.FC = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>
);

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        mode="modal"
        initialRouteName="MainScreen"
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          headerStyle: {backgroundColor: GLOBAL_STYLE_VARIABLES.primaryColor},
        }}>
        <RootStack.Screen name="MainScreen" component={MainScreens} />
        <RootStack.Screen
          name="Landing"
          component={LandingScreen}
          options={{animationEnabled: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
