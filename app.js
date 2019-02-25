var APPID = "297aa074844b98a9e9c98f420eaf8e1f";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip) {
	var url = "http://api.openweathermap.org/data/2.5/weather?" + 
	"zip=" + zip + 
	"&APPID=" + APPID;
sendRequest(url);
}

function sendRequest(url) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200);
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			weather.icon = data.weather[0].id;
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			weather.direction = degreesToDirection(data.wind.deg);
			weather.loc = data.name;
			weather.temp = K2C(data.main.temp);
			update(weather);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send ();
}

function degreesToDirection(degrees) {
	var range = 360/16;
	return "N";
}

function K2C(k) {
	return Math.round(k = 273.15);
}

function K2F(k) {
	return Math.round(k*(9/5)-459.67);
}

function update(weather) {
	wind.innerHTML = weather.wind;
	direction.innerHTML = weather.wind; 
	humidity.innerHTML = weather.humidity;
	loc.innerHTML = weather.loc;
	temp.innerHTML=weather.temp;
	icon.src = "imgs/codes/" +weather.icon + ".png";
	console.log(icon.src); 
}

window.onload = function () {
	temp=document.getElementById("temperature");
	loc= document.getElementById("location");
	icon = document.getElementById("icon");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");
	direction = document.getElementById("direction");

	updateByZip(87110);
};