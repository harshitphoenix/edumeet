import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { LandingScreen, SignUp, SignIn } from "../../../screens/auth";
const Stack = createNativeStackNavigator();

const AuthStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )

}
export default AuthStack;