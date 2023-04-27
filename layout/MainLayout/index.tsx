import React, { ReactNode } from 'react';
import { View } from 'react-native';

import Header from '../Header';
import { dark } from '../../utils/constants/color';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ height: '100%' }}>
      <Header />
      <View style={{ flex: 1, backgroundColor: dark, paddingBottom: 40 }}>{children}</View>
    </View>
  );
};

export default MainLayout;
