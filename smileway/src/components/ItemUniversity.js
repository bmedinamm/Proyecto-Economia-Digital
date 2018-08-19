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

export default class ItemUniversity extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {this.props.config.filtrarRegistros(this.props.university.codigo, undefined)}}>
        <View style={styles.containerRoot}>
          <View style={styles.container}>
            <Image style={styles.banner} source={{uri: this.props.university.banner}}/>
            <View style={styles.layout}>
              <Image style={styles.imagen} source={{uri: this.props.university.imagen}}/>
              <Text style={styles.text}>{this.props.university.nombre}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    paddingTop: 10
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
    color: '#FFF',
    width: '90%'
  },
  imagen: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  containerRoot:{
    width: 130,
    height: 125,
  }
});