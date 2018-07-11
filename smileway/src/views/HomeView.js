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
  ScrollView,
  StatusBar
} from 'react-native';

export default class HomeView extends Component{

  
  constructor(){
    super();
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.layout}>
          <StatusBar barStyle="light-content"/>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.carrusel}>
              <TipsCarrusel/>
            </View>
            <UserCarrusel/>
            <UniversitiesCarrusel/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  layout:{
    backgroundColor: '#EEE'
  },
  root: {
    backgroundColor: '#1a84ab',
    paddingTop: 70
  },
  carrusel:{
    paddingTop: 30,
    backgroundColor: '#1a84ab'
  }
});
