/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import {Agenda} from 'react-native-calendars';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class AgendaView extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2017-05-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      >
      </Agenda>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              hour: '05:30 PM - 06:00 PM',
              name: 'Astrid Hanoy Salguero',
              type: 'Endodoncia',
              height: 90
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <TouchableOpacity>
        <LinearGradient
          colors={['#1abc9c', '#1abc9c', '#16a085']}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={[styles.item, {height: item.height}]}>
        >
          <View style={styles.box}>
            <Text style={styles.type}><Icon style={styles.icon} name="md-arrow-round-forward"></Icon> {item.type}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.hour}>{item.hour}</Text>
          </View>
          <Image style={styles.imagen} source={require('./../assets/img/woman.jpg')}/>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No hay citas programadas!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20
  },
  box: {
    flex: 1
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  type: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: 5
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    color: '#FFF'
  },
  hour: {
    color: '#FFF',
    marginTop: 5
  },
  imagen: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5
  }
});
