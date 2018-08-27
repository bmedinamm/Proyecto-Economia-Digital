/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import ItemNotification from './../components/ItemNotification';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class InteresesView extends Component{

  
  constructor(){
    super();
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          data={[
            {},{},{},{}
          ]}
          style={{paddingTop: 15}}
          renderItem={({item}) => <ItemNotification user={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});
