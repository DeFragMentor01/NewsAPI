import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDy3G1GCFSZlR8vlH8EcXOOkI1VVAgyseA",
  authDomain: "sports-news-79ed9.firebaseapp.com",
  databaseURL: "https://sports-news-79ed9.firebaseio.com",
  projectId: "sports-news-79ed9",
  storageBucket: "sports-news-79ed9.appspot.com",
  messagingSenderId: "997112494050",
  appId: "1:997112494050:web:49434c2dfa0138aa48abbb"
};


firebase.initializeApp(config);

export default firebase;