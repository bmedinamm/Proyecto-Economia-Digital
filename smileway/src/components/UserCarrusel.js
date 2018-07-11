/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemUserCarrusel from './ItemUserCarrusel';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class UserCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Odontólogos universitarios</Text>
          <Text style={styles.opcion}>Mostrar todos <Icon name="ios-arrow-forward"/></Text>
        </View>
        <View style={styles.carrusel}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
            <ItemUserCarrusel/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opcion: {
    marginTop: 10,
    marginRight: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titulo:{
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  container:{
    backgroundColor: '#FFF',
    marginTop: 10
  },
  carrusel: {
    flexDirection: 'row',
  }
});