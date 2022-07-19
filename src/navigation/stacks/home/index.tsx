import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { Main } from "../../../screens/home";
const Stack = createNativeStackNavigator();

const HomeStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    )

}
export default HomeStack;