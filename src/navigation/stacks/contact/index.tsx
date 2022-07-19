import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { ContactRoute, ProfileRoute } from "../../../constants/Route";
import { Contact } from "../../../screens/contacts";

const Stack = createNativeStackNavigator();

const ContactStack = () =>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={ContactRoute.All_Contacts} component={Contact} />
        </Stack.Navigator>
    )

}
export default ContactStack;