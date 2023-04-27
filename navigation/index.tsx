import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployerNavigator from './EmployerNavigator';
import Home from '../page/Home';
import ShiftSeekerNavigator from './ShiftSeekerNavigator';
import { ScreenRouter } from './config';
import { dark } from '../utils/constants/color';

const MainStack = createNativeStackNavigator();

export type MainStackParamsList = {
  [key in string]: any;
};

const Router: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: dark }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={ScreenRouter.Main.Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={ScreenRouter.Main.Home} component={Home} />
          <MainStack.Screen name={ScreenRouter.Main.Employer} component={EmployerNavigator} />
          <MainStack.Screen name={ScreenRouter.Main.Shift} component={ShiftSeekerNavigator} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;
