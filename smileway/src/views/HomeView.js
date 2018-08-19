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
import TipsCarrusel from './../components/TipsCarrusel';
import Button from 'apsl-react-native-button';
import {db} from './../commons/constants';
import ItemUniversity from './../components/ItemUniversity';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';

export default class HomeView extends Component{

  
  constructor(){
    super();
    this.state = {
      listaOdontologos: [],
      mostrarSpinner: false,
      mostrarFiltroUniversidades: false,
      mostrarFiltroServicios: false
    }
    this._onRefresh();
  }

  //Brayan: Funcion que se ejecuta al hacer scroll hacia abajo
  _onRefresh = () => {
    this.setState({mostrarSpinner: true});
    let that = this;
    //Obtenemos la lista de notas creadas por el usuario
    db.collection("odontologos/").get()
      .then(function(querySnapshot) {
        let odontologos = [];
        querySnapshot.forEach(function(doc) {
          odontologos.push(doc.data());
        });
        that.setState({listaOdontologos: odontologos});
        that.setState({mostrarSpinner: false});
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.mostrarSpinner}
              onRefresh={this._onRefresh}
            />
          }
         style={{flex: 1}}>
          <TipsCarrusel/>
          <View style={styles.rootContainer}>
            <FlatList
              data={this.state.listaOdontologos}
              style={{paddingLeft: 15, flex: 1, paddingBottom: 30}}
              numColumns={3}
              renderItem={({item}) => <ItemUserList user={item}/>}
            />
          </View>
        </ScrollView>
        <View style={styles.floatButton}>
            <View style={styles.float1}>
              <TouchableOpacity onPress={()=>{this.setState({mostrarFiltroUniversidades: true})}} style={{flexDirection: 'row'}}>
                <Icon style={styles.icon1} name="md-school"/>
                <Text style={styles.txt1}>Universidad</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txt3}>|</Text>
            <View style={styles.float2}>
              <TouchableOpacity onPress={()=>{this.setState({mostrarFiltroServicios: true})}}  style={{flexDirection: 'row'}}>
                <Icon style={styles.icon2} name="md-options"/>
                <Text style={styles.txt2}>Servicio</Text>
              </TouchableOpacity>
            </View>
        </View>

        /*Inicio de modal para filtros de universidad*/
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.mostrarFiltroUniversidades}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex: 1}}>
              <View style={styles.closeContent}>
                <TouchableOpacity onPress={() => {this.setState({mostrarFiltroUniversidades: false})}}>
                  <Icon style={styles.closeIcon} name="md-close"/>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 75, marginLeft: 10, marginRight: 10}}>
                <TextInput 
                  style={styles.inputSearch}
                  placeholder="Buscar..."
                />
                <Icon style={styles.iconSearch} name="md-search"/>
              </View>
              <View style={{flex: 1, paddingTop: 20}}>
                <ScrollView contentContainerStyle={styles.rowUniversities}>
                  <ItemUniversity/>
                  <ItemUniversity/>
                  <ItemUniversity/>
                  <ItemUniversity/>
                  <ItemUniversity/>
                  <ItemUniversity/>
                </ScrollView>
              </View>
          </View>
        </Modal>
        /*Fin de modal para filtros de universidad*/

        /*Inicio de modal para filtros de servicios*/
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.mostrarFiltroServicios}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex: 1}}>
              <View style={styles.closeContent}>
                <TouchableOpacity onPress={() => {this.setState({mostrarFiltroServicios: false})}}>
                  <Icon style={styles.closeIcon} name="md-close"/>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
        /*Fin de modal para filtros de servicios*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconSearch: {
    position: 'absolute',
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10
  },
  inputSearch: {
    backgroundColor: '#ddd', 
    height: 35,
    paddingLeft: 30
  },
  rowUniversities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeContent: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 30,
    position: 'absolute',
  },
  closeIcon: {
    color: '#000',
    fontSize: 30
  },
  txt3: {
    fontSize: 22,
    marginLeft: 10,
    color: '#3BAFDA'
  },
  txt1: {
    marginLeft: 5,
    fontSize: 13,
    color: '#3BAFDA',
    fontWeight: '600'
  },
  txt2: {
    marginLeft: 5,
    fontSize: 13,
    color: '#3BAFDA',
    fontWeight: '600'
  },
  icon1: {
    fontSize: 18,
    color: '#3BAFDA'
  },
  icon2: {
    fontSize: 18,
    color: '#3BAFDA'
  },
  float1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  float2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatButton: {
    position: 'fixe',
    width: 230,
    height: 45,
    alignSelf: 'center',
    bottom: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
    borderColor: '#3BAFDA', 
    borderWidth: 1.2,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20
  },
  searchBar: {
    position: 'absolute',
  }
});
