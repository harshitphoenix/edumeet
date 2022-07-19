import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
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
    },
    headerImage:{
        height: Dimensions.get('window').height*.4,
        width: Dimensions.get('window').width,
    }
  });

  return (
    <ScrollView style={styles.container}> 
        <Image
        style={styles.headerImage}
        source={require('../../assets/images/signup-2.png')}
      />
     <View >
        <View style={styles.signUpHeading}>
          <Heading content="SignIn" size={50} />
        </View>
        <View style={styles.inputContainer}>
          <InputText label="Email"  placeholder="Email" />
    
          <InputText
            secureTextEntry={true}
            label="Password"
            placeholder="Password"
          />
        
        </View>
        <View style={styles.signUpButton}>
          <Button title="Sign Up" width={270} />
        </View>
      </View>
      
    </ScrollView>
  );
};

export default SignUp;
