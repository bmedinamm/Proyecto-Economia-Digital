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

export default class ItemTipCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.containerRoot}>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Image style={styles.imagen} source={require('./../assets/img/endodoncia.png')}/>
            </View>
            <Text style={styles.text}>Endodoncia</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    height: 68,
    width: 68,
    borderRadius: 35,
    borderColor: '#D770AD', 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    borderColor: '#DDD', 
    borderWidth: 1,
  },
  containerRoot:{
    width: 90,
    height: 100,
    paddingTop: 10
  }
});