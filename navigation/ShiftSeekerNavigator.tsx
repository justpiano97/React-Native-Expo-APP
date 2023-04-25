import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShiftSeekerRegisterBase from '../page/Shiftseeker/ShiftRegisterBase';
import { pageNameInfo } from '../utils/constants';
import ShiftSeekerRegisterProfile from '../page/Shiftseeker/ShiftRegisterProfile';
import ShiftSeekerRegisterComplete from '../page/Shiftseeker/ShiftRegisterComplete';
import MainLayout from '../layout/MainLayout';

const ShiftStack = createNativeStackNavigator();

const ShiftSeekerNavigator = () => {
  return (
    <MainLayout>
      <ShiftStack.Navigator
        initialRouteName={pageNameInfo.ShiftSeeker.Auth.RegisterBase}
        screenOptions={{
          headerShown: false,
        }}
      >
        <ShiftStack.Screen name={pageNameInfo.ShiftSeeker.Auth.RegisterBase} component={ShiftSeekerRegisterBase} />
        <ShiftStack.Screen
          name={pageNameInfo.ShiftSeeker.Auth.RegisterProfile}
          component={ShiftSeekerRegisterProfile}
        />
        <ShiftStack.Screen
          name={pageNameInfo.ShiftSeeker.Auth.RegisterComplete}
          component={ShiftSeekerRegisterComplete}
        />
      </ShiftStack.Navigator>
    </MainLayout>
  );
};

export default ShiftSeekerNavigator;
