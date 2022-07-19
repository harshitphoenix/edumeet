import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Heading, OutlinedButton } from '../../components/Static';

const Main = () => {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        image:{
            marginVertical:10,
        },
        topContainer:{
            alignSelf:'center',
            marginTop:40,
        },
        bottomContainer:{
            marginVertical:20,
            alignItems:'center',
            height:120,
            justifyContent:'space-between',
        },
        container:{
            backgroundColor:colors.background,
        }
    })
    return(
        <ScrollView style={styles.container} >
            <View style={styles.topContainer} >
            <Heading content='Lets Connect' color={colors.primary} size={30} weight='600' />
            </View>
            
            <Image style={styles.image} source={require('../../assets/images/Home.png')} />
            <View style={styles.bottomContainer}>
                <Button title='New Meeting' width={340} />
                <OutlinedButton title='Join a Meeting' width={340}   />
            </View>
        </ScrollView>
    )
}
export default Main;