import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => ({
            title: 'Blogs',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Create');
                }}>
                <Feather name="plus" size={24} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({navigation, route}) => ({
            headerRight: () => {
              const {id} = route.params;
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit', {id})}>
                  <EvilIcons name="pencil" size={24} />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
