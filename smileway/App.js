/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Config from './src/Config';

type Props = {};

class App extends Component<Props> {

  abrirVistaNotificaciones = () =>{
    Actions.notificaciones({});
  }

  abrirVistaMensajes = () =>{
    Actions.mensajes({});
  }

  mostrarBarraBusqueda = ()=>{

  }

  render() {
    return (
      <Provider store={store}>
        <Config/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});

export default App;
