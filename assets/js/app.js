// Initialize Firebase
 var config = {
  apiKey: "AIzaSyAWj1d5NrbavevvcVvAoptxxjIo9nRf0UA",
  authDomain: "train-schedule-3b955.firebaseapp.com",
  databaseURL: "https://train-schedule-3b955.firebaseio.com",
  projectId: "train-schedule-3b955",
  storageBucket: "",
  messagingSenderId: "41888100901"
 };

firebase.initializeApp(config);

var database = firebase.database();


$('.btn').on('click', function(event) {
	event.preventDefault();
	
	var trainName = $('#trainName').val().trim();
	var destination = $('#destination').val().trim();
	var firstTrain = $('#firstTrain').val().trim();
	var frequency = $('#frequency').val().trim();
	
	var newTrain = {
		name: trainName,
		destination: destination,
		first: firstTrain,
		time: frequency
	};
	
	database.ref().push(newTrain);
	
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.first);
	console.log(newTrain.time);
	
	// database.ref().get(newTrain);
	
	$('#scheduleTable > tbody ').append('<tr><td>' + newTrain.name + '</td><td>' + newTrain.destination + '</td><td>' + newTrain.time + '</td><td>' + 'Next Arrival placeholder' + '</td><td>' + 'Minutes Away placeholder' + '</td></tr>');
	
	
});