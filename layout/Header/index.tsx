import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { pageNameInfo } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamsList } from '../../navigation';

const Header: React.FC = () => {
  const navigation = useNavigation<MainStackParamsList>();
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(pageNameInfo.Main.Home);
        }}
      >
        <Image source={require('../../assets/logo.png')} style={{ width: 130, height: 60 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../assets/images/bar.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
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
    alignItems: 'center',
  },
});

export default Header;
