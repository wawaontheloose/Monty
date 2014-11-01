

function noSwitch(){
	var carLocation = Math.floor((Math.random()*3)+1);
	var pick = Math.floor((Math.random()*3)+1);

	if (carLocation == pick){
		return true;
	}
}

function alwaysSwitch(){
	var carLocation = Math.floor((Math.random()*3)+1);
	var pick = Math.floor((Math.random()*3)+1);
	var newPick;
	var showPick;

	if (carLocation === pick){
		return false;
	}
	else{
		for (var i = 1; i < 4; i++){
			if (i != pick) {
				if (i != carLocation) {
					showPick = i;
				} else {
					newPick = i;
				}
			}
			if (i != pick && i != carLocation){
			showPick = i;
			}
		}

		if (newPick == carLocation){
			return true;
		}
		else{
			return false;
		}
	}
}

var noSwitchWins = 0;
var noSwitchLoses = 0;
var switchWins = 0;
var switchLoses = 0;



for (var i = 0; i < 100; i++){
	if (noSwitch()){
		noSwitchWins++;
	}
	else {
	noSwitchLoses++;
	}
}

for (var i = 0; i < 100; i++){
	if (alwaysSwitch()){
		switchWins++;
	}
	else {
	switchLoses++;
	}
}

console.log("If you do not switch you win " + noSwitchWins + " out of 100 times. If you do switch you win " + switchWins + " times. Switch! :)");

