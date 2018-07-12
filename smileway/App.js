/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Router, Scene, Stack, Tabs, Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

//Importamos los componentes personalizados 

//Importamos todas las vistas involucradas en el proyecto
import HomeView from './src/views/HomeView';
import AgendaView from './src/views/AgendaView';
import PerfilView from './src/views/PerfilView';
import NotificacionesView from './src/views/NotificacionesView';
import MisCitasView from './src/views/MisCitasView';
import InteresesView from './src/views/InteresesView';
import MensajesView from './src/views/MensajesView';

type Props = {};
export default class App extends Component<Props> {

  abrirVistaNotificaciones = () =>{
    Actions.notificaciones({});
  }

  abrirVistaMensajes = () =>{
    Actions.mensajes({});
  }

  render() {
    return (
      <Router>
        <Stack key="root" >
          <Tabs showLabel={false}>
              <Scene
                  title="Smileway"
                  key="homeView"
                  titleStyle={styles.title}
                  component={HomeView}
                  navTransparent={true}
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
                        <Icon style={styles.navBarIcon} name="md-notifications"/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.abrirVistaMensajes}>
                        <Icon style={styles.navBarIcon} name="ios-paper-plane"/>
                      </TouchableOpacity>
                    </View>
                  )}
              />
              <Scene
                  title="Smileway"
                  key="agendaView"
                  component={AgendaView}
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
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBarIcon: {
    fontSize: 25,
    marginRight: 15,
    color: '#FFF'
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
