/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import ItemNotification from './../components/ItemNotification';
import {db} from './../commons/constants';
import {obtenerCodigoUsuarioLogueado} from './../commons/user';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class InteresesView extends Component{

  
  constructor(){
    super();
    this.state = {
      listaNotificaciones: []
    }
  }

  componentWillMount = () =>{
    let that = this;
    //Brayan: Obtenemos la lista de notificaciones
    db.collection("notificaciones/").where('codigoReceptor', '==', obtenerCodigoUsuarioLogueado()).get()
      .then(function(querySnapshot) {
        let notificaciones = [];
        querySnapshot.forEach(function(doc) {
          notificaciones.push(doc.data());
        });
        that.setState({listaNotificaciones: notificaciones});
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          data={this.state.listaNotificaciones}
          style={{paddingTop: 15}}
          renderItem={({item}) => <ItemNotification notificacion={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});
