/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ItemUserCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.containerRoot}>
        <View style={styles.container}>
          <Image style={styles.imagen} source={require('./../assets/img/woman.jpg')}/>
          <Text style={styles.text}>Endodoncia</Text>
          <Text style={styles.universidad}>UNAH</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    height: 100,
  },
  universidad: {
    fontSize: 10,
  },
  text: {
    fontSize: 11,
  },
  imagen: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  containerRoot:{
    width: 90,
    height: 100,
    paddingTop: 10
  }
});