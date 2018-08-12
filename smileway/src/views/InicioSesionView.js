import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo';
import {Actions} from 'react-native-router-flux';

//Variables de ancho y alto
var { width, height } = Dimensions.get('window');

export default class InicioSesionView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <LinearGradient colors={['#00577c', '#1a84ab']} style={styles.container}>
        <Text style={styles.tituloText}>SmileWay</Text>
        <TextInput style={styles.textoInput}
          underlineColorAndroid='transparent'
          placeholder='Telefono'
          placeholderTextColor='rgba(255,255,255,0.4)' />
        <TextInput style={styles.textoInput}
          underlineColorAndroid='transparent'
          placeholder='Contraseña'
          placeholderTextColor='rgba(255,255,255,0.4)' />
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logIntext}>Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.whiteText}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>
        <View style={styles.lineaView}>
        </View>
        <Icon.Button name="logo-facebook">
          <Text style={styles.whiteText}>Login with Facebook</Text>
        </Icon.Button>
        <TouchableOpacity style={styles.footer}
          onPress={()=>Actions.registrarseView()}>
          <Text style={styles.whiteText}>¿Aún no tienes cuenta? </Text>
          <Text style={[styles.whiteText,styles.bold]}>Regístrate aquí.</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tituloText: {
    fontSize: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Roboto'
  },
  logIntext: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#FFF'
  },
  registroContainer: {
    margin: 10
  },
  textoInput: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    margin: 7,
    height: 45,
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white'
  },
  logInButton: {
    backgroundColor: '#5cb4dd',
    width: '80%',
    margin: 8,
    borderColor: '#5cb4dd',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  },
  bold: {
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  whiteText: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: '#FFF'
  },
  lineaView: {
    margin: 20,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    width: width - 50,
  },
  footer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
});