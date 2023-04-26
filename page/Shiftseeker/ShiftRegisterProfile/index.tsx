import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';

import Input from '../../../components/_ui/Input';
import Button from '../../../components/_ui/Button';
import { pageNameInfo } from '../../../utils/constants';

type Props = {
  navigation: any;
};

const ShiftSeekerRegisterProfile: React.FC<Props> = ({ navigation }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    navigation.navigate(pageNameInfo.Main.ShiftSeeker, { screen: pageNameInfo.ShiftSeeker.Auth.RegisterComplete });
  };
  return (
    <ScrollView style={{ height: '100%', backgroundColor: '#3f3f3f' }}>
      <View style={styles.wrapper}>
        <View style={styles.uploadWrapper}>
          <View style={styles.upload}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Upload Headshot</Text>
          </View>
          <View style={{ flex: 1, paddingStart: 20 }}>
            <Text style={styles.text}>
              Be sure to upload your best and latest image so that an employer can see how is turning up.
            </Text>
          </View>
        </View>
        <View style={styles.uploadWrapper}>
          <View style={styles.upload}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Upload ID Passport or Visa</Text>
          </View>
          <View style={{ flex: 1, paddingStart: 20 }}>
            <Text style={styles.text}>
              We need this information to verify your profile and so that an employer knows who is turing up and can pay
              you!
            </Text>
          </View>
        </View>
        <Input control={control} name="crb_number" placeholder="CRM Number (Optional)" />
        <Input control={control} name="bio" placeholder="Shot Bio" multiline />
        <Button styles={{ marginTop: 15 }} onPress={handleSubmit(onSubmit)}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    gap: 10,
  },
  uploadWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  upload: {
    backgroundColor: 'white',
    height: 160,
    width: 160,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ff85ff',
    borderRadius: 24,
    padding: 10,
  },
  text: {
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default ShiftSeekerRegisterProfile;
