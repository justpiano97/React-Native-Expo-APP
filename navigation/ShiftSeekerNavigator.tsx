import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShiftSeekerRegisterBase from '../page/Shiftseeker/ShiftRegisterBase';
import { pageNameInfo } from '../utils/constants';
import ShiftSeekerRegisterProfile from '../page/Shiftseeker/RegisterProfile';
import ShiftSeekerRegisterComplete from '../page/Shiftseeker/RegisterComplete';

const ShiftStack = createNativeStackNavigator();

const ShiftSeekerNavigator = () => {
  return (
    <ShiftStack.Navigator
      initialRouteName={pageNameInfo.ShiftSeeker.Auth.RegisterBase}
      screenOptions={{
        headerShown: false,
      }}
    >
      <ShiftStack.Screen name={pageNameInfo.ShiftSeeker.Auth.RegisterBase} component={ShiftSeekerRegisterBase} />
      <ShiftStack.Screen name={pageNameInfo.ShiftSeeker.Auth.RegisterProfile} component={ShiftSeekerRegisterProfile} />
      <ShiftStack.Screen
        name={pageNameInfo.ShiftSeeker.Auth.RegisterComplete}
        component={ShiftSeekerRegisterComplete}
      />
    </ShiftStack.Navigator>
  );
};

export default ShiftSeekerNavigator;
