import { useTheme } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
type Props = {
  size?: number | undefined;
  color?: string;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  content?: string;
};

const Heading: React.FC<Props> = ({
  size,
  color,
  weight,
  content,
}: Props): React.ReactElement => {
  const {colors} = useTheme()
  const styles = StyleSheet.create({
    text: {
      fontSize: size,
      color: color||colors.text,
      fontWeight: weight,
    },
  });
  return <Text style={styles.text}>{content}</Text>;
};

export default Heading;
