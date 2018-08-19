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
import UniversitiesList from './../components/UniversitiesList';
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
} from 'react-native';

export default class HomeView extends Component{

  
  constructor(){
    super();
    this.state = {
      listaOdontologos: [],
      listaUniversidades: [],
      mostrarSpinner: true,
      mostrarFiltroUniversidades: false,
      mostrarFiltroServicios: false,
      filtrarRegistros: (codigoUniversidad, codigoServicio) => {
        this.setState({mostrarFiltroUniversidades: false, mostrarFiltroServicios: false})
        this._onRefresh(codigoUniversidad, codigoServicio);
      }
    }
    this._onRefresh(undefined, undefined);
  }

  //Brayan: Funcion que se ejecuta al hacer scroll hacia abajo
  _onRefresh = (codigoUniversidad, codigoServicio) => {
    this.setState({mostrarSpinner: true});
    let that = this;
    let referencia;
    
    //Se aplica cuando solo se quiere filtrar por universidad
    if(codigoUniversidad != undefined && codigoServicio == undefined)
      referencia =  db.collection("odontologos/").where('universidad.codigo', '==', codigoUniversidad)
    else
      referencia = db.collection("odontologos/");

    //Aplicamos la referencia indicada
    referencia.get()
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

  renderUniversidades = () => {
    let list = [];
    for(let i = 0; i<this.state.listaTips.length; i++){
      list.push(<ItemTipCarrusel tips={this.state.listaTips[i]}/>)
    }
    return list;
  }

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
              <UniversitiesList config={{filtrarRegistros: this.state.filtrarRegistros}}/>
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
