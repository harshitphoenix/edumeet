import React from 'react';
import {ScrollView, StyleSheet, View, Animated, Text, Dimensions} from 'react-native';
import {InputText} from '../../components/Input';
import DropDown from '../../components/Input/DropDown';
import {Button, Heading} from '../../components/Static';
import BackButton from '../../components/Static/BackButton';
import fontSize from '../../constants/FontSize';

type Props = {
  navigation?: any;
};

const ChangePassword: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const [isOtpSent, setOtpSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [right, setRight] = React.useState(new Animated.Value(Dimensions.get('window').width*.15));
  // const [radius, setRadius] = React.useState(new Animated.Value(0))

  const emailList =[
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
  ]

  const sendOTPToEmail = () => {
    setTimeout(() => {
      setOtpSent(true)
      rightToLeft();
    }, 3000);
  };
  // const leftToRight = () => {
  //   Animated.parallel([
  //     Animated.timing(radius, {
  //       toValue: 200,
  //       duration: 1000,
  //       useNativeDriver: false,
  //     }),
  //     Animated.timing(right, {
  //       toValue: 0.15*Dimensions.get('window').width,
  //       duration: 100,
  //       useNativeDriver: false,
  //     }),
  //   ]).start();
  // };
  
  const rightToLeft = () => {
    Animated.parallel([
      Animated.timing(right, {
        toValue: -Dimensions.get('window').width+0.15*Dimensions.get('window').width,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };
  

  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      // backgroundColor:'#fff'
    },
    heading: {
      marginTop: 40,
      alignSelf: 'center',
    },
    subHeading: {
      marginTop: 40,
      marginBottom: 20,
    },
    subContainer: {
      width: '100%',
      flexDirection:'row',
      
    },
    subContainerPassword: {
      alignSelf: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      // justifyContent: 'center',
      transform: [{translateX: right}],
    },
    backButton: {
      marginTop: 20,
      marginLeft:20
    },
    confirmButton: {
      width:Dimensions.get('window').width*.7,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
    }
  });
  return (
    <ScrollView style={styles.container} >
      <View style={styles.backButton}>
        <BackButton navigation={navigation} />
      </View>
      <View style={styles.heading}>
        <Heading content="Change Password" size={fontSize.subHeading} />
      </View>

        <View style={styles.subContainer}>
          <Animated.View style={styles.subContainerPassword}>
             <View style={styles.subHeading}>
            <Heading
              content="Select Email to recieve the verification code."
              size={fontSize.text}
            />
          </View>
          <DropDown menuData = {emailList} label='Email' onChange={setEmail} placeholder='Pick Email' dropDownHeight={50} />
          <Button
            disabled={!email}
            title="Send"
            width={100}
            onPress={sendOTPToEmail}
            textSize={fontSize.text}
            
          />
          </Animated.View>

           <Animated.View style={styles.subContainerPassword}>
          <View style={styles.subHeading}>
            <InputText label="New Password" placeholder="New Password" />
            <InputText
              label="Confirm Password"
              placeholder="Re-Type Password"
              width={Dimensions.get('window').width*0.7}
            />
             
          </View>
          <View  style={styles.confirmButton}>
            <Button title="Confirm" width={100} />
            <Heading
              content="Resend OTP"
              size={fontSize.text}
            />
          </View>
          
        </Animated.View>
      
        </View>
    </ScrollView>
  );
};

export default ChangePassword;
