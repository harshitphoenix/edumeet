import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import{CustomDarkTheme, CustomLightTheme}from '../theme';

import { SafeAreaProvider} from 'react-native-safe-area-context';
// import Light
import AuthStack from './stacks/auth';
import BottomTab from './tabs';
import VideoStack from './stacks/video';
import { RootRoutes } from '../constants/Route';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={scheme === 'dark'? CustomDarkTheme: CustomLightTheme}
      >
        <Stack.Navigator
        initialRouteName={RootRoutes.Tab_Stack}
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={RootRoutes.Auth_Stack} component={AuthStack} />
            <Stack.Screen name={RootRoutes.Tab_Stack} component={BottomTab} />
            <Stack.Screen name={RootRoutes.Video_Call_Stack} component={VideoStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
      
  );
};

export default RootNavigator;