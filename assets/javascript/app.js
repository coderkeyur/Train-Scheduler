
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfl1CZfATe5Stu6Q90lLdSo7b6qCZ5igs",
    authDomain: "trainproject-66b13.firebaseapp.com",
    databaseURL: "https://trainproject-66b13.firebaseio.com",
    projectId: "trainproject-66b13",
    storageBucket: "trainproject-66b13.appspot.com",
    messagingSenderId: "474842205427"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event){
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTrainTime = $("#first-train-time-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();

  var addTrain = {
    trainName: trainName,
    trainDestination: trainDestination,
    firstTrainTime: firstTrainTime,
    trainFrequency: trainFrequency
  }

  //database.ref().push(addTrain);
//pushing to database, check with name in database

alert("Train sucessfully added");

$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-time-input").val("");
$("#frequency-input").val("");

})

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
}
