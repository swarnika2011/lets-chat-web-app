var firebaseConfig = {
    apiKey: "AIzaSyBhCuRFMQb9an_VvIV23q4jXbTcvy__2YE",
    authDomain: "lets-chat-web-app-42f9b.firebaseapp.com",
    projectId: "lets-chat-web-app-42f9b",
    storageBucket: "lets-chat-web-app-42f9b.appspot.com",
    messagingSenderId: "790091421688",
    appId: "1:790091421688:web:9d71c1d6a6ea9ffb59680d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout() {
    window.location = "index.html";

  }


