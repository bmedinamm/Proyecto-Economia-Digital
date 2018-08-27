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

export default class ItemNotification extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.col1}>
          <Image style={styles.imagen} source={{uri: this.props.notificacion.imagen}}/>
        </View>
        <View style={styles.col2}>
          <Text style={styles.nombre}>{this.props.notificacion.nombre}</Text>
          <Text style={styles.descripcion}>{this.props.notificacion.descripcion} <Text style={{fontWeight: '600'}}>{this.props.notificacion.fechaReservacion}</Text>. <Text style={styles.fecha}>Hace 1 minuto</Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descripcion: {
    color: '#606060',
  },
  fecha: {
    color: '#606060',
    fontSize: 12
  },
  nombre: {
    fontSize: 15,
    fontWeight: '600'
  },
  col1: {
    flex: 1.5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  col2: {
    flex: 7,
    justifyContent: 'center',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  root: {
    height: 75,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  imagen: {
    height: 55,
    width: 55,
    borderRadius: 28,
    borderColor: '#DDD', 
    borderWidth: 1,
    backgroundColor: '#efefef'
  }
});