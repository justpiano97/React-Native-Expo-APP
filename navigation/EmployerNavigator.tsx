import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployerRegisterBase from '../page/Employer/EmRegisterBase';
import MainLayout from '../layout/MainLayout';
import Terms from '../page/Employer/Terms';
import { ScreenRouter } from './config';

const EmployerStack = createNativeStackNavigator();

const EmployerStackNavigator = () => {
  return (
    <MainLayout isEmployer>
      <EmployerStack.Navigator
        initialRouteName={ScreenRouter.Employer.Auth.RegisterBase}
        screenOptions={{
          headerShown: false,
        }}
      >
        <EmployerStack.Screen name={ScreenRouter.Employer.Auth.RegisterBase} component={EmployerRegisterBase} />
        <EmployerStack.Screen name={ScreenRouter.Employer.Auth.Terms} component={Terms} />
      </EmployerStack.Navigator>
    </MainLayout>
  );
};

export default EmployerStackNavigator;
