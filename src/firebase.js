import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk36JEpqt8dVuKOCO8N9iT2zRDkDmCgok",
    authDomain: "sarah-vieira-fetch-app.firebaseapp.com",
    databaseURL: "https://sarah-vieira-fetch-app.firebaseio.com",
    projectId: "sarah-vieira-fetch-app",
    storageBucket: "sarah-vieira-fetch-app.appspot.com",
    messagingSenderId: "772155082255",
    appId: "1:772155082255:web:1e58dd0ee196345a46457a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

