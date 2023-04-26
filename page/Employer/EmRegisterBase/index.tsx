import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../components/_ui/Input';
import Button from '../../../components/_ui/Button';
import { employerRegisterList } from '../../../utils/constants/employer';
import { EmployerRegistrationSchema } from '../../../utils/schema';
import { MainStackParamsList } from '../../../navigation';
import { pageNameInfo } from '../../../utils/constants';

const EmployerRegisterBase: React.FC = () => {
  const navigation = useNavigation<MainStackParamsList>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmployerRegistrationSchema) });

  const onSubmit = (data: FieldValues) => {
    navigation.navigate(pageNameInfo.Main.Employer, { screen: pageNameInfo.Employer.Auth.Terms });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <Text style={styles.title}>Employer Registration</Text>
      <ScrollView
        style={{
          height: '100%',
          paddingHorizontal: 30,
        }}
      >
        <View style={styles.inputWrapper}>
          <Input placeholder="Choose Your Sector" control={control} name="sector" error={errors.sector} />
          {employerRegisterList?.map((item) => (
            <Input
              key={item?.label}
              placeholder={item.label}
              name={item.name}
              control={control}
              error={errors[item?.name]}
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
    paddingBottom: 30,
  },
});

export default EmployerRegisterBase;
