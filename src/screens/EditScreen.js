import {Settings, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Context} from '../context/BlogContext';

const EditScreen = ({route}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={value => setTitle(value)} />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
