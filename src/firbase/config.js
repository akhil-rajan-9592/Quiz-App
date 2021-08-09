import firbase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYEOnDPGQEAa5_JW9KuQrFlVi80LIKbIY",
  authDomain: "quiz-app-c1d61.firebaseapp.com",
  projectId: "quiz-app-c1d61",
  storageBucket: "quiz-app-c1d61.appspot.com",
  messagingSenderId: "833939078097",
  appId: "1:833939078097:web:2bae93694067656b5dbef0",
  measurementId: "G-WEFE6873NE"
};

export default firbase.initializeApp(firebaseConfig)
