var uprate = 30;
var dark = true;
var rate_cost = 10000;
var seconds = 1000;
var auto_money = setInterval(function(){
	document.getElementById("money").innerHTML = Number(document.getElementById("money").innerHTML) + uprate;
	},seconds)
/*
{BUTTONS}
DARK
background-color: #262323;
border: 3px solid #EDE9E9;
color: #EDE9E9;

LIGHT
background-color: #CFCDCD;
border: 3px solid #302D2D;
color: #2B2929;

{BODY}
DARK
background-color : #3C3535;
color : #EDE9E9;

LIGHT
background-color : #D4CACA;
color : #282525;
*/
function maxxed(){alert("maxxed")}

function site_theme(){
	const buttons = document.querySelectorAll('button');
	if(dark){
		dark = false;
		buttons.forEach(buttonn => {
			buttonn.style.backgroundColor = '#CFCDCD';
			buttonn.style.border = "3px solid #302D2D";
			buttonn.style.color = '#2B2929';
		})
		body = document.getElementById("body");
		body.style.backgroundColor = '#D4CACA';
		body.style.color = '#282525';
		document.getElementById('theme_btn').innerHTML = 'DARK';
	}
	else{
		dark = true;
		buttons.forEach(buttonn => {
			buttonn.style.backgroundColor = '#262323';
			buttonn.style.border = "3px solid #EDE9E9";
			buttonn.style.color = '#EDE9E9';
		})
		body.style.backgroundColor = '#3C3535';
		body.style.color = '#EDE9E9';
		document.getElementById('theme_btn').innerHTML = 'LIGHT';
	}
}

function buton(upp, cost, id) {
	let money = document.getElementById("money");
	if(Number(money.innerHTML) >= cost){
	let up = document.getElementById("up");
	uprate += upp;
	up.innerHTML = uprate;
	money.innerHTML = Number(money.innerHTML) - cost;
	document.getElementById(id).innerHTML = Number(document.getElementById(id).innerHTML) +1;
	} else{
		alert("Broke nigga");
	}
	if (document.getElementById(id).innerHTML == '10'){
		document.getElementById((id*11).toString()).innerHTML = 'MAXXED';
		document.getElementById((id*11).toString()).onclick = maxxed;
	}
}

function money_rate(){
	let money = document.getElementById("money");
	if(Number(money.innerHTML) >= rate_cost){
		money.innerHTML = Number(money.innerHTML) - rate_cost;
		clearInterval(auto_money);
		auto_money = setInterval(function(){
		document.getElementById("money").innerHTML = Number(document.getElementById("money").innerHTML) + uprate;
		},seconds-100);
		seconds -= 100;
		rate_cost += 50000;
		document.getElementById("rate").innerHTML = "UPGRADE MONEY RATE: "+rate_cost;
	} else{
		alery("broke nigga");
	}
	if(seconds == 400){
		document.getElementById("rate").innerHTML = "MAXXED";
		document.getElementById("rate").onclick = maxxed;
	}
}