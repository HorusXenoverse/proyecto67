import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyB-68n9fg8HXOz6X3qUt7S6Q92NN_zG1X4",
        authDomain: "proyecto67-feaca.firebaseapp.com",
        projectId: "proyecto67-feaca",
        storageBucket: "proyecto67-feaca.appspot.com",
        messagingSenderId: "769920608901",
        appId: "1:769920608901:web:1cc7cfa1969a744e7897ec"    
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
