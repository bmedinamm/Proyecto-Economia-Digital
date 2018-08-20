/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ItemImageCarrusel from './ItemImageCarrusel';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import {db} from './../commons/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ImagesCarrusel extends Component {

  constructor(props){
    super(props);
    this.state = {
      listaImagenes: [],
      mostrarModalGaleria: false,
      indiceGaleria: 0,
      setIndiceGaleria: (indice) =>{
        this.setState({indiceGaleria: indice, mostrarModalGaleria: true});
      }
    }
  }

  componentWillMount = () =>{
    let that = this;
    db.collection("galeriasImagenes/").where('codigoOdontologo', '==', this.props.odontologo.codigo).get()
      .then(function(querySnapshot) {
        let imagenes = [];
        querySnapshot.forEach(function(doc) {
          let galeria = doc.data();
          for(let i = 0; i<galeria.imagenes.length; i++)
            imagenes.push({url: galeria.imagenes[i], indice: i, });
        });
        that.setState({listaImagenes: imagenes});
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
  }

  renderGalery = () => {
    let list = [];
    for(let i = 0; i<this.state.listaImagenes.length; i++){
      list.push(<ItemImageCarrusel event={(indice)=>{this.state.setIndiceGaleria(indice)}} imagen={this.state.listaImagenes[i]}/>)
    }
    return list;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carrusel}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.renderGalery()}
          </ScrollView>
        </View>
        /*Inicio de modal para filtros de servicios*/
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.mostrarModalGaleria}>
          <View>
              <View style={styles.closeContent}>
                <TouchableOpacity onPress={() => {this.setState({mostrarModalGaleria: false})}}>
                  <Icon style={styles.closeIcon} name="md-close"/>
                </TouchableOpacity>
              </View>
          </View>
          <ImageViewer 
            imageUrls={this.state.listaImagenes}
            enableSwipeDown={true}
            index={this.state.indiceGaleria}
            onSwipeDown={()=>{this.setState({mostrarModalGaleria: false})}}
          />
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
    color: '#FFF',
    fontSize: 30
  },
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
    marginTop: 10,
    paddingLeft: 10
  },
  carrusel: {
    flexDirection: 'row',
  }
});