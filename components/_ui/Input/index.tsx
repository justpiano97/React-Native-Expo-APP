import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  placeholder?: string;
  control: Control<FieldValues, any>;
  name: string;
  error?: any;
};

const Input: React.FC<Props> = ({ placeholder, control, name, error }) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={(val) => {
              onChange(val);
            }}
            value={value}
          />
        )}
      />
      {error && (
        <View style={{}}>
          <Text style={styles.errorText}>{error?.message}</Text>
        </View>
      )}
    </View>
  );
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
  errorText: {
    color: 'white',
    fontSize: 16,
    paddingStart: 8,
    paddingTop: 2,
  },
});

export default Input;
