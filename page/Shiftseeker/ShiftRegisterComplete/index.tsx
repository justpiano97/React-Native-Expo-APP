import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import Select from '../../../components/_ui/Select';
import { sectorList } from '../../../utils/constants/users';
import Button from '../../../components/_ui/Button';

const ShiftSeekerRegisterComplete: React.FC = () => {
  const { control } = useForm();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Select the type of work you are looking for and have experience of:</Text>
      <Select control={control} list={sectorList} name="sector" styles={{ paddingVertical: 10 }} />
      <Button>Submit</Button>
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
