if(document.cookie != ""){
	cookies = document.cookie.split("; ")
	document.getElementById("money").innerHTML = "Money: "+cookies[0].slice(7);
	document.getElementById("up").innerHTML = "Uprate: "+cookies[1].slice(8);
}
var uprate = 0;
var dark = true;
var rate_cost = 100000;
var seconds = 1200;
var auto_money = setInterval(function(){
	document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6)) + uprate);
	document.cookie = "money="+document.getElementById("money").innerHTML.slice(7)+"; expires=Thu, 18 Dec 2024 12:00:00 UTC";
	document.cookie = "uprate="+document.getElementById("up").innerHTML.slice(8)+"; expires=Thu, 18 Dec 2024 12:00:00 UTC";
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

function win(){
	if (Number(document.getElementById("money").innerHTML.slice(6))>10000000){
		alert("YOU WIN");
		const buttons = document.querySelectorAll('button');
		buttons.forEach(buttonn => {
			buttonn.onclick = function(){return;}
		})
	}else{
		alert("You do not have the will and power to win...");
		document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6))-100000);
	}
}

function manual(){
	document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6))+10);
}

function site_theme(){
	const buttons = document.querySelectorAll('button');
	if(dark){
		dark = false;
		buttons.forEach(buttonn => {
			if(buttonn.id == "cheat"){
				return;
			}
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
			if(buttonn.id == "cheat"){
				return;
			}
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
	let real_money = Number(money.innerHTML.slice(6));
	if(real_money >= cost){
	let up = document.getElementById("up");
	uprate += upp;
	up.innerHTML = "Uprate: "+uprate;
	money.innerHTML = "Money: "+(real_money - cost);
	document.getElementById(id).innerHTML = Number(document.getElementById(id).innerHTML) +1;
	} else{
		alert("Broke nigga");
	}
	if (document.getElementById(id).innerHTML == '10'){
		document.getElementById((id*11).toString()).innerHTML = 'MAXXED';
		document.getElementById((id*11).toString()).onclick = maxxed;
	}
}
var ch1 = false;
var ch2 = false;
function cheat(){
	let answer = prompt("Enter cheat code");
	if(answer == "moneyyy" && !ch1){
		ch1 = true;
		alert("here is 10000 for u");
		document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6)) +10000);
		return;
	} else if(answer == "rich" && !ch2){
		ch2 = true;
		alert("here is 30000 for u");
		document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6)) +30000);
		return;
	} else if(answer == "cheat code"){
		alert("are u dumb??????");
		document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6)) -50000);
		return;
	}alert("invalid code nigga");

}
var first = true;
function money_rate(){
	let money = document.getElementById("money");
	let real_money = Number(money.innerHTML.slice(6));
	if(real_money >= rate_cost){
		if (first){
			first = false;
			alert("for your first time, here is a 'cheat code':'rich'")
		}
		money.innerHTML = "Money: "+(real_money - rate_cost);
		clearInterval(auto_money);
		auto_money = setInterval(function(){
		document.getElementById("money").innerHTML = "Money: "+(Number(document.getElementById("money").innerHTML.slice(6)) + uprate);
		document.cookie = "money="+Number(document.getElementById("money").innerHTML.slice(6))+"; expires=Thu, 18 Dec 2024 12:00:00 UTC";
		document.cookie = "uprate="+document.getElementById("up").innerHTML.slice(8)+"; expires=Thu, 18 Dec 2024 12:00:00 UTC";
		},seconds-100);
		seconds -= 100;
		rate_cost += 50000;
		document.getElementById("rate").innerHTML = "UPGRADE MONEY RATE: "+rate_cost;
	} else{
		alert("broke nigga");
	}
	if(seconds == 500){
		document.getElementById("rate").innerHTML = "MAXXED";
		document.getElementById("rate").onclick = maxxed;
	}
}
