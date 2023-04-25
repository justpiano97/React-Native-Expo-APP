import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Header from '../Header';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <View style={{ paddingHorizontal: 30, height: '100%', backgroundColor: '#3f3f3f' }}>{children}</View>
    </>
  );
};

export default MainLayout;
