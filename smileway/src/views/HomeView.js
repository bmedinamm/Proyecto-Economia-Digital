/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import UserCarrusel from './../components/UserCarrusel';
import TipsCarrusel from './../components/TipsCarrusel';
import UniversitiesCarrusel from './../components/UniversitiesCarrusel';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class HomeView extends Component{

  
  constructor(){
    super();
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.carrusel}>
            <TipsCarrusel/>
          </View>
          <UserCarrusel/>
          <UniversitiesCarrusel/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  root: {

  },
  carrusel:{
    paddingTop: 30,
    backgroundColor: '#FFF'
  }
});
