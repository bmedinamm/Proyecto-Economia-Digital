/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo';

export default class ItemTipCarrusel extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      mute: false,
      shouldPlay: true,
    }
  }

  handlePlayAndPause = () => {  
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay  
    }));
  }
  
  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,  
    }));
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <TouchableOpacity onPress={() => { this.setState({modalVisible: true});}}>
          <View style={styles.containerRoot}>
            <View style={styles.container}>
              <View style={styles.circle}>
                <Image style={styles.imagen} source={{uri: this.props.tips.imagen}}/>
              </View>
              <Text style={styles.text}>{this.props.tips.titulo}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex: 1, backgroundColor: '#000'}}>
              <View style={styles.videoContainer}>
                <Video
                  source={{ uri: this.props.tips.video}}
                  shouldPlay={this.state.shouldPlay}
                  resizeMode="cover"
                  style={{ width, height: 300, alignSelf: 'center' }}
                  isMuted={this.state.mute}
                  volume={1.0}
                  playsInSilentLockedModeIOS={true}
                />
              </View>
              <View style={styles.closeContent}>
                <TouchableOpacity onPress={() => {this.setState({modalVisible: false})}}>
                  <Icon style={styles.closeIcon} name="md-close"/>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
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
  },
  closeIcon: {
    color: '#FFF',
    fontSize: 30
  },
  circle: {
    height: 68,
    width: 68,
    borderRadius: 35,
    borderColor: '#3BAFDA', 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    alignItems: 'center',
    height: 100,
  },
  universidad: {
    fontSize: 10,
  },
  text: {
    fontSize: 11,
  },
  imagen: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: '#DDD', 
    borderWidth: 1,
  },
  containerRoot:{
    width: 90,
    height: 100,
    paddingTop: 10,
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});