/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import {connect} from 'react-redux';
import store from './../redux/store';
import ItemUserList from './../components/ItemUserList';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

mapStateToProps = (state)=>{
  return{
    prueba: state.pruebaStore
  }
}

class OdontologosView extends Component{

  
  constructor(){
    super();
    store.dispatch({
      type: 'SEACH_BAR_ODONTOLOGOS',
      payload: {
        mostrarBarra: ()=>{
          alert('Hola desde odontologo');
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
        <ItemUserList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  searchBar: {
    position: 'absolute',
  }
});

const searchBar = StyleSheet.create({position: 'absolute'});

export default connect(mapStateToProps)(OdontologosView);
