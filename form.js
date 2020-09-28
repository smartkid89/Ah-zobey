
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyALW0OrsuG-dcQ6wxmecEIIRohprH3ZMKA",
    authDomain: "ah-zobey.firebaseapp.com",
    databaseURL: "https://ah-zobey.firebaseio.com",
    projectId: "ah-zobey",
    storageBucket: "ah-zobey.appspot.com",
    messagingSenderId: "979188571572",
    appId: "1:979188571572:web:99139d68f929247b0026e1",
    measurementId: "G-9Y0QEW8TXM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();
  function signup() {

     var email = document.getElementById("Email");
     var password = document.getElementById("Password");
     const promise = auth.createUserWithEmailAndPassowrd(email.value,password.value);
     prosmise.catch(e => alert (e.message));


     function signin(){

        var email = document.getElementById("Email");
        var password = document.getElementById("Password");
        const promise = auth.createUserWithEmailAndPassowrd(email.value,password.value);
        prosmise.catch(e => alert (e.message));
     }

     function signout() {\
         
        auth.signout();
        alert("signed")


      }

