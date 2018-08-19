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

export default class ItemService extends Component {

  constructor(props){
    super(props);
    this.state = {
      seleccionado: false
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {this.setState({seleccionado: !this.state.seleccionado})}}>
        <View style={styles.containerRoot}>
          {this.state.seleccionado ? <Icon style={styles.icon1} name="ios-checkmark-circle" />: <Icon style={styles.icon1} name="ios-checkmark-circle-outline" />}
          <Text style={styles.text}>Endodoncia</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    fontSize: 50,
    color: '#37BC9B', 
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#606060',
  },
  containerRoot: {
    height: 110,
    width: 100,
    borderColor: '#37BC9B', 
    borderWidth: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15
  }
});