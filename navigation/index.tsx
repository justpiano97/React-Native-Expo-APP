import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../page/Home';
import { pageNameInfo } from '../utils/constants';
import ShiftSeekerNavigator from './ShiftSeekerNavigator';
import EmRegisterBase from '../page/Employer/EmRegisterBase';
import EmployerNavigator from './EmployerNavigator';

const MainStack = createNativeStackNavigator();

export type MainStackParamsList = {
  [key in string]: any;
};

const Router: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={pageNameInfo.Main.Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={pageNameInfo.Main.Home} component={Home} />
          <MainStack.Screen name={pageNameInfo.Main.ShiftSeeker} component={ShiftSeekerNavigator} />
          <MainStack.Screen name={pageNameInfo.Main.Employer} component={EmployerNavigator} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;
