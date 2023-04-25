import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../../components/_ui/Input';
import { shiftSeekerRegisterList } from '../../../utils/constants/shiftseeker';
import Button from '../../../components/_ui/Button';
import { ShiftRegistrationSchema } from '../../../utils/schema';

const ShiftSeekerRegisterBase: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShiftRegistrationSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log('data: ', data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <Text style={styles.title}>ShiftSeeker Registration</Text>
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <View style={styles.inputWrapper}>
          {shiftSeekerRegisterList?.map((item) => (
            <Input
              key={item?.label}
              placeholder={item.label}
              control={control}
              name={item.name}
              error={errors[item.name]}
            />
          ))}
        </View>
        <Button onPress={handleSubmit(onSubmit)}>Continue</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 20,
  },
});

export default ShiftSeekerRegisterBase;
