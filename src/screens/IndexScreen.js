import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather name="trash" style={styles.icon} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
