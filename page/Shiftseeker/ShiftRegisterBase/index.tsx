import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../components/_ui/Button';
import Input from '../../../components/_ui/Input';
import { MainStackParamsList } from '../../../navigation';
import { ScreenRouter } from '../../../navigation/config';
import { ShiftRegistrationSchema } from '../../../utils/schema';
import { shiftSeekerRegisterList } from '../../../utils/constants/users';
import { white } from '../../../utils/constants/color';

const ShiftSeekerRegisterBase: React.FC = () => {
  const navigation = useNavigation<MainStackParamsList>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShiftRegistrationSchema) });

  const onSubmit = () => {
    navigation.navigate(ScreenRouter.Main.Shift, { screen: ScreenRouter.Shift.Auth.RegisterProfile });
  };

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
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
    color: white,
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
