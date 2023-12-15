import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Forgotpassword from './screen/Forgotpassword';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
     <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
            component={Home}
            name="Home"
            options={{headerShown:false}}
           />
           <Stack.Screen
            component={Login}
            name='Login'
            options={{headerShown:false}}
           />
           <Stack.Screen
            component={Signup}
            name='Signup'
           />
           <Stack.Screen
            component={Forgotpassword}
            name='Forgotpassword'
           />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

