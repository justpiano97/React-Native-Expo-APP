import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShiftSeekerRegisterBase from '../page/Shiftseeker/ShiftRegisterBase';
import ShiftSeekerRegisterProfile from '../page/Shiftseeker/ShiftRegisterProfile';
import ShiftSeekerRegisterComplete from '../page/Shiftseeker/ShiftRegisterComplete';
import MainLayout from '../layout/MainLayout';
import { ScreenRouter } from './config';

const ShiftStack = createNativeStackNavigator();

const ShiftSeekerNavigator = () => {
  return (
    <MainLayout>
      <ShiftStack.Navigator
        initialRouteName={ScreenRouter.Shift.Auth.RegisterProfile}
        screenOptions={{
          headerShown: false,
        }}
      >
        <ShiftStack.Screen name={ScreenRouter.Shift.Auth.RegisterBase} component={ShiftSeekerRegisterBase} />
        <ShiftStack.Screen name={ScreenRouter.Shift.Auth.RegisterProfile} component={ShiftSeekerRegisterProfile} />
        <ShiftStack.Screen name={ScreenRouter.Shift.Auth.RegisterComplete} component={ShiftSeekerRegisterComplete} />
      </ShiftStack.Navigator>
    </MainLayout>
  );
};

export default ShiftSeekerNavigator;
