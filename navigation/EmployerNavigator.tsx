import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmRegisterBase from '../page/Employer/EmRegisterBase';
import { pageNameInfo } from '../utils/constants';

const EmployerStack = createNativeStackNavigator();

const EmployerStackNavigator = () => {
  return (
    <EmployerStack.Navigator
      initialRouteName={'Hello'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <EmployerStack.Screen name={'Hello'} component={EmRegisterBase} />
    </EmployerStack.Navigator>
  );
};

export default EmployerStackNavigator;
