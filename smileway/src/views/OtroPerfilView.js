/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements';
import ImagesCarrusel from './../components/ImagesCarrusel';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  AppRegistry, 
  FlatList,
} from 'react-native';

export default class OtroPerfilView extends Component{

  
  constructor(){
    super();
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

  render() {
    return (
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
            </View>
          </View>
          <View style={styles.collegeInformatio}> 
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Educación</Text>
            </View>
            <View style={styles.collegeContent}>
              <View style={styles.imgCollegeContent}>
                <Image style={styles.imagenCollege} source={{uri: this.props.universidad.imagen}}/>
              </View>
              <View style={styles.informationCollegeContent}>
                <Text style={styles.college}>{this.props.universidad.nombre}</Text>
                <Text>{this.props.universidad.anioInicial} - 2018</Text>
              </View>
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Servicios brindados</Text>
            </View>
            <FlatList
              data={[
                {key: 'Endodoncia'},
                {key: 'Periodoncia'},
                {key: 'Periodontopatia'}
              ]}
              renderItem={({item}) =>
                <TouchableOpacity> 
                  <View style={styles.itemList}>
                    <View style={styles.iconListContent}>
                      <Icon style={styles.iconItem} name="md-checkmark-circle-outline"/>
                    </View>
                    <View style={styles.informationListContent}>
                      <View style={styles.content1}>
                        <Text style={styles.txt1Item}>{item.key}</Text>
                        <Text style={styles.txt2Item}>Tratamiento gratuito</Text>
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
            <View style={[styles.headerContainer, {marginTop: 20}]}>
              <Text style={styles.header}>Galería de imágenes</Text>
            </View>
            <ImagesCarrusel/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  editIcon: {
    fontSize: 20,
    marginRight: 20
  },
  imagenCollege: {
    height: 55,
    width: 55,
    marginTop: 15
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
    justifyContent: 'space-between'
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
    fontWeight: '500'
  },
  information: {
    flexDirection: 'row',
    padding: 10
  },
  informationContainer: {
    flex: 4.5,
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center'
  },
  rootContainer: {
    backgroundColor: '#FFF',
    flex: 1
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
