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
const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const handleValidation = (email) => {
  valid = emailRegex.test(email)
};

export const Email = ({ navigation }) => {

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleValidation = () => {
    setIsValid(emailRegex.test(value))
    if(isValid) {
      navigation.navigate('SignUp')
    }
  };
  const handleChange = input => {
    setValue(input)
    setIsDisabled(!emailRegex.test(input))
    setIsValid(true)
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.heading}>
          Welcome
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='email@example.com'
          onChangeText={ev => {handleChange(ev)}}
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
