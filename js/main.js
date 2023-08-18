var uprate = 0;
var labor = 15;
var mult = 1;
var money = document.getElementById("money");
var up = document.getElementById("up");
var dark = true;
var rate_cost = 100000;
var seconds = 1200;
var auto_money = setInterval(function(){
	money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) + uprate);
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
	if (Number(money.innerHTML.slice(6))>100000000){
		alert("YOU WIN");
		const buttons = document.querySelectorAll('button.buy');
		buttons.forEach(buttonn => {
			buttonn.onclick = function(){return;}
		})
	}else{
		alert("You do not have the will and power to win...");
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6))-100000);
	}
}
function ascend(){
	let answer = prompt("are u sure? yes or no.");
	let max = true;
	let buy_buttons = document.getElementsByClassName("buy");
	for(var i = 0; i<buy_buttons.length;i++){
		if(buy_buttons[i].innerHTML != "MAXXED"){max = false;}
	}
	if (answer.toLowerCase() == "yes" && max){
		money.innerHTML = "Money: 0";
		rate_cost = 100000;
		seconds = 1200;
		labor = 15;
		uprate = 0;
		mult = 3;
		clearInterval(auto_money);
		auto_money = setInterval(function(){
			money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) + uprate);
		},seconds);
		document.getElementsByTagName("label")[0].innerHTML = "cost: 1000";
		up.innerHTML = "Uprate: 0";
		labor_up = 500;
		labor_up_up = 100;
		for(var i = 1; i<6;i++){
			document.getElementById(i).innerHTML = "0"
			document.getElementById(i*11).innerHTML = "BUY";
		}document.querySelectorAll("button.buy").forEach(buttonnn =>{
			buttonnn.onclick = buton_activate;
			if(buttonnn.id == "11"){document.getElementById("6").innerHTML = "Ascended cost:2000 uprate:45";}
			if(buttonnn.id == "22"){document.getElementById("7").innerHTML ="Ascended cost:6000 uprate:150";}
			if(buttonnn.id == "33"){document.getElementById("8").innerHTML = "Ascended cost:20000 uprate:525";}
			if(buttonnn.id == "44"){document.getElementById("9").innerHTML = "Ascended cost:40000 uprate:1275";}
			if(buttonnn.id == "55"){document.getElementById("10").innerHTML = "Ascended cost:100000 uprate:3435";}
			if(buttonnn.id == "rate"){buttonnn.innerHTML = "Ascended UPGRADE MONEY RATE: 150000";buttonnn.onclick = money_rate;}
		});document.getElementById("ascend").onclick = function(){return;};document.getElementById("ascend").style.visibility = "hidden";
	}if(!max){
		alert("You are not maxxed to ascend");
	}
}

function manual(){
	money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6))+labor);
}
var labor_up = 500;
var labor_up_up = 100;
function upgrade_labor(){
	if(Number(money.innerHTML.slice(6)) >= Number(document.getElementsByTagName("label")[0].innerHTML.slice(6))){
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) - Number(document.getElementsByTagName("label")[0].innerHTML.slice(6)));
		document.getElementsByTagName("label")[0].innerHTML = "cost: "+(Number(document.getElementsByTagName("label")[0].innerHTML.slice(6))+labor_up);
		labor_up += labor_up_up;
		labor_up_up += 50;
		labor += 15;
	}else{alert("broke nigga");}
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
function buton_activate(){
	if(event.srcElement.id == "11"){buton(15*mult,2000,'1');}
	if(event.srcElement.id == "22"){buton(50*mult,6000,'2');}
	if(event.srcElement.id == "33"){buton(175*mult,20000,'3');}
	if(event.srcElement.id == "44"){buton(425*mult,40000,'4');}
	if(event.srcElement.id == "55"){buton(1145*mult,100000,'5');}
}
var count = 5;
function buton(upp, cost, id) {
	let real_money = Number(money.innerHTML.slice(6));
	if(real_money >= cost){
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
	let answer = prompt("Enter cheat code").toLowerCase();
	if(answer == "moneyyyy" && !ch1){
		ch1 = true;
		alert("here is 10000 for u");
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) +10000);
		return;
	} else if(answer == "super rich" && !ch2){
		ch2 = true;
		alert("here is 30000 for u");
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) +30000);
		return;
	} else if(answer == "cheat code"){
		alert("are u dumb??????");
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) -50000);
		return;
	}alert("invalid code nigga");
}
var first = true;
function money_rate(){
	let real_money = Number(money.innerHTML.slice(6));
	if(real_money >= rate_cost){
		rate_cost += 50000;
		if (first){
			first = false;
			alert("for your first time, here is a  'cheat code'  :  'super rich'")
		}
		money.innerHTML = "Money: "+(real_money - rate_cost);
		clearInterval(auto_money);
		auto_money = setInterval(function(){
		money.innerHTML = "Money: "+(Number(money.innerHTML.slice(6)) + uprate);
		},seconds-100);
		seconds -= 100;
		document.getElementById("rate").innerHTML = "UPGRADE MONEY RATE: "+rate_cost;
	} else{
		alert("broke nigga");
	}
	if(seconds == 500){
		document.getElementById("rate").innerHTML = "MAXXED";
		document.getElementById("rate").onclick = maxxed;
	}
}
