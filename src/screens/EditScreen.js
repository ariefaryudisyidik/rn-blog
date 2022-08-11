import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return <BlogPostForm />;
};

export default EditScreen;

const styles = StyleSheet.create({});
