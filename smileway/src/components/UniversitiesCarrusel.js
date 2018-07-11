/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemUniversitiesCarrusel from './ItemUniversitiesCarrusel';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class UniversitiesCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Instituciones universitarias</Text>
          <Text style={styles.opcion}>Mostrar todas <Icon name="ios-arrow-forward"/></Text>
        </View>
        <View style={styles.carrusel}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
            <ItemUniversitiesCarrusel/>
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
    marginTop: 10,
    paddingLeft: 10
  },
  carrusel: {
    flexDirection: 'row',
  }
});