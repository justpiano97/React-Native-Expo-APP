import React from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { primary, white } from '../../../utils/constants/color';

type Props = {
  control: Control<FieldValues, any>;
  name: string;
  styles?: any;
  label: string;
};

const CheckBox: React.FC<Props> = ({ control, name, label }) => {
  return (
    <View key={name} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value = false } }) => (
          <Checkbox style={styles.checkbox} value={value} onValueChange={onChange} color={value ? primary : primary} />
        )}
      />
      <Text style={styles.checkText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 30,
    width: 30,
    borderWidth: 3,
  },
  checkText: {
    fontSize: 22,
    color: white,
    paddingLeft: 10,
  },
});

export default CheckBox;
