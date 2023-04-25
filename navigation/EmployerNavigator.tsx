import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployerRegisterBase from '../page/Employer/EmRegisterBase';
import { pageNameInfo } from '../utils/constants';
import MainLayout from '../layout/MainLayout';

const EmployerStack = createNativeStackNavigator();

const EmployerStackNavigator = () => {
  return (
    <MainLayout>
      <EmployerStack.Navigator
        initialRouteName={pageNameInfo.Employer.Auth.RegisterBase}
        screenOptions={{
          headerShown: false,
        }}
      >
        <EmployerStack.Screen name={pageNameInfo.Employer.Auth.RegisterBase} component={EmployerRegisterBase} />
      </EmployerStack.Navigator>
    </MainLayout>
  );
};

export default EmployerStackNavigator;
