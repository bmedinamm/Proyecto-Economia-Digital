/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Orientation from 'react-native-orientation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const horizontalMargin = 20;
const slideWidth = 280;
let sliderWidth = Dimensions.get('window').width;
let itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
const ICONOS = [];

export default class TipsCarrusel extends Component {

  constructor(props){
    super(props);
    this.listaItemMenu = [
  {
    codigo: 1,
    titulo: 'Item 1', 
    background: '#03a9f4', 
    icono: 'icono1', 
    height: 50, 
    marginLeft: -15, 
    marginTop: 10,
    abrirVista: () => {
    }
  },
  {
    codigo: 2,
    titulo: 'Item 2', 
    background: '#3f51b5', 
    icono: 'icono2', 
    height: 50, 
    marginLeft: -10, 
    marginTop: 10
  },
  {
    codigo: 3,
    titulo: 'Item 3', 
    background: '#8326be', 
    icono: 'icono3', 
    height: 42, 
    marginLeft: 0, 
    marginTop: 10
  },
  {
    codigo: 4,
    titulo: 'Item 4', 
    background: '#8bc34a', 
    icono: 'icono4', 
    height: 65, 
    marginLeft: 5, 
    marginTop: 5
  },
  {
    codigo: 5,
    titulo: 'Item 5', 
    background: '#ff9800', 
    icono: 'icono5', 
    height: 55, 
    marginLeft: -10, 
    marginTop: 0
  },
  {
    codigo: 6,
    titulo: 'Item 6', 
    background: '#e1176e', 
    icono: 'icono6', 
    height: 55, 
    marginLeft: -10, 
    marginTop: 0
  },
  {
    codigo: 7,
    titulo: 'Item 7', 
    background: '#c5da18', 
    icono: 'icono7', 
    height: 55, 
    marginLeft: -10, 
    marginTop: 10
  },
  {
    codigo: 8,
    titulo: 'Item 8', 
    background: '#00bcd4', 
    icono: 'icono8', 
    height: 50, 
    marginLeft: 0, 
    marginTop: 10
  }
];
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange)
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange)
  }

  //Brayan: Funcion que se ejecuta cuando el dispositivo cambia de orientacion
  _orientationDidChange(orientation) {
    //Brayan: Modificamos dinamicamente los anchos de los elemementos del slides
    sliderWidth = Dimensions.get('window').width;
    itemWidth = slideWidth + horizontalMargin * 2;
  }

  _renderItem ({item, index}) {
    return (
        <TouchableOpacity style={styles.slide} onPress={item.abrirVista}>
            <Text style={styles.titleItem}>{ item.titulo }</Text>
            <Image style={[styles.iconoItemMenu, {height: item.height, marginLeft: item.marginLeft, marginTop: item.marginTop}]} source={ICONOS[item.icono]}/>
        </TouchableOpacity>
    );
  }


  get pagination () {
    let activeSlide = 0;
    if(this.state != null)
      activeSlide  = this.state.activeSlide;

    return (
        <Pagination
          dotsLength={this.listaItemMenu.length}
          activeDotIndex={activeSlide}
          carouselRef={this._slider1Ref}
        />
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={this.listaItemMenu}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        { this.pagination }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
  },
  iconoItemMenu: {
    marginTop: 10,
    resizeMode: 'contain', 
    alignSelf: 'flex-start'
  },
  titleItem: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
    color: '#FFF',
    fontWeight: '800',
    fontFamily: 'Avenir'
  },
  imgItemMenu: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  layoutCarrusel: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  slide: {
      width: itemWidth,
      height: itemHeight,
      backgroundColor: '#CCC'
  },
  slideInnerContainer: {
      width: slideWidth,
      flex: 1
      // other styles for the inner container
  },
});