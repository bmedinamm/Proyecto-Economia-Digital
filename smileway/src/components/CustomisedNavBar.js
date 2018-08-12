/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemUserCarrusel from './ItemUserCarrusel';
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

export default class CustomisedNavBar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <Icon name="ios-arrow-forward"/>
        </View>
        <View>
          <Text>Explorar</Text>
        </View>
        <View>
          <Icon name="ios-arrow-forward"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});