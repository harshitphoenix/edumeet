import { useTheme } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Heading from './Heading';

type Props = {
  title: string;
  borderWidth?: number;
  width?: number;
  style?: Object;
  onPress?: () => void;
  textSize?: number
};

const OutlinedButton = ({title, borderWidth, width, onPress, textSize}: Props) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
   
    button: {
      backgroundColor: colors.background,
      borderWidth: borderWidth||1,
      borderColor: '#2C6EFF',
      width: width,
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  // console.log(colors.background)
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8} >
      <Heading
        content={title}
        size={textSize||20}
        color="#2C6EFF"
        weight='600'
      />
    </TouchableOpacity>
  );
};

export default React.memo(OutlinedButton);
