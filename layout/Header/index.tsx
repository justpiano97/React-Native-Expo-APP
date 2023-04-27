import React from 'react';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { View, Image, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MainStackParamsList } from '../../navigation';
import { ScreenRouter } from '../../navigation/config';
import { dark, primary, red, white } from '../../utils/constants/color';

const employerSignedMenu = [
  { label: 'Post a Shift', screen: '' },
  { label: 'Post a Note', screen: '' },
  { label: 'View Shift List', screen: '' },
  { label: 'View Schedule', screen: '' },
  { label: 'View Groups', screen: '' },
  { label: 'My Account', screen: '' },
  { label: 'My Profile', screen: '' },
];

const shiftSignedMenu = [
  { label: 'My Availability', screen: '' },
  { label: 'View ShiftList', screen: '' },
  { label: 'View Schedule', screen: '' },
  { label: 'View My Groups', screen: '' },
  { label: 'My Account', screen: '' },
  { label: 'My Profile', screen: '' },
];

type Props = {
  isEmployer?: boolean;
};

const Header: React.FC<Props> = ({ isEmployer = false }) => {
  const navigation = useNavigation<MainStackParamsList>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ScreenRouter.Main.Home);
        }}
      >
        <Image source={require('../../assets/logo.png')} style={{ width: 130, height: 60 }} />
      </TouchableOpacity>

      <Menu>
        <MenuTrigger>
          <Image source={require('../../assets/images/bar.png')} style={{ width: 40, height: 40 }} />
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsWrapper: styles.optionsWrapper }}>
          {(isEmployer ? employerSignedMenu : shiftSignedMenu)?.map((item) => (
            <Pressable
              key={item.label}
              onPress={() => {
                navigation.navigate(ScreenRouter.Main.Home);
              }}
              style={({ pressed }) => [
                {
                  borderColor: pressed ? primary : white,
                },
                styles.pressWrapper,
              ]}
            >
              <View style={styles.optionWrapper}>
                {item.label === 'My Profile' && false && (
                  <Image source={require('../../assets/logo.png')} style={{ width: '100%', height: '100%' }} />
                )}
                {item.label === 'View Shift List' && false && (
                  <View style={{ width: 18, height: 18, backgroundColor: red, borderRadius: 100, marginLeft: 5 }} />
                )}
              </View>
              <Text style={{ fontSize: 22, textAlign: 'right', minWidth: 150 }}>{item.label}</Text>
            </Pressable>
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: dark,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressWrapper: {
    borderWidth: 4,
    borderRadius: 12,
    paddingHorizontal: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 190,
  },
  optionsWrapper: {
    backgroundColor: white,
    position: 'absolute',
    right: 0,
    top: 38,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: primary,
  },
  optionWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
});

export default Header;
