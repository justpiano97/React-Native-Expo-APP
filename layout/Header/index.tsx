import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.headerWrapper,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 70 }} />
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: '#3f3f3f',
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Header;
