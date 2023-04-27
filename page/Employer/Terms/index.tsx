import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../../components/_ui/Button';
import { dark, primary, white } from '../../../utils/constants/color';

const Terms: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.termsPanel}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.description}>
          {
            "SHIFT is an introduction service, and the Shiftseekers/volunteers are deemed to be self-employed and have acknowledged that they are responsible for their own expenses and taxes unless you have already or wish to place them on your payroll and agree separately with them on your payroll and agree separately with them before the start of the shift.\nThe Shiftseekers/volunteers also acknowledge that the duration of the work is only for the date and time started and any shift does not constitute an offer of regular employment.\nSubscription fees fall due each calendar month from the registration date or end of any free trail period. By selecting 'Confirm' you are accepting our Terms and Conditions and agree to pay the minimum monthly subscription of £9.99+vat plus £1+vat for every worker more than 10 added to your groups."
          }
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 20,
          justifyContent: 'space-between',
        }}
      >
        <Button buttonSize="small" buttonStyles="whiteButton">
          Reject
        </Button>
        <Button buttonSize="small">Confirm</Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
    paddingHorizontal: 30,
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: dark,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: dark,
    lineHeight: 18,
  },
  termsPanel: {
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: primary,
    borderRadius: 12,
  },
});

export default Terms;
