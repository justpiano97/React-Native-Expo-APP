import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmRegisterBase from '../page/Employer/EmRegisterBase';
import Home from '../page/Home';
import ShiftSeekerRegisterBase from '../page/Shiftseeker/ShiftRegisterBase';
import { pageNameInfo } from '../utils/constants';

const MainStack = createNativeStackNavigator();

export type MainStackParamsList = {
  [key in string]: any;
};

const MainRouter: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={pageNameInfo.Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={pageNameInfo.Home} component={Home} />
          <MainStack.Screen name={pageNameInfo.ShiftSeeker.Auth.RegisterBase} component={ShiftSeekerRegisterBase} />
          <MainStack.Screen name={pageNameInfo.Employer.Auth.RegisterBase} component={EmRegisterBase} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainRouter;
