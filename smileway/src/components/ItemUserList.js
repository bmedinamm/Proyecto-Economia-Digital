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
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ItemUserList extends Component {

  constructor(props){
    super(props);
  }
  
  abrirPerfilOdontologo = (odontologo) => {
    Actions.otroPerfil(odontologo);
  }

  render() {
      return (
        <TouchableOpacity onPress={()=>{this.abrirPerfilOdontologo(this.props.user)}} style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.containerRoot}>
            <View style={styles.container}>
              <Image style={styles.imagen} source={{uri: this.props.user.imagen}}/>
              <Text style={styles.text}>{this.props.user.nombreCorto}</Text>
              <Text style={styles.universidad}>{this.props.user.cantidadServicios} servicios</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }


const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    height: 100,
  },
  universidad: {
    fontSize: 12,
    color: '#909090'
  },
  text: {
    fontSize: 13.5,
    fontWeight: '500',
    color: '#606060',
    marginTop: 5,
    textAlign: 'center'
  },
  imagen: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: '#DDD', 
    borderWidth: 1,
    backgroundColor: '#efefef'
  },
  containerRoot:{
    width: 90,
    height: 100,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 20,
  }
});