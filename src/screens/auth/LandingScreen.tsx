import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {Heading, OutlinedButton, Button} from '../../components/Static';

const LandingScreen = (props: any) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    topContainer: {
      backgroundColor: colors.primary,
      height: Dimensions.get('window').height * 0.5,
      borderBottomEndRadius: 55,
      borderBottomStartRadius: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    JoinMeetContainer: {
      alignSelf: 'center',
      // borderWidth:3,
      // borderColor:'#000',
      marginTop: Dimensions.get('window').height * 0.1,
    },
    bottomContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      // borderWidth:3,
      // borderColor:'#000',
      width: 345,
      justifyContent: 'space-between',
      marginTop: Dimensions.get('window').height * 0.04,
    },
  });
  const handleJoinMeeting = () => {
    props.navigation.navigate('BottomTab');
  };
  const handleSignUp=()=>{
    props.navigation.navigate('SignUp');
  }
  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <Heading content="edumeet" color="#fff" size={70} />
        <Heading content="Connect with Peers" color="#fff" size={17} />
      </View>
      <View style={styles.JoinMeetContainer}>
        {/* <Button
          title="Join a meeting"
          borderWidth={1}
          width={340}
          onPress={handleJoinMeeting}
        /> */}
      </View>

      <View style={styles.bottomContainer}>
        <Button title="Login" borderWidth={1} width={165} onPress={()=> props.navigation.navigate('SignIn')} />
        <OutlinedButton
          title="Sign Up"
          borderWidth={1}
          width={165}
          onPress={handleSignUp}
        />
      </View>
    </ScrollView>
  );
};

export default LandingScreen;
