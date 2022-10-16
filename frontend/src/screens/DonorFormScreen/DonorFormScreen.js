import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { lightOrange, white } from '../../constants/colors';
import styled from 'styled-components';

const ButtonContainer = styled.View`
  margin-bottom: 43px;
`;

const DonorFormScreen = () => {
  const initialState = {
    mealName: '',
    additionalComment: '',
    adress: '',
    pickUpStartTime: '',
    pickUpEndTime: '',
    phone: '',
    expirationDays: '',
    expirationHours: '',
  };

  const [newForm, setNewForm] = useState(initialState);
  const [onlyWithMessage, setOnlyWithMessage] = useState(false);

  const checkboxHandler = () => {
    setOnlyWithMessage((prev) => !prev);
  };

  const onChange = ({ name, value }) => {
    setNewForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    let flag = false;
    Object.values(newForm).map((item) => {
      if (item === '') {
        flag = true;
      }
    });
    if (flag) {
      Alert.alert('Sva polja moraju biti popunjena.');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: lightOrange,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}
    >
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput
          label='Unestite naziv obroka'
          placeholder='Naziv obroka'
          value={newForm.mealName}
          onChange={onChange}
          name={'mealName'}
          containerStyle={{ marginBottom: 30 }}
        />
        <CustomTextInput
          label='Upišite dodatni komentar'
          placeholder='Opis'
          value={newForm.additionalComment}
          onChange={onChange}
          name={'additionalComment'}
          containerStyle={{ marginBottom: 30 }}
        />
        <CustomTextInput
          label='Adresa preuzimanja'
          placeholder='Adresa'
          value={newForm.adress}
          onChange={onChange}
          name={'adress'}
          containerStyle={{ marginBottom: 30 }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CustomTextInput
            label='Vreme preuzimanja'
            placeholder='Od'
            value={newForm.pickUpStartTime}
            onChange={onChange}
            name={'pickUpStartTime'}
            containerStyle={{ width: '48%' }}
            isNumeric
          />
          <CustomTextInput
            placeholder='Do'
            value={newForm.pickUpEndTime}
            onChange={onChange}
            name={'pickUpEndTime'}
            containerStyle={{ width: '48%', marginTop: 3 }}
            required={false}
            isNumeric
          />
        </View>
        <CustomTextInput
          label='Telefon'
          placeholder='Telefon'
          value={newForm.phone}
          onChange={onChange}
          name={'phone'}
          containerStyle={{ marginBottom: 10 }}
          isNumeric
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <CustomCheckBox
            isActive={onlyWithMessage}
            handleCheckBox={checkboxHandler}
          />
          <Text style={{ padding: 5, color: 'white' }}>
            Kontaktirati isključivo preko poruka
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CustomTextInput
            label='Ispravnost obroka'
            placeholder='Broj dana'
            value={newForm.expirationDays}
            onChange={onChange}
            name={'expirationDays'}
            containerStyle={{ width: '48%' }}
            isNumeric
          />
          <CustomTextInput
            placeholder='Broj sati'
            value={newForm.expirationHours}
            onChange={onChange}
            name={'expirationHours'}
            containerStyle={{ width: '48%', marginTop: 3 }}
            required={false}
            isNumeric
          />
        </View>
        <ButtonContainer>
          <PrimaryButton
            onPress={handleSubmit}
            disabled={false}
            backgroundColor={white}
            content='Podeli obrok'
          />
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default DonorFormScreen;
