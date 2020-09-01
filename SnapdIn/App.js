import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Email } from './components/accountManagement/email';
import { SignUp } from './components/accountManagement/signUp';

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
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

export default App;
