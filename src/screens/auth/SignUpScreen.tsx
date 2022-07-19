import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {InputText} from '../../components/Input';
import {Heading, Button} from '../../components/Static';

const SignUp = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor:colors.background,

    },
    inputContainer: {
      alignSelf: 'center',
    },
    signUpButton: {
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
    },
    signUpHeading: {
      alignSelf: 'center',
      alignItems:'center',
      marginBottom:35,
      backgroundColor: colors.primary,
      width: Dimensions.get('window').width,
      height: 150,
      paddingTop: 60,
      borderBottomEndRadius:30,
      borderBottomStartRadius:30
    },
    headerImage:{
        height: Dimensions.get('window').height*.2,
        width: Dimensions.get('window').width*.8,
        alignSelf: 'center',
    }
  });

  return (
    <ScrollView style={styles.container}> 

     <View >
        <View style={styles.signUpHeading}>
          <Heading content="SignUp" size={50} />
        </View>
        <View style={styles.inputContainer}>
          <InputText label="Email"  placeholder="Email" />
          <InputText
            label="First Name"
            placeholder="First Name"
          />
          <InputText
            label="Last Name"
            placeholder="Last Name"
          />
          <InputText
            secureTextEntry={true}
            label="Password"
            placeholder="Password"
          />
          <InputText
            secureTextEntry={true}
            label="Confirm Password"
            placeholder="Re-Type Password"
          />
        </View>
        <View style={styles.signUpButton}>
          <Button title="Sign Up" width={270} />
        </View>
      </View>
       {/* <Image
        style={styles.headerImage}
        source={require('../../assets/images/signup-5.png')}
      /> */}
      
    </ScrollView>
  );
};

export default SignUp;
