/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView

} from 'react-native';
import Swiper from 'react-native-swiper';
import { CheckBox } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class RegistrarseView extends Component {


  constructor() {
    super();
    this.state = {
      odontologo: true,
      paciente: false
    }
  }

  validarRegistro = () => {
    Actions.inicioSesionView();
  }

  __setPaciente = () => {
    this.setState({
      odontologo: false,
      paciente: true
    })
  }

  __setOdontologo = () => {
    this.setState({
      odontologo: true,
      paciente: false
    })
  }

  render() {
    return (
      <Swiper showsButtons={true} loop={false}>
        <View style={styles.slide1}>
          <View style={styles.slide1Content}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Eres:</Text>
            </View>
            <View style={styles.imagesRow}>
              <View style={styles.imageAndChecbox}>
                <TouchableOpacity onPress={() => this.__setOdontologo()}>
                  <Image style={styles.image} source={require('../assets/img/avatars/dentist-avatar.png')} />
                </TouchableOpacity>
                <CheckBox
                  onPress={() => this.__setOdontologo()}
                  title='Odontólogo'
                  checked={this.state.odontologo}
                  checkedColor='#1a84ab'
                  containerStyle={{ backgroundColor: '#00000000' }}
                />
              </View>
              <View style={styles.imageAndChecbox}>
                <TouchableOpacity onPress={() => this.__setPaciente()}>
                  <Image style={styles.image} source={require('../assets/img/avatars/paciente-avatar.png')} />
                </TouchableOpacity>
                <CheckBox
                  onPress={() => this.__setPaciente()}
                  title='Paciente'
                  checked={this.state.paciente}
                  checkedColor='#1a84ab'
                  containerStyle={{ backgroundColor: '#00000000' }}
                />
              </View>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView style={styles.mainView} behavior="padding">
          <View style={styles.registroForm}>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Primer Nombre</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='Primer Nombre'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Segundo Nombre</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='Segundo Nombre'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Primer Apellido</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='Primer Apellido'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Segundo Apellido</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='Segundo Apellido'
                placeholderTextColor='gray' />
            </View>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.mainView} behavior="padding">
          <View style={styles.registroForm}>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Correo</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='correo@unah.hn'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput style={styles.textoInput}
                secureTextEntry={true} 
                underlineColorAndroid='transparent'
                placeholder='Mínimo 6 caracteres y 1 número'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Confirmar Contraseña</Text>
              <TextInput style={styles.textoInput}
                secureTextEntry={true} 
                underlineColorAndroid='transparent'
                placeholder='Confirmar contraseña'
                placeholderTextColor='gray' />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput style={styles.textoInput}
                underlineColorAndroid='transparent'
                placeholder='+504 9999-9999'
                placeholderTextColor='gray' />
            </View>
            <TouchableOpacity style={styles.logInButton}
              onPress={()=>this.validarRegistro()}>
                <Text style={styles.logIntext}>Registrarme</Text>
            </TouchableOpacity>
          </View>  
        </KeyboardAvoidingView>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registroForm: {
    width: '90%',
    height: '85%',
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    color: '#00577c',
    fontSize: 25,
  },
  labelAndInput: {
    width: '90%',
    margin: 5
  },
  label: {
    color: '#1a84ab',
    fontSize: 18
  },
  textoInput: {
    width: '100%',
    marginVertical: 5,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#1a84ab',
    borderColor: '#1a84ab',
    borderWidth: 1,
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  slide1: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1Content: {
    height: '85%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    marginBottom: 20,
  },
  imagesRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  imageAndChecbox: {
    alignItems: 'center',
  },
  logInButton: {
    backgroundColor: '#0496FF',
    width: '90%',
    margin: 8,
    borderColor: '#0496FF',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  },
  logIntext: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#FFF'
  },
});
