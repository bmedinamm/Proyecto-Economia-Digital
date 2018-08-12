/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemTipCarrusel from './ItemTipCarrusel';
import {Actions} from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TipsCarrusel extends Component {

  constructor(props){
    super(props);
  }

  abrirVistaOdontologos(){
    Actions.odontologos({});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Tips odontológicos</Text>
        </View>
        <View style={styles.carrusel}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
            <ItemTipCarrusel/>
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
    marginBottom: 10
  },
  carrusel: {
    flexDirection: 'row',
  }
});