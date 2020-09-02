import React { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Email } from './components/accountManagement/email';
import { SignUp } from './components/accountManagement/signUp';
import { withAuthenticator } from 'aws-amplify-react-native'

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen
          name='Email'
          component={Email}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
