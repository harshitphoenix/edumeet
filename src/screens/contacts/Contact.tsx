import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Heading, Icon} from '../../components/Static';
import fontSize from '../../constants/FontSize';

const Contact = () => {
  return (
    <ScrollView>
      <Heading content="Recents" size={fontSize.subHeading} />
      <ContactCard isActive={true} />
    </ScrollView>
  );
};

export default Contact;

type ContactCardProp = {
  isActive: boolean;
};

const ContactCard = ({isActive}: ContactCardProp) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.text,
      flexDirection: 'row',
      borderRadius: 10,
      height: 60,
      width: Dimensions.get('window').width,
      paddingHorizontal: 20,
      alignItems: 'center',
      //   justifyContent:'space-between'
    },
    middleContainer: {
      justifyContent: 'space-evenly',
      marginLeft: 20,
      height: '100%',
      flexGrow:2
    },
    rightContainer: {
      flexDirection: 'row',
      flexGrow:1
    },
    nameContainer:{
        flexDirection:'row',
        width:'50%',
        justifyContent:'space-between'
    }
  });
  return (
    <View style={styles.container}>
      <Icon name="User" color="#fff" size={30} />
      <View style={styles.middleContainer}>
        <View style={styles.nameContainer}>
          <Heading content="User_Name" size={fontSize.text} />
          <Heading content="2" />
          {isActive ? <Icon name="Circle" color="green" /> : null}
        </View>

        <Heading content="Custom Test Meaage for display" />
      </View>
      <View style={styles.rightContainer}>
        
      </View>
    </View>
  );
};
