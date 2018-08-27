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

export default class ItemImageCarrusel extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>{this.props.event(this.props.imagen.indice)}}>
        <View style={styles.containerRoot}>
          <View style={styles.container}>
            <Image style={styles.banner} source={{uri: this.props.imagen.url}}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderColor: '#DDD', 
    borderWidth: 1,
  },
  container:{
    alignItems: 'center',
    height: 90,
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
  },
  containerRoot:{
    width: 130,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
});