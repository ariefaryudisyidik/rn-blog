import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EditScreen = ({route}) => {
  const {id} = route.params;

  return (
    <View>
      <Text>EditScreen - {id}</Text>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
