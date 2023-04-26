import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import Select from '../../../components/_ui/Select';
import { sectorList } from '../../../utils/constants/users';

const ShiftSeekerRegisterComplete: React.FC = () => {
  const { control, watch } = useForm();
  const field = watch();
  console.log(field);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Select the type of work you are looking for and have experience of:</Text>
      <Select control={control} list={sectorList} name="sector" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3f3f3f',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

export default ShiftSeekerRegisterComplete;
