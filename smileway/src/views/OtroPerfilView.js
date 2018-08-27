/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements';
import Galery from './../components/Galery';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import ItemService from './../components/ItemService';
import Button from 'apsl-react-native-button'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  AppRegistry, 
  FlatList,
  Modal,
  Dimensions,
} from 'react-native';

export default class OtroPerfilView extends Component{

  
  constructor(){
    super();
    this.state = {
      listaImagenes: [],
      listaServicios: [],
      mostrarModalGaleria: false,
      mostrarModalServicio: false,
      index: 0,
      routes: [
        { key: 'first', title: 'Información' },
        { key: 'second', title: 'Galería' },
      ],
    }
    this.list = [
      {
        title: 'Endodoncia',
        icon: 'av-timer'
      },
      {
        title: 'Periodoncia',
        icon: 'flight-takeoff'
      }  
    ]
  }

  renderServicios = () => {
    let list = [];
    for(let i = 0; i<this.props.listaServicios.length; i++){
      list.push(<ItemService config={{event: () => {}, width: 130}} servicio={this.props.listaServicios[i]}/>)
    }
    return list;
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <ScrollView>
          <View style={styles.rootContainer}>
            <View style={styles.information}>
              <View style={styles.imageContainer}>
                <Image style={styles.imagen} source={{uri: this.props.imagen}}/>
              </View>
              <View style={styles.informationContainer}>
                <Text style={styles.name}>{this.props.nombre}</Text>
                <Text style={styles.text}>{this.props.correo}</Text>
                <Text style={styles.text}>{this.props.telefono}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.imagenCollege} source={{uri: this.props.universidad.imagen}}/>
                  <Text style={{marginLeft: 5}}>{this.props.universidad.nombre}</Text>
                </View>
                <Text>Periodo {this.props.universidad.anioInicial} - 2018</Text>
                <Button style={{width: '35%', height: 30, alignSelf: 'center', marginTop: 10}} textStyle={{fontSize: 16}}>
                  Reservar cita
                </Button>
              </View>
            </View>
            <View style={[styles.headerContainer]}>
                <Text style={styles.header}>Servicios brindados</Text>
              </View>
              <FlatList
                  data={this.props.listaServicios}
                  renderItem={({item}) =>
                    <TouchableOpacity onPress={()=>{this.setState({mostrarModalServicio: true})}}> 
                      <View style={styles.itemList}>
                        <View style={styles.iconListContent}>
                          <Icon style={styles.iconItem} name="md-checkmark-circle-outline"/>
                        </View>
                        <View style={styles.informationListContent}>
                          <View style={styles.content1}>
                            <Text style={styles.txt1Item}>{item.nombre}</Text>
                            <Text style={styles.txt2Item}>{item.costo}</Text>
                          </View>
                          <View style={styles.content2}>
                            <Text style={styles.more}>Más información</Text>
                            <Icon style={styles.moreIcon} name="ios-arrow-forward"/>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  }
                />
              <View style={[styles.headerContainer]}>
                <Text style={styles.header}>Galería de imágenes</Text>
              </View>
              <Galery odontologo={{codigo: this.props.codigo}}/>
          </View>
        </ScrollView>
        /*Inicio de modal para filtros de servicios*/
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.mostrarModalServicio}>
          <View style={{flex: 1}}>
              <ScrollView contentContainerStyle={{paddingTop: 80}}>
                
              </ScrollView>
              <View style={styles.closeContent}>
                <TouchableOpacity onPress={() => {this.setState({mostrarModalServicio: false})}}>
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
    backgroundColor: '#FFF',
    width: '100%'
  },
  closeIcon: {
    color: '#000',
    fontSize: 30
  },
  gridServices: {
    flex: 1, 
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  iconTab: {
    fontSize: 20
  },
  textTab: {
    fontSize: 16,
    marginLeft: 5
  },
  moreIcon: {
    fontSize: 30,
    marginTop: 4
  },
  more: {
    fontSize: 11,
    marginTop: 12,
    color: '#606060',
  },
  content1: {
    flex: 6,
  },
  content2: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 10
  },
  txt1Item: {
    fontSize: 17
  },
  txt2Item: {
    marginTop: 2,
    color: '#606060',
  },
  iconItem: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 7
  },
  informationListContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 10,
    flex: 9,
    flexDirection: 'row'
  },
  iconListContent: {
    flex: 1,
    alignItems: 'center'
  },
  itemList: {
    flexDirection: 'row',
    paddingTop: 10,
    flex: 1,
    paddingLeft: 20
  },
  editIcon: {
    fontSize: 20,
    marginRight: 20
  },
  imagenCollege: {
    height: 15,
    width: 15,
  },
  collegeContent: {
    flexDirection: 'row',
    marginBottom: 20
  },
  informationCollegeContent: {
    flex: 5,
    justifyContent: 'center'
  },
  imgCollegeContent: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 20
  },
  collegeInformatio: {
    margin: 10
  },
  college: {
    fontSize: 15,
    marginTop: 10
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10
  },
  text: {
    marginTop: 5,
    fontSize: 14
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 30
  },
  information: {
    padding: 10,
    height: 250,
  },
  informationContainer: {
    flex: 4.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center'
  },
  rootContainer: {
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  imagen: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: '#DDD', 
    borderWidth: 1,
    backgroundColor: '#efefef'
  },
});
