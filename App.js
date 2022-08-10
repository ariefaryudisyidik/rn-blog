import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{title: 'Index'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
