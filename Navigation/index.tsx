import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../page/Home';
import ShiftSeekerRegisterBase from '../page/Shiftseeker/ShiftRegisterBase';
import EmRegisterBase from '../page/Employer/EmRegisterBase';

const MainStack = createNativeStackNavigator();

export type MainStackParamsList = {
  [key in string]: any;
};

const Router: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={'home'}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={'home'} component={Home} />
          <MainStack.Screen name={'shiftRegisterBase'} component={ShiftSeekerRegisterBase} />
          <MainStack.Screen name={'emRegisterBase'} component={EmRegisterBase} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;
