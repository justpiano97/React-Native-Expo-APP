import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Header from '../Header';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ height: '100%' }}>
      <Header />
      <View style={{ flex: 1, backgroundColor: '#3f3f3f', paddingBottom: 40 }}>{children}</View>
    </View>
  );
};

export default MainLayout;
