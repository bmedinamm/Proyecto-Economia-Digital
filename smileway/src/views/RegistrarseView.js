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
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator

} from 'react-native';
import Swiper from 'react-native-swiper';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { firebaseAuth, db } from '../commons/constants';
import { INITIAL_STATE } from '../commons/registroConstants';

export default class RegistrarseView extends Component {

  constructor() {
    super();

    this.state = INITIAL_STATE;

    console.ignoredYellowBox = ['Setting a timer'];

    this.inputHandle = this.inputHandle.bind(this);
    this.registrarUsuario = this.registrarUsuario.bind(this);
    this.resetViewState = this.resetViewState.bind(this);

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

  inputHandle = (text, type) => {
    const nombreRequerido = /^$|\d|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;
    const nombreNoRequerido = /\d|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password = /^(?=.*\d).{6,25}$/g;
    const phone = /^[+]*[(]{0,1}[0-9]{1,5}[)]{0,1}[-\s\./0-9]*$/g;

    switch (type) {

      case 'primerNombre': {
        let valido = !nombreRequerido.test(text);
        this.setState({
          primerNombreTouched: true,
          primerNombreValido: valido,
          primerNombre: text,
        })
        return;
      }

      case 'segundoNombre': {
        let valido = !nombreNoRequerido.test(text);
        this.setState({
          segundoNombreTouched: true,
          segundoNombreValido: valido,
          segundoNombre: text,
        })
        return;
      }

      case 'primerApellido': {
        let valido = !nombreRequerido.test(text);
        this.setState({
          primerApellidoTouched: true,
          primerApellidoValido: valido,
          primerApellido: text
        })
        return;
      }

      case 'segundoApellido': {
        let valido = !nombreNoRequerido.test(text);
        this.setState({
          segundoApellidoTouched: true,
          segundoApellidoValido: valido,
          segundoApellido: text,
        })
        return;
      }

      case 'email': {
        let valido = email.test(text);
        this.setState({
          emailTouched: true,
          emailValid: valido,
          email: text
        })
        return;
      }

      case 'password': {
        let valido = password.test(text);
        this.setState({
          passwordTouched: true,
          passwordValid: valido,
          password: text
        })
        return;
      }

      case 'confirm': {
        let valido = text === this.state.password;
        this.setState({
          confirmTouched: true,
          confirmValid: valido,
        })
        return;
      }

      case 'phone': {
        let valido = text.length >= 8 ? true : false;
        valido = valido && phone.test(text);
        this.setState({
          phoneTouched: true,
          phoneValid: valido,
          phone: text,
        })
        return;
      }

      default: {
        return;
      }
    }
  }

  registrarUsuario() {

    this.setState({ isLoading: true })

    let displayName = this.state.primerNombre + ' ' + this.state.primerApellido;
    let signUpPromise = firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((resp) => {
      //alert(JSON.stringify(resp));
      firebaseAuth.currentUser.updateProfile({
        displayName: displayName
      }).then(() => {
        let name = this.state.primerNombre + ' ' + this.state.segundoNombre + ' ' + this.state.primerApellido + ' ' + this.state.segundoApellido;
        let nombre = name.replace(/\s\s+/g, ' ');
        let userInfo = {
          correo: this.state.email,
          nombre: nombre,
          nombreCorto: this.state.primerNombre + ' ' + this.state.primerApellido,
          telefono: this.state.phone,
          codigo: resp.user.uid,
          universidad: {}
        }

        if (this.state.odontologo) {
          const ref = db.collection('odontologos/').doc();
          //userInfo.codigo = ref.id;
          ref.set(userInfo)
            .then((docRef) => {
              this.resetViewState();
              /*Alert.alert('Éxito', '¡Te has registrado exitosamente!', [
                { text: 'OK', onPress: () => Actions.homeView() }
              ]);*/
              Actions.homeView();
            })
            .catch((error) => {
              this.setState({ isLoading: false })
              console.log(error);
            });
        }
        else {
          const ref = db.collection('pacientes/').doc();
          //userInfo.codigo = ref.id;
          ref.set(userInfo)
            .then((docRef) => {
              this.resetViewState();
              Alert.alert('Éxito', '¡Te has registrado exitosamente!', [
                { text: 'OK', onPress: () => Actions.homeView() }
              ]);
            })
            .catch((error) => {
              this.setState({ isLoading: false })
              console.log(error);
            });
        }

        firebaseAuth.currentUser.sendEmailVerification().then(() => {
        }).catch((error) => {
          this.setState({
            isLoading: false
          })
          Alert.alert('Error', 'Ocurrió un error al enviar email de confirmación.');
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false
        })
        Alert.alert('Error', 'Ocurrió un error al actualizar la información del usuario.');
      })
    })
    .catch((error) => {
      this.setState({ isLoading: false })
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        Alert.alert('Error', 'La contraseña no cumple con los requisitos de seguridad.');
      }
      else if (errorCode == 'auth/invalid-email') {
        Alert.alert('Error', 'El email ingresado es invalido.');
      }
      else if (errorCode == 'auth/email-already-in-use') {
        Alert.alert('Error', 'El email ingresado ya está en uso.');
      }
      else {
        Alert.alert('Error', errorMessage);
      }
    })

    signUpPromise.then(() => {

      
    });

  }

  resetViewState() {
    this.primerNombreTxt.clear();
    this.segundoNombreTxt.clear();
    this.primerApellidoTxt.clear();
    this.segundoApellidoTxt.clear();
    this.passwordTxt.clear();
    this.confirmPasswordTxt.clear();
    this.correoTxt.clear();
    this.phoneTxt.clear();
    this.setState(INITIAL_STATE);
  }

  render() {

    let validFields = this.state.primerNombreValido
      && this.state.segundoNombreValido
      && this.state.primerApellidoValido
      && this.state.segundoApellidoValido
      && this.state.emailValid
      && this.state.passwordValid
      && this.state.confirmValid
      && this.state.phoneValid;

    const displayActivityLoader = <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>

    return (
      <Swiper showsButtons={true} loop={false} scrollEnabled={!this.state.isLoading}>
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
              <Text style={styles.label}>Primer Nombre * </Text>
              <TextInput style={[styles.textoInput,
              this.state.primerNombreTouched && !this.state.primerNombreValido ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='Primer Nombre'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'primerNombre')}
                ref={input => { this.primerNombreTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Segundo Nombre</Text>
              <TextInput style={[styles.textoInput,
              this.state.segundoNombreTouched && !this.state.segundoNombreValido ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='Segundo Nombre'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'segundoNombre')}
                ref={input => { this.segundoNombreTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Primer Apellido * </Text>
              <TextInput style={[styles.textoInput,
              this.state.primerApellidoTouched && !this.state.primerApellidoValido ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='Primer Apellido'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'primerApellido')}
                ref={input => { this.primerApellidoTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Segundo Apellido</Text>
              <TextInput style={[styles.textoInput,
              this.state.segundoApellidoTouched && !this.state.segundoApellidoValido ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='Segundo Apellido'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'segundoApellido')}
                ref={input => { this.segundoApellidoTxt = input }} />
            </View>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.mainView} behavior="padding" pointerEvents={this.state.isLoading ? 'none' : 'auto'} >
          <View style={styles.registroForm}>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Correo</Text>
              <TextInput style={[styles.textoInput,
              this.state.emailTouched && !this.state.emailValid ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='correo@unah.hn'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'email')}
                ref={input => { this.correoTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput style={[styles.textoInput,
              this.state.passwordTouched && !this.state.passwordValid ? styles.invalidInput : styles.validInput]}
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                placeholder='Mínimo 6 caracteres y 1 número'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'password')}
                ref={input => { this.passwordTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Confirmar Contraseña</Text>
              <TextInput style={[styles.textoInput,
              this.state.confirmTouched && !this.state.confirmValid ? styles.invalidInput : styles.validInput]}
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                placeholder='Confirmar contraseña'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'confirm')}
                ref={input => { this.confirmPasswordTxt = input }} />
            </View>
            <View style={styles.labelAndInput}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput style={[styles.textoInput,
              this.state.phoneTouched && !this.state.phoneValid ? styles.invalidInput : styles.validInput]}
                underlineColorAndroid='transparent'
                placeholder='+504 9999-9999'
                placeholderTextColor='gray'
                onChangeText={(text) => this.inputHandle(text, 'phone')}
                ref={input => { this.phoneTxt = input }} />
            </View>
            <TouchableOpacity style={[styles.logInButton, validFields ? styles.validButton : styles.invalidButton]}
              disabled={!validFields}
              onPress={() => this.registrarUsuario()}>
              <Text style={styles.logIntext}>Registrarme</Text>
            </TouchableOpacity>
          </View>
          {this.state.isLoading ? displayActivityLoader : <View />}
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
    justifyContent: 'center'
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
  invalidInput: {
    borderColor: 'red'
  },
  validInput: {
  },
  invalidButton: {
    opacity: 0.3,
  },
  validButton: {
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88'
  }
});
