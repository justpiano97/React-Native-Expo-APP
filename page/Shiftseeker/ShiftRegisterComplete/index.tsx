import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../components/_ui/Button';
import Select from '../../../components/_ui/Select';
import { ShiftRegistrationCompleteSchema } from '../../../utils/schema';
import { sectorList } from '../../../utils/constants/users';
import CheckBox from '../../../components/_ui/Checkbox';

const shiftExperienceList = [
  { label: 'Glass Collecting', name: 'glassCollecting' },
  { label: 'Waiting Staff', name: 'waitingStaff' },
  { label: 'Bartender', name: 'bartender' },
  { label: 'Kitchen Staff', name: 'kitchenStaff' },
  { label: 'Cocktail Waiter', name: 'cocktailWaiter' },
  { label: 'Barista1', name: 'barista1' },
  { label: 'Barista2', name: 'barista2' },
  { label: 'Barista3', name: 'barista3' },
  { label: 'Barista4', name: 'barista4' },
  { label: 'Barista5', name: 'barista5' },
  { label: 'Barista6', name: 'barista6' },
];

const dataArray = [
  'glassCollecting',
  'waitingStaff',
  'bartender',
  'kitchenStaff',
  'cocktailWaiter',
  'barista1',
  'barista2',
  'barista2',
  'barista3',
  'barista4',
  'barista5',
];

const ShiftSeekerRegisterComplete: React.FC = () => {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShiftRegistrationCompleteSchema) });
  const watchField = watch();

  const onSubmit = (data: FieldValues) => {
    let requestData: { [key: string]: any } = {};
    const checkData = Object.keys(data)?.filter((item) => data[item] === true && item !== 'noExperience');
    requestData.sector = data.sector;
    requestData.experience = checkData;
    console.log('requestData: ', requestData);
  };

  useEffect(() => {
    if (watchField.noExperience) {
      dataArray.forEach((item) => {
        setValue(item, false);
      });
    }
  }, [watchField.noExperience]);

  useEffect(() => {
    if (dataArray?.filter((item) => watchField[item] === true && item !== 'noExperience')?.length) {
      setValue('noExperience', false);
    }
  }, [...dataArray.map((item) => watchField[item])]);

  return (
    <View style={styles.wrapper}>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.text}>Select the type of work you are looking for and have experience of:</Text>
      </View>
      <View
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, paddingTop: 20 }}
      >
        <Select
          styles={{ paddingHorizontal: 30 }}
          control={control}
          list={sectorList}
          name="sector"
          error={errors.sector}
        />
        <View style={{ paddingVertical: 20 }}>
          <ScrollView style={{ height: '75%' }}>
            <View style={{ gap: 20, paddingHorizontal: 30 }}>
              {[...shiftExperienceList, { label: 'No Experience', name: 'noExperience' }]?.map((item) => (
                <CheckBox key={item.name} control={control} name={item.name} label={item.label} />
              ))}
            </View>
          </ScrollView>
        </View>
        <Button styles={{ paddingHorizontal: 30 }} onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3f3f3f',
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

export default ShiftSeekerRegisterComplete;
