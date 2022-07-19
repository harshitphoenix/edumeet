import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { ShowProfile, EditProfile, ChangePassword } from "../../../screens/profile";
const Stack = createNativeStackNavigator();
import { ProfileRoute } from "../../../constants/Route";
const ProfileStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={ProfileRoute.Show_Profile} component={ShowProfile} />
            <Stack.Screen name={ProfileRoute.Edit_Profile} component={EditProfile} />
            <Stack.Screen name={ProfileRoute.Change_Password} component={ChangePassword} />
        </Stack.Navigator>
    )

}
export default ProfileStack;