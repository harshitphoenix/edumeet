import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/home';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import icons from '../../assets/icons';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ScheduleStack from '../stacks/schedule';
import ProfileStack from '../stacks/profile';
import ContactStack from '../stacks/contact';
import { TabRoutes } from '../../constants/Route';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const {colors } = useTheme()

    const styles = StyleSheet.create({
        tab:{
            backgroundColor:colors.primary,
            borderTopEndRadius:25,
            borderTopStartRadius:25,
            height:90,
        },
        label:{
            marginBottom:20,
            fontSize:15,
        }
    })
    const iconProvider = (name:string, focused: boolean) => {
        return (
            <FontAwesomeIcon icon={icons[name]} size={30} color={focused ? '#fff' : '#000'} />
        )
    }
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.tab,
            headerShown: false,
        }} > 
            <Tab.Screen name={TabRoutes.Home_Stack} component={HomeStack} options={{
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                    tabBarLabelStyle:styles.label,
                    tabBarIcon: props => iconProvider('Home',props.focused)
                }}/>
            <Tab.Screen name={TabRoutes.Profile_Stack} component={ProfileStack} options={{
                    tabBarLabel: 'Profile',
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                    tabBarLabelStyle:styles.label,
                    tabBarIcon: props => iconProvider('Settings',props.focused)
                }}/>
            <Tab.Screen name={TabRoutes.Schedule_Stack} component={ScheduleStack} options={{
                    tabBarLabel: 'Schedule',
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                    tabBarLabelStyle:styles.label,
                    tabBarIcon: props => iconProvider('Schedule',props.focused)
                }}/>
            <Tab.Screen name={TabRoutes.Contact_Stack} component={ContactStack} options={{
                    tabBarLabel: 'Contacts',
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                    tabBarLabelStyle:styles.label,
                    tabBarIcon: props => iconProvider('History',props.focused)
                }}/>
        </Tab.Navigator>
    )
}

export default BottomTab;
                  