import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  placeholder?: string;
};

const Input: React.FC<Props> = ({ placeholder }) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#ff85ff',
    borderRadius: 8,
    textAlign: 'center',
    paddingVertical: 8,
  },
});

export default Input;
