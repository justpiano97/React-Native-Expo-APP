import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: ReactNode;
  addStyles?: any;
  onPress?: Function;
  buttonSize?: 'large' | 'medium';
};

const Button: React.FC<Props> = ({ children, buttonSize = 'medium', addStyles = {}, onPress = () => {} }) => {
  return (
    <TouchableOpacity style={[styles[buttonSize], { ...addStyles }]} onPress={() => onPress()}>
      <Text style={styles[`${buttonSize}Text`]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  large: {
    backgroundColor: '#ff85ff',
    borderColor: 'white',
    paddingVertical: 12,
    borderRadius: 18,
    borderStyle: 'solid',
    borderWidth: 3,
  },
  medium: {
    backgroundColor: '#ff85ff',
    borderColor: 'white',
    paddingVertical: 8,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  largeText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 32,
  },
  mediumText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 32,
  },
});

export default Button;
