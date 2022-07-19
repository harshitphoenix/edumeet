import { useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { InputText } from "../../components/Input";
import { Button, Heading, Icon } from "../../components/Static";
import BackButton from "../../components/Static/BackButton";
import fontSize from "../../constants/FontSize";

type Props ={
    navigation:any
}

const EditProfile: React.FC<Props> = ({navigation}:Props)=> {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        container:{
           paddingHorizontal:20,
           paddingVertical:20,
        //    backgroundColor: colors.primary  
        },
        buttonContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:300,
            marginTop:20,
            alignSelf:'center',
        },
        inputContainer:{
            marginVertical:20,
            alignSelf:'center',
        },
        header:{
            marginTop:20,
            alignSelf:'center',
        },
        imagePicker:{
            marginVertical:30,
            alignSelf:'center',
            borderWidth:2,
            borderColor: colors.text,
            borderRadius:100,
            width:150,
            height:150,
            justifyContent:'center',
            alignItems:'center',
        }
    })
    return(
        <ScrollView style={styles.container}>
            <BackButton navigation={navigation}/>
            <View  style={styles.header}>
                <Heading content="Edit Profile" size={fontSize.subHeading} weight="600" />
            </View>

            <View style={styles.inputContainer} >
                <View style={styles.imagePicker}>
                     <Icon name="User" size={100} color={colors.text} />
                </View>
               
                <InputText  placeholder="First Name" label="First Name" width={300} />
                <InputText  placeholder="Last Name" label="Last Name" width={300} />
            </View>

            <View style={styles.buttonContainer} >
                <Button title="Cancel" color="red" width={100} onPress={()=>navigation.goBack()} />
                <Button title="Save" color="green" width={100} onPress={()=>navigation.navigate('ChangePassword')} />
            </View>
        </ScrollView>
    )
}

export default EditProfile;