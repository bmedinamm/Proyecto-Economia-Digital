import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { firebaseAuth, db } from '../commons/constants';


//Variables de ancho y alto
var { width, height } = Dimensions.get('window');

export default class InicioSesionView extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      odontologo: true,
      paciente: false,
      username: '',
      password: '',
    }
    this.logInWithFacebook = this.logInWithFacebook.bind(this);
    this.login = this.login.bind(this);
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

  async logInWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1902134703423688', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebaseAuth.signInAndRetrieveDataWithCredential(credential).then(() => {
        Actions.homeView();
        // let userInfo = {
        //     nombreCorto: firebase.auth().currentUser.providerData[0].displayName,
        //     imagen: firebase.auth().currentUser.providerData[0].photoURL,
        // }

        // if (this.state.odontologo) {
        //   db.collection('odontologos/').add(userInfo)
        //     .then((docRef) => {
        //       this.setState({modalVisible:false})
        //       Actions.homeView();
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        // else {
        //   db.collection('pacientes/').add(userInfo)
        //     .then((docRef) => {
        //       this.setState({modalVisible:false})
        //       Actions.homeView();
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }

      }).catch((error) => {
        console.log(error);
      })
    }
  }

  login(e) {
    e.preventDefault();
    firebaseAuth.signInWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
      Actions.homeView();
      this.textInput1.clear();
      this.textInput2.clear();
    }).catch((error) => {
      console.log(error);
      this.textInput1.clear();
      this.textInput2.clear();
    });
  }

  render() {
    return (
      <LinearGradient colors={['#00577c', '#1a84ab']} style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}>
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
              <View style={{ marginTop: 10, }}>
                <Icon.Button name="logo-facebook" onPress={() => this.logInWithFacebook()}>
                  <Text style={styles.whiteText}>Inicia sesión</Text>
                </Icon.Button>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.tituloText}>SmileWay</Text>
        <TextInput style={styles.textoInput}
          ref={input => { this.textInput1 = input }}
          underlineColorAndroid='transparent'
          placeholder='Correo'
          placeholderTextColor='rgba(255,255,255,0.4)'
          onChangeText={(username) => this.setState({ username: username })} />
        <TextInput style={styles.textoInput}
          secureTextEntry={true}
          ref={input => { this.textInput2 = input }}
          underlineColorAndroid='transparent'
          placeholder='Contraseña'
          onChangeText={(pass) => this.setState({ password: pass })}
          placeholderTextColor='rgba(255,255,255,0.4)' />
        <TouchableOpacity style={styles.logInButton} onPress={this.login}>
          <Text style={styles.logIntext}>Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.whiteText}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>
        <View style={styles.lineaView}>
        </View>
        <TouchableOpacity>
          <Icon.Button name="logo-facebook" onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.whiteText}>Inicia sesión con Facebook</Text>
          </Icon.Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer}
          onPress={() => Actions.registrarseView()}>
          <Text style={styles.whiteText}>¿Aún no tienes cuenta? </Text>
          <Text style={[styles.whiteText, styles.bold]}>Regístrate aquí.</Text>
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
  title: {
    color: '#00577c',
    fontSize: 25,
  },
  imagesRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  imageAndChecbox: {
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
});