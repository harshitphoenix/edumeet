// import { useTheme } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import fontSize from '../../constants/FontSize';
import Heading from './Heading';

type Props = {
  title: string;
  borderWidth?: number;
  width?: number;
  onPress?: () => void;
  color?: string;
  height?:number
  textSize?:number,
  disabled?: boolean
};

const Button = ({disabled, title, borderWidth, width, onPress, color, height, textSize}: Props) => {
  //   const {colors} = useTheme();
  const styles = StyleSheet.create({
    button: {
      backgroundColor:color|| '#2C6EFF',
      borderWidth: borderWidth||1,
      borderColor: color || '#2C6EFF',
      width: width,
      height: height||50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}>
      <Heading content={title} size={textSize||20} color="#fff" weight="600" />
    </TouchableOpacity>
  );
};

export default React.memo(Button);
