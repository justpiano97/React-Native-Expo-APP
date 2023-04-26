import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../../components/_ui/Button';
import Select from '../../../components/_ui/Select';
import { sectorList } from '../../../utils/constants/users';

const checkBoxList = [
  { label: 'Glass Collecting', name: 'glassCollecting' },
  { label: 'Waiting Staff', name: 'waitingStaff' },
  { label: 'Bartender', name: 'bartender' },
  { label: 'Kitchen Staff', name: 'kitchenStaff' },
  { label: 'Cocktail Waiter', name: 'cocktailWaiter' },
  { label: 'Barista', name: 'barista' },
  { label: 'No Experience', name: 'noExperience' },
];

const ShiftSeekerRegisterComplete: React.FC = () => {
  const { control, setValue, watch } = useForm();
  const watchField = watch();

  useEffect(() => {
    if (watchField.noExperience) {
      setValue('glassCollecting', false);
      setValue('waitingStaff', false);
      setValue('kitchenStaff', false);
      setValue('bartender', false);
      setValue('cocktailWaiter', false);
      setValue('barista', false);
    }
  }, [watchField.noExperience]);

  useEffect(() => {
    if (
      watchField.glassCollecting ||
      watchField.glassCollecting ||
      watchField.bartender ||
      watchField.kitchenStaff ||
      watchField.cocktailWaiter ||
      watchField.barista ||
      watchField.barista
    ) {
      setValue('noExperience', false);
    }
  }, [
    watchField.glassCollecting,
    watchField.glassCollecting,
    watchField.bartender,
    watchField.kitchenStaff,
    watchField.cocktailWaiter,
    watchField.barista,
    watchField.barista,
  ]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Select the type of work you are looking for and have experience of:</Text>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ gap: 20, paddingTop: 20 }}>
          <Select control={control} list={sectorList} name="sector" />
          {checkBoxList?.map((item) => (
            <View key={item.name} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Controller
                control={control}
                name={item.name}
                render={({ field: { onChange, value = false } }) => (
                  <Checkbox
                    style={styles.checkbox}
                    value={value}
                    onValueChange={onChange}
                    color={value ? '#ff85ff' : '#ff85ff'}
                  />
                )}
              />
              <Text style={styles.checkText}>{item.label}</Text>
            </View>
          ))}
        </View>
        <Button styles={{ marginTop: 10 }}>Submit</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3f3f3f',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  checkbox: {
    height: 35,
    width: 35,
    borderWidth: 3,
  },
  checkText: {
    fontSize: 22,
    color: 'white',
    paddingLeft: 10,
  },
});

export default ShiftSeekerRegisterComplete;
