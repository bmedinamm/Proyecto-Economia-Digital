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

export default class ItemUniversitiesCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.containerRoot}>
        <View style={styles.container}>
          <Image style={styles.banner} source={require('./../assets/img/banner.jpg')}/>
          <View style={styles.layout}>
            <Image style={styles.imagen} source={require('./../assets/img/unah.png')}/>
            <Text style={styles.text}>Facultad odontología UNAH</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(1,1,1,0.5)',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 15
  },
  banner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
  container:{
    alignItems: 'center',
    height: 90,
    marginRight: 10,
    borderRadius: 10,
  },
  universidad: {
    fontSize: 10,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: '#FFF'
  },
  imagen: {
    height: 40,
    width: 40,
    borderRadius: '20%',
  },
  containerRoot:{
    width: 135,
    height: 130,
    paddingTop: 10,
  }
});