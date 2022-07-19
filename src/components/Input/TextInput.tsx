
import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Heading, Icon} from '../Static';

type Props = {
  label: string;
  backgroundColor?: string;
  width?: number;
  color?: string;
  placeholder?: string;
  placeHoldeColor?: string;
  height?: number;
  secureTextEntry?: boolean;
};

const InputText = ({
  label,
  backgroundColor,
  width,
  color,
  placeholder,
  placeHoldeColor,
  height,
  secureTextEntry,
}: Props) => {
  const inputWidth = width || 300;
  const inputHeight = height || 50;
  const {colors} = useTheme()
  const [textValue, setTextValue] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(secureTextEntry);
  const handleChange = (value: any) => {
    setTextValue(value);
  };
  const styles = StyleSheet.create({
    container: {},
    input: {
      backgroundColor: backgroundColor|| colors.background || '#fff',
      borderRadius: 10,
      width: inputWidth,
      height: inputHeight,
      color: colors.text,
      fontSize: 20,
      marginTop: 5,
      paddingHorizontal: 15,
      marginBottom: 15,
      borderColor: colors.text,
      borderWidth:2
    },
    inputContainer: {
      flexDirection: 'row',
    },
    crossIcon: {
      position: 'absolute',
      left: inputWidth - 30,
      top: inputHeight * 0.3,
      width: 40,
    },
  });
  return (
    <View>
      <Heading content={label} size={20} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={textValue}
          onChange={value => handleChange(value)}
          placeholderTextColor={placeHoldeColor || '#aaa'}
          secureTextEntry={showPassword}
          spellCheck={true}
        />
        {secureTextEntry ? (  
          <TouchableOpacity  style={styles.crossIcon} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword?"Eye":"CloseEye"} color={color || '#aaa'} size={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.crossIcon}
            onPress={() => setTextValue('')}>
            <Icon name="Cross" color={color || '#aaa'} size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default React.memo(InputText);
