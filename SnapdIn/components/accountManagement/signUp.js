import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import { Button } from '../button'

const passRegEx = RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*/)

export const SignUp = ({ navigation }) => {
  const [value, setValue] = useState({
    name: '',
    password: '',
    confirmPassword: ''
  })
  const [isDisabled, setIsDisabled] = useState(true);
  const [isValid, setIsValid] = useState({
    name: true,
    password: true,
    confirmPassword: true
  });

  const handleNameValidation = () => {
    setIsValid({
      ...isValid,
      name: value.name
    })
    return value.name
  };
  const handlePasswordValidation = () => {
    setIsValid({
      ...isValid,
      password: passRegEx.test(value.password)
    })
    return value.password
  };
  const handleConfirmPasswordValidation = () => {
    setIsValid({
      ...isValid,
      confirmPassword: value.confirmPassword && value.confirmPassword == value.password
    })
    return value.confirmPassword
  };

  const handleNameChange = input => {
    setValue({
      ...value,
      name: input
    })
    setIsValid({
      ...isValid,
      name: true
    })
    setIsDisabled((input && value.password == value.confirmPassword && value.password) ? false : true)
  };
  const handlePasswordChange = input => {
    setValue({
      ...value,
      password: input
    })
    setIsValid({
      ...isValid,
      password: true
    })
    setIsDisabled((value.name && input == value.confirmPassword && input) ? false : true)
  };
  const handleConfirmPasswordChange = input => {
    setValue({
      ...value,
      confirmPassword: input
    })
    setIsValid({
      ...isValid,
      confirmPassword: true
    })
    setIsDisabled((value.name && value.password == input && value.password) ? false : true)
  };

  const handleSubmit = () => {
    if(handleNameValidation() && handlePasswordValidation() && handleConfirmPasswordValidation()) {
      navigation.navigate('Email')
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.heading}>
          Create An Account
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Full Name'
          onChangeText={ev => {handleNameChange(ev)}}
          value={value.name}
          onBlur={handleNameValidation}
        />
        {!isValid.name && (
          <Text style={{ color: 'red' }}>
            Please enter your full name.
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={ev => {handlePasswordChange(ev)}}
          value={value.password}
          onBlur={handlePasswordValidation}
          secureTextEntry={true}
        />
        {!isValid.password && (
          <Text style={{ color: 'red' }}>
            Please enter a password that contains lowercase, uppercase, numbers and symbols.
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Confirm Password'
          onChangeText={ev => {handleConfirmPasswordChange(ev)}}
          value={value.confirmPassword}
          onBlur={handleConfirmPasswordValidation}
          secureTextEntry={true}
        />
        {!isValid.confirmPassword && (
          <Text style={{ color: 'red' }}>
            Please enter passwords that match
          </Text>
        )}
        <Button
          text='Create My Account'
          onPress={handleSubmit}
          disabled={isDisabled}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
    fontWeight: '700'
  },
  textInput: {
     height: 40,
     backgroundColor: '#fafafa',
     borderColor: '#c9c9c9',
     borderWidth: 1,
     borderRadius: 3,
     padding: 5,
     marginVertical: 10,
   },
});
