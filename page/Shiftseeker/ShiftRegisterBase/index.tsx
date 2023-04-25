import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from '../../../components/_ui/Input';
import { shiftSeekerRegisterList } from '../../../utils/constants/shiftseeker';
import Button from '../../../components/_ui/Button';

const ShiftSeekerRegisterBase: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <Text style={styles.title}>ShiftSeeker Registration</Text>
      <View style={styles.inputWrapper}>
        {shiftSeekerRegisterList?.map((item) => (
          <Input key={item?.label} placeholder={item.label} />
        ))}
      </View>
      <Button>Continue</Button>
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
