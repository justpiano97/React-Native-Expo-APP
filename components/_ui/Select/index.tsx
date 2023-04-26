import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  list: { [key: string]: string }[];
  control: Control<FieldValues, any>;
  name: string;
  styles?: any;
};

const Select: React.FC<Props> = ({ list, control, name, styles = {} }) => {
  return (
    <View style={{ ...styles }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <SelectDropdown
            data={list}
            onSelect={(selectedItem) => {
              onChange(selectedItem.value);
            }}
            buttonStyle={selectStyles.dropdownBtn}
            dropdownStyle={selectStyles.dropdownMenu}
            renderCustomizedButtonChild={(selectedItem) => (
              <View style={selectStyles.dropdownBtnChild}>
                <Text style={selectStyles.dropdownBtnTxt}>
                  {selectedItem ? selectedItem.label : 'Choose your Sector'}
                </Text>
                <FontAwesome name="chevron-down" color={'#ff85ff'} size={18} />
              </View>
            )}
            renderCustomizedRowChild={(item) => (
              <View>
                <Text style={selectStyles.dropdownRowTxt}>{item.label}</Text>
              </View>
            )}
          />
        )}
      />
    </View>
  );
};

const selectStyles = StyleSheet.create({
  dropdownBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff85ff',
  },
  dropdownBtnChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  dropdownBtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
  dropdownMenu: { backgroundColor: '#EFEFEF', marginTop: -62 },
  dropdownRowTxt: {
    color: '#444',
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
});

export default Select;
