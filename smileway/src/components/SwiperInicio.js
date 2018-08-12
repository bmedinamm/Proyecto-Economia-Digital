import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

class SwiperInicio extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/001-tooth.png')} />
          <Text style={styles.text}>¡Bienvenido!</Text>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/050-teeth-1.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Con </Text>
            <Text style={styles.brandText}>SmileWay </Text>
            <Text style={styles.smallText}>podrás: </Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/011-dentist-chair.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Buscar clínicas cerca de tí</Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/018-dentist-mask.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Contactar a sus dentistas</Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/020-appointment.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Gestionar tus citas</Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/028-dental-hygiene.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Y mucho más</Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../assets/img/swiperIcons/010-protection.png')} />
          <View style={styles.textView}>
            <Text style={styles.smallText}>Comienza a utilizar </Text>
            <Text style={styles.brandText}>SmileWay</Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <TouchableOpacity style={styles.logInButton}
            onPress={()=>Actions.inicioSesionView()}>
            <Text style={styles.logIntext}>Inicia sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}
            onPress={()=>Actions.registrarseView()}>
            <Text style={styles.registerText}>Regístrate</Text>
          </TouchableOpacity>
          <View style={styles.lineaView}>
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Ir al tutorial</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  text: {
    color: '#0053BF',
    fontSize: 30,
  },
  smallText: {
    color: '#0053BF',
    fontSize: 20,
  },
  brandText: {
    color: '#0053BF',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  textView: {
    flexDirection: 'row',
  },
  logIntext: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#FFF'
  },
  registerText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#0496FF'
  },
  logInButton: {
    backgroundColor: '#0496FF',
    width: '65%',
    margin: 8,
    borderColor: '#0496FF',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  },
  registerButton: {
    backgroundColor: '#FFFF',
    width: '65%',
    margin: 8,
    borderColor: '#0496FF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  },
  lineaView: {
    margin: 20,
    borderBottomColor: '#0496FF',
    borderBottomWidth: 1,
    width: '65%',
  },

})

export default SwiperInicio;