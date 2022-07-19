import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Heading, Icon } from "../../components/Static";
import fontSize from "../../constants/FontSize";

const Schedule = (props:any) => {
    const {colors} = useTheme()
    const date = new Date();
    const fullDate = date.toDateString();
    const styles = StyleSheet.create({
        container: {
            backgroundColor:colors.background,
        },
        heading: {
            alignSelf:'center',
            marginVertical:Dimensions.get('window').height/20,
            flexDirection:'row',
            justifyContent:'space-between',
            width:Dimensions.get('window').width*0.7,
        }
    })
    return(
        <ScrollView style={styles.container} >
            <View style={styles.heading} >
                    {/* <Icon name='Video' size={30} color={colors.text} /> */}
                     <Heading content='UpComing Meetings' size={fontSize.heading} weight='600' />          
            </View>            
            <DateInfoCard fullDate={fullDate} />
            <MeetingInfoCard navigation={props.navigation} title="Office Meeting" endTime="04:40PM" startTime="02:30PM" meetingId="7890980" />
            <MeetingInfoCard navigation={props.navigation} title="Office Meeting" endTime="04:40PM" startTime="02:30PM" meetingId="7890980"/>
            <MeetingInfoCard navigation={props.navigation} title="Fun Meeting" endTime="04:40PM" startTime="02:30PM" meetingId="88390480"/>
            {/* <MeetingInfoCard/> */}
            <DateInfoCard fullDate={fullDate} />
            <MeetingInfoCard title="Office Meeting" endTime="04:40PM" startTime="02:30PM" meetingId="7890980"/>
            {/* <MeetingInfoCard/> */}
        </ScrollView>
    )
}
export default Schedule;
 type DateCardProps ={
        fullDate:string

 }


const DateInfoCard = (fullDate:DateCardProps)=>{
   
  const styles = StyleSheet.create({
        container:{
            alignSelf:'center',
            backgroundColor:'#aaa',
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:20,
        }
    })
    return(
        <View style={styles.container}>
            <Heading content={`${fullDate}`} size={fontSize.text} weight='600' />
        </View>
    )
}

type CardProps = {
    title: string;
    startTime: string;
    endTime: string;
    meetingId: string;
    navigation?:any
}
const MeetingInfoCard:React.FC<CardProps> = ({title, startTime, endTime, meetingId, navigation}:CardProps):React.ReactElement=>{
     const {colors}= useTheme();
    const styles= StyleSheet.create({
        container:{
            backgroundColor:colors.primary,
            width:Dimensions.get('window').width*0.85,
            borderRadius:8,
            justifyContent:'space-between',
            paddingVertical:13,
            marginVertical:20,
            alignSelf:'center',
            paddingHorizontal:20,
        },
        button:{
            backgroundColor:'#fff',
            height:30,
            width:100,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:10
        },
        icon:{
            alignSelf:'flex-end',
        },
        endContainer:{
            alignSelf:'flex-end',
        }
    })
    return(
         <View style={styles.container} >
            <Heading content={title} size={fontSize.subHeading} weight='600' />
            <Heading content={`${startTime}-${endTime}`} size={fontSize.text} weight='600' />
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('VideoStack')} >
                <Heading content='Join' size={fontSize.text} weight='600' color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.endContainer} >
            <Heading content={meetingId} size={fontSize.text} weight='600'/>
            </View>
         </View>
     )
}