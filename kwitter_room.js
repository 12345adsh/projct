
    //ADD YOUR FIREBASE LINKS HERE
   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBz0aGRAtyIj-e0-67BpU6tF-b4ruExejw",
      authDomain: "kwitter-40002.firebaseapp.com",
      projectId: "kwitter-40002",
      storageBucket: "kwitter-40002.appspot.com",
      messagingSenderId: "998070846574",
      appId: "1:998070846574:web:7b7be0cf4a3dba80d5127f",
      measurementId: "G-6S6DKECWNH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
