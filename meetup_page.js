// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCoO9ZyC-v_slIfaeYjPuIK3qUCmZyb_MU",
  authDomain: "meetup-59a48.firebaseapp.com",
  projectId: "meetup-59a48",
  storageBucket: "meetup-59a48.appspot.com",
  messagingSenderId: "258475076774",
  appId: "1:258475076774:web:8ce6bf15ec5962656dd867"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+">"
document.getElementById("output");
     //End code
     });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()

{
     var room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);
     window.location = "meetup_room.html";
}

function logout() {
     localStorage.removeItem("user_name");
     window.location("index.html");
}