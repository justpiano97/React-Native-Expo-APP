import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../components/_ui/Button';
import Select from '../../../components/_ui/Select';
import { ShiftRegistrationCompleteSchema } from '../../../utils/schema';
import { sectorList, shiftExperienceList } from '../../../utils/constants/users';
import CheckBox from '../../../components/_ui/Checkbox';

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
  };

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
        <View style={{ gap: 18, paddingTop: 20 }}>
          <Select control={control} list={sectorList} name="sector" error={errors.sector} />
          {shiftExperienceList?.map((item) => (
            <CheckBox key={item.name} control={control} name={item.name} label={item.label} />
          ))}
        </View>
        <Button styles={{ marginTop: 10 }} onPress={handleSubmit(onSubmit)}>
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
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

export default ShiftSeekerRegisterComplete;
