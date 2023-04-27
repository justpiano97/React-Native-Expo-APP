import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { dark, primary, white } from '../../../utils/constants/color';

type Props = {
  placeholder?: string;
  control: Control<FieldValues, any>;
  name: string;
  error?: any;
  multiline?: boolean;
};

const Input: React.FC<Props> = ({ placeholder, control, name, error, multiline = false }) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, multiline && styles.multiple]}
            placeholder={placeholder}
            onChangeText={(val) => {
              onChange(val);
            }}
            value={value}
            multiline={multiline}
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
    backgroundColor: white,
    fontSize: 18,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: primary,
    borderRadius: 8,
    textAlign: 'center',
    color: dark,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  multiple: {
    minHeight: 100,
  },
  errorText: {
    color: white,
    fontSize: 16,
    paddingStart: 8,
    paddingTop: 2,
  },
});

export default Input;
