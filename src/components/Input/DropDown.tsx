import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import fontSize from '../../constants/FontSize';
import {Heading, Icon} from '../Static';

type Props = {
  label: string;
  backgroundColor?: string;
  width?: number;
  color?: string;
  placeholder?: string;
  placeHoldeColor?: string;
  height?: number;
  dropDownHeight: number,
  menuData: Array<string>,
  onChange:any,
};

const DropDown = ({
  label,
  backgroundColor,
  width,
  color,
  placeholder,
  placeHoldeColor,
  height,
  dropDownHeight,
  menuData,
  onChange
}: Props) => {
  const inputWidth = width || 300;
  const inputHeight = height || 50;
  const {colors} = useTheme();
  const [textValue, setTextValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (value: any) => {
    setTextValue(value);
    onChange(value);
    setOpen(false)
  };
  const styles = StyleSheet.create({
    container: {
      // elevation:20,
      zIndex: 2,
    },
    input: {
      backgroundColor: backgroundColor || colors.background || '#fff',
      borderRadius: 10,
      width: inputWidth,
      height: inputHeight,
      color: colors.text,
      fontSize: 20,
      marginTop: 5,
      paddingHorizontal: 15,
      marginBottom: 15,
      borderColor: colors.text,
      borderWidth: 2,
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
    modalContainer: {
      position: 'absolute',
      width: inputWidth,
      top: inputHeight+25,
      height: open?dropDownHeight*menuData.length:0,
      zIndex: 3,
      elevation: 20,
      backgroundColor:colors.background,
      borderRadius:15,
      borderWidth:open?2:0,
      borderColor: colors.text,
      paddingHorizontal:10,
    },
    option: {
      width: inputWidth,
      padding:15,
      borderBottomColor: colors.text,
      borderBottomWidth: 2,
    },
  });
  return (
    <View style={styles.container}>
      <Heading content={label} size={20} />
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setOpen(true)}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={textValue}
          editable={false}
          placeholderTextColor={placeHoldeColor || '#aaa'}
          spellCheck={true}
        />
        <View style={styles.crossIcon}>
            <Icon name="Triangle" color={color || '#aaa'} size={25} />
        </View>
        
      </TouchableOpacity>

      <View style={styles.modalContainer}>
        <ScrollView>
            {menuData.map((item, index) => ( 
            <TouchableOpacity style={styles.option} key={index} onPress={()=>handleChange(item)} >
            <Heading content={item} size={20} />
          </TouchableOpacity>))}
        </ScrollView>
      </View>
    </View>
  );
};
export default React.memo(DropDown);
