import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { Schedule } from "../../../screens/schedule";
const Stack = createNativeStackNavigator();

const ScheduleStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Schedule" component={Schedule} />
        </Stack.Navigator>
    )

}
export default ScheduleStack;