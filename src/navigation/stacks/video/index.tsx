import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { VideoCall } from "../../../screens/video";
const Stack = createNativeStackNavigator();

const VideoStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // headerTitle
        }}>
            <Stack.Screen name="Schedule" component={VideoCall} />
        </Stack.Navigator>
    )

}
export default VideoStack;