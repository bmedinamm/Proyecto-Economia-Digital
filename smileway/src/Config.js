/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Scene, Stack, Tabs, Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import HomeView from './views/HomeView';
import AgendaView from './views/AgendaView';
import PerfilView from './views/PerfilView';
import NotificacionesView from './views/NotificacionesView';
import MisCitasView from './views/MisCitasView';
import InteresesView from './views/InteresesView';
import MensajesView from './views/MensajesView';
import OdontologosView from './views/OdontologosView';
import InicioSesionView from './views/InicioSesionView';
import SwiperInicialView from './views/SwiperInicialView';

mapStateToProps = (state)=>{
  //alert(JSON.stringify(state))
  return{
    prueba: state.mostrarBarra
  }
}

class Config extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
          <Stack key="root">
            {/* <Scene
              title='Swiper Inicial'
              key='swiperInicialView'
              hideNavBar={true}
              component={SwiperInicialView}>
            </Scene>
            <Scene
              title='Inicio de Sesion'
              key='inicioSesionView'
              hideNavBar={true}
              component={InicioSesionView}>
            </Scene> */}
            <Tabs showLabel={false} tabBarPosition='bottom'>
                <Scene
                    title="Smileway"
                    key="homeView"
                    component={HomeView}
                    icon={({ focused }) => (
                        <Icon
                            size={30}
                            color={focused ? '#1a84ab' : '#434A54'}
                            name={'md-home'}
                            text={'My Water'}
                            textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                        />
                    )}
                    renderRightButton={() => (
                      <View style={styles.navBarIcons}>
                        <TouchableOpacity onPress={this.abrirVistaNotificaciones}>
                          <Icon style={styles.navBarIcon} name="md-search"/>
                        </TouchableOpacity>
                      </View>
                    )}
                />
                <Scene
                    title="Agenda de citas"
                    key="agendaView"
                    component={AgendaView}
                    navTransparent={false}
                    icon={({ focused }) => (
                        <Icon
                            size={30}
                            color={focused ? '#1a84ab' : '#434A54'}
                            name={'md-calendar'}
                            text={'My Water'}
                            textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                        />
                    )}
                />
                <Scene
                    title="Smileway"
                    key="interesesView"
                    component={InteresesView}
                    icon={({ focused }) => (
                        <Icon
                            size={30}
                            color={focused ? '#1a84ab' : '#434A54'}
                            name={'md-heart'}
                            text={'My Water'}
                            textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                        />
                    )}
                />
                <Scene
                    title="Smileway"
                    key="perfilView"
                    component={PerfilView}
                    icon={({ focused }) => (
                        <Icon
                            size={30}
                            color={focused ? '#1a84ab' : '#434A54'}
                            name={'ios-contact'}
                            textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                        />
                    )}
                />
            </Tabs>
            <Scene title="Notificaciones" key="notificaciones" component={NotificacionesView}/>
            <Scene title="Mensajes" key="mensajes" component={MensajesView}/>
            <Scene 
              title="Explorar" 
              key="odontologos" 
              component={OdontologosView}
              hideNavBar={false}
              renderRightButton={() => (
                <View style={styles.navBarIcons}>
                  <TouchableOpacity onPress={this.props.prueba}>
                    <Icon style={styles.searchIcon} name="ios-search"/>
                  </TouchableOpacity>
                </View>
              )}
            />
          </Stack>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 25,
    marginRight: 15,
  },
  navigationBar: {
    backgroundColor: '#1a84ab'
  },
  navBarIcon: {
    fontSize: 25,
    marginRight: 15,
    color: '#000'
  },
  navBarIcons: {
    flexDirection: 'row'
  },
  tabs: {
    backgroundColor: '#CCC'
  },
  label:{
    color: '#CCC'
  },
  activeLabel: {
    color: '#3BAFDA'
  },
  title: {
    color: '#FFF'
  }
});

export default connect(mapStateToProps)(Config);