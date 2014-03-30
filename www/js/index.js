var app = {

    initialize: function () {
        var message = "initialized";
        var title = "info";
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        }
        getCurrentPosition();
    }
    


};

var getCurrentPosition = function() {
var map = document.getElementById('map');
var success = function(pos) { 
var text = "<div>Latitude: " + pos.coords.latitude + 
"<br/>" + "Longitude: " + pos.coords.longitude + "</div>";
document.getElementById(
'cur_position').innerHTML = text;
console.log(text);
map.style.display =
'block';
var mapwidth = 500;
var mapheight = 500;
map.src =
"http://maps.googleapis.com/maps/api/staticmap?center=" + 
pos.coords.latitude +
"," + pos.coords.longitude + 
"&zoom=14&size=" + mapwidth + "x" + mapheight + "&maptype=roadmap&markers=color:green%7C" +
pos.coords.latitude +
"," + pos.coords.longitude + "&sensor=false";
};
var fail = function(error) {
document.getElementById(
'cur_position').innerHTML = "Error getting geolocation: " + error.code;
console.log(
"Error getting geolocation: code=" + error.code + " message=" + error.message);
};
map.style.display =
'none';
document.getElementById(
'cur_position').innerHTML = "Getting geolocation . . .";
console.log(
"Getting geolocation . . .");
navigator.geolocation.getCurrentPosition(success, fail);
};
/* api-geolocation Watch Position
var
watchID = null;
function
clearWatch() { 
if (watchID !== null) {
navigator.geolocation.clearWatch(watchID);
watchID =
null;
document.getElementById(
'cur_position').innerHTML = "";
document.getElementById(
'map').style.display = 'none';
}
}
var
wsuccess = function(pos) { 
var map = document.getElementById('map');
document.getElementById(
'cur_position').innerHTML = "Watching geolocation . . .";
map.style.display =
'none';
var text = "<div>Latitude: " + pos.coords.latitude + 
" (watching)<br/>" + "Longitude: " + pos.coords.longitude + "<br/>" + 
"Accuracy: " + pos.coords.accuracy + "m<br/>" + "</div>";
document.getElementById(
'cur_position').innerHTML = text;
console.log(text);
map.style.display =
'block';
var mapwidth = 270; // a mungy compromise between the 2 sizes
var mapheight = 210; // since we can't get w / h dynamically
map.src =
"http://maps.googleapis.com/maps/api/staticmap?center=" + 
pos.coords.latitude +
"," + pos.coords.longitude + 
"&zoom=13&size=" + mapwidth + "x" + mapheight + "&maptype=roadmap&markers=color:green%7C" +
pos.coords.latitude +
"," + pos.coords.longitude + "&sensor=false";
};
var
wfail = function(error) { 
document.getElementById(
'cur_position').innerHTML = "Error getting geolocation: " + error.code;
console.log(
"Error getting geolocation: code=" + error.code + " message=" + error.message);
};
var
toggleWatchPosition = function() { 
if (watchID) {
console.log(
"Stopped watching position");
clearWatch();
// sets watchID = null;
}
else { 
document.getElementById(
'map').style.display = 'none';
document.getElementById(
'cur_position').innerHTML = "Watching geolocation . . .";
console.log(
"Watching geolocation . . .");
var options = { frequency: 3000, maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
watchID = navigator.geolocation.watchPosition(wsuccess, wfail, options);
}
};
/*var app = {

    initialize: function () {
        var message = "initialized";
        var title = "info";
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        }
    }
    


};

/*var app = {
    // Application Constructor
    initialize: function() {
        //this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};
*/