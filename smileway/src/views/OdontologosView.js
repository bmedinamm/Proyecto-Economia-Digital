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
      <View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          handleResults={this._handleResults}
          showOnLoad
          placeholder="Buscar..."
        />
        <TouchableOpacity onPress={this.props.prueba}><Text>Prueba</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default connect(mapStateToProps)(OdontologosView);
