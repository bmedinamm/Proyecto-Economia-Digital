import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

var config = {
	apiKey: "AIzaSyCbnPfx88RQwM-MJ_Rz2R7QMkgLFmZSi_I",
	authDomain: "smile-way.firebaseapp.com",
	databaseURL: "https://smile-way.firebaseio.com",
	projectId: "smile-way",
	storageBucket: "smile-way.appspot.com",
	messagingSenderId: "486523084118"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const setting = {timestampsInSnapshots: true}
db.settings(setting)

const firebaseAuth = firebase.auth;

export  {db, firebaseAuth}