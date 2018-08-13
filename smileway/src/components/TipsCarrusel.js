/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemTipCarrusel from './ItemTipCarrusel';
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
import {db} from './../commons/constants';

export default class TipsCarrusel extends Component {

  constructor(props){
    super(props);

    this.state = {
      listaTips: []
    }
    let that = this;
    db.collection("tips/").get()
      .then(function(querySnapshot) {
        let tips = [];
        querySnapshot.forEach(function(doc) {
          tips.push(doc.data());
        });
        that.setState({listaTips: tips});
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
  }

  renderTips = () => {
    let list = [];
    for(let i = 0; i<this.state.listaTips.length; i++){
      list.push(<ItemTipCarrusel tips={this.state.listaTips[i]}/>)
    }
    return list;
  }

  abrirVistaOdontologos(){
    Actions.odontologos({});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Aprende sobre odontología</Text>
        </View>
        <View style={styles.carrusel}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.renderTips()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opcion: {
    marginTop: 10,
    marginRight: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titulo:{
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  container:{
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  carrusel: {
    flexDirection: 'row',
  }
});