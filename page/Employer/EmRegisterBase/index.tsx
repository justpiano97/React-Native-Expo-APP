import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Input from '../../../components/_ui/Input';
import Button from '../../../components/_ui/Button';
import { employerRegisterList } from '../../../utils/constants/employer';

const EmployerRegisterBase: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <Text style={styles.title}>Employer Registration</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.inputWrapper}>
          <Input placeholder="Choose Your Sector" />
          {employerRegisterList?.map((item) => (
            <Input key={item?.label} placeholder={item.label} />
          ))}
        </View>
        <Button>Continue</Button>
      </View>
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
