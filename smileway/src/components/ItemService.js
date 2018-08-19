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
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ItemService extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={() => {
          this.props.config(this.props.servicio.codigo)
        }}>
        <View style={styles.containerRoot}>
          {this.props.servicio.seleccionado ? <Icon style={styles.icon1} name="ios-checkmark-circle" />: <Icon style={styles.icon1} name="ios-checkmark-circle-outline" />}
          <Text style={styles.text}>{this.props.servicio.nombre}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    fontSize: 50,
    color: '#d35400', 
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#606060',
    fontSize: 12
  },
  containerRoot: {
    height: 110,
    width: 100,
    borderColor: '#7f8c8d', 
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    padding: 10
  }
});