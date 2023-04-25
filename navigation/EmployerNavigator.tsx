import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmRegisterBase from '../page/Employer/EmRegisterBase';
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
        <EmployerStack.Screen name={pageNameInfo.Employer.Auth.RegisterBase} component={EmRegisterBase} />
      </EmployerStack.Navigator>
    </MainLayout>
  );
};

export default EmployerStackNavigator;
