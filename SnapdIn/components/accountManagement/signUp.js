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

export const SignUp = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = ('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleValidation = () => {
    setIsValid(emailRegex.test(value))
  };
  const handleChange = input => {
    setValue(input)
    setIsDisabled(!name || !password || !confirmPassword)
    setIsValid(true)
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.heading}>
          Create An Account
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Full Name'
          onChangeText={ev => {setName(ev)}}
          value={value}
          onBlur={handleValidation}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={ev => {setPassword(ev)}}
          value={value}
          onBlur={handleValidation}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Confirm Password'
          onChangeText={ev => {setConfrimPassword(ev)}}
          value={value}
          onBlur={handleValidation}
        />
        {!isValid && (
          <Text style={{ color: 'red' }}>
            Please enter a valid email.
          </Text>
        )}
        <Button
          text='Continue'
          onPress={handleValidation}
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
  body: {
    backgroundColor: '#fff',
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
