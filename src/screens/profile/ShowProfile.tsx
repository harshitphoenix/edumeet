import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions,ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Heading, Icon } from "../../components/Static";
import fontSize from "../../constants/FontSize";
import { ProfileRoute } from "../../constants/Route";

type Props={
    navigation:any
}

const Profile: React.FC<Props> = ({navigation}:Props): JSX.Element => {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        contianer:{
          backgroundColor: colors.background,
        },
        image:{
            width:170,
            height:170,
            borderRadius:85,
            borderWidth:2,
            borderColor:colors.primary,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            marginTop:30,
        },
        name:{
            alignSelf:'center',
            paddingBottom:30,
            borderBottomColor:colors.primary,
            borderBottomWidth:2,
            marginVertical:Dimensions.get('window').height/20,
            width:Dimensions.get('window').width*0.8,
            alignItems:'center',
        }
    })
    return(
        <ScrollView>
            <View style={styles.image} >
                <Icon name="User" size={100} color='#fff' />
            </View>
            <View style={styles.name}>
            <Heading content="Profile" size={fontSize.subHeading} weight="600" />
            </View>
              <NavigationCard title='Profile' nextScreen={ProfileRoute.Edit_Profile} navigation={navigation} />
              <NavigationCard title='Rate Us'/>
              <NavigationCard title='Share this App' />
              <NavigationCard  title='Change Password' nextScreen={ProfileRoute.Change_Password} navigation={navigation}/>
              <NavigationCard  title='Logout'/>
        </ScrollView>
    )
}

export default Profile;
 type NavProp = {
     title:string;
     nextScreen?:string;
     navigation?:any;
 }

const NavigationCard = ({title, nextScreen, navigation}:NavProp)=>{
    const {colors} = useTheme();
    const iconMap:any = {
        'Profile':'User',
        'Rate Us':'Star',
        'Share this App':'Share',
        'Logout':'Logout',
        'Change Password': 'Key'
    }
    const styles = StyleSheet.create({
        container:{
            backgroundColor:colors.primary,
            flexDirection:'row',
            justifyContent: 'space-between',
            width:Dimensions.get('window').width*0.8,
            height:50,
            alignSelf:'center',
            borderRadius:10,
            marginVertical:10,
            elevation:5,
            alignItems:'center',
            paddingLeft:20,
        },
        startContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
            width:150
        },
        title:{
            marginLeft:15
        }
    })
    return(
        <TouchableOpacity  style={styles.container} activeOpacity={0.8} onPressOut={()=> navigation.navigate(nextScreen)} >
            <View style={styles.startContainer} >
                <Icon name={iconMap[title]} size={25} color="#fff" />
                <View style={styles.title} >
                    <Heading content={title} size={fontSize.text} weight="600" />
                </View>

                
            </View>
                 <Icon name="RightTriangle" size={25} color={colors.text} />
        </TouchableOpacity>
    )
}