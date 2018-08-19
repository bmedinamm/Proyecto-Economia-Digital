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
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemUniversity from './ItemUniversity';
import {db} from './../commons/constants';

export default class UniversitiesList extends Component {

  constructor(props){
    super(props);
    this.state = {
      listaUniversidades: []
    }
  }

  componentWillMount = () => {
    this.filtrarUniversidades('')
  }
  
  //Brayan: Funcion que se ejecuta cada ves que se modifica el valor del search input
  filtrarUniversidades = (name) => {
    if(name != undefined){
      let that = this;
      db.collection("universidades/").where('siglas', '>=', name.toUpperCase()).get()
        .then(function(querySnapshot) {
          let universidades = [];
          querySnapshot.forEach(function(doc) {
            universidades.push(doc.data());
          });
          that.setState({listaUniversidades: universidades});
        })
        .catch(function(error) {
            alert('Ha ocurrido un error, intentelo mas tarde')
        });
    }
  }

  render() {
      return (
        <View style={{flex: 1, marginTop: 80}}>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <TextInput 
              style={styles.inputSearch}
              placeholder="Buscar por siglas..."
              value={this.props.inputSearch}
              onChangeText={(value) => {
                this.filtrarUniversidades(value)
              }}
            />
            <Icon style={styles.iconSearch} name="md-search"/>
          </View>
          <View style={{flex: 1, paddingTop: 20}}>
            <FlatList
              data={this.state.listaUniversidades}
              style={{paddingLeft: 15, flex: 1, paddingBottom: 30}}
              numColumns={3}
              renderItem={({item}) => <ItemUniversity config={{filtrarRegistros: this.props.config.filtrarRegistros}} university={item}/>}
            />
          </View>
          <View style={styles.floatButton}>
            <TouchableOpacity onPress={() => {this.props.config.filtrarRegistros(undefined, undefined)}} style={{flexDirection: 'row'}}>
              <Icon style={styles.icon1} name="md-trash" />
              <Text style={styles.txt3}>Remover filtro</Text>
            </TouchableOpacity>
        </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  icon1: {
    fontSize: 18,
    color: '#3BAFDA'
  },
  txt3: {
    fontSize: 16,
    marginLeft: 10,
    color: '#3BAFDA'
  },
  floatButton: {
    position: 'fixe',
    width: 230,
    height: 45,
    alignSelf: 'center',
    bottom: 30,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
    borderColor: '#3BAFDA', 
    borderWidth: 1.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputSearch: {
    backgroundColor: '#ddd', 
    height: 35,
    paddingLeft: 30
  },
  iconSearch: {
    position: 'absolute',
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10
  },
  rowUniversities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});