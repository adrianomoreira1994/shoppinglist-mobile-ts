import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';

let Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerShown: false
      }} name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;