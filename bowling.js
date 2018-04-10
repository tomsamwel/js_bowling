//Teams with players as objects
var Teams = [
	[ //team one
		{name:"Joe", score: 0, team: 1},
		{name:"Tom", score: 0, team: 1},
		{name:"Garet", score: 0, team: 1},
		{name:"Bob", score: 0, team: 1}
	],
	[ //team two
		{name:"Su", score: 0, team: 2},
		{name:"Bart", score: 0, team: 2},
		{name:"Jake", score: 0, team: 2},
		{name:"Cakey", score: 0, team: 2}
	]
];
//winner 
var Winner = [{name:"", score:0, team:1}];

bowlingGame();
showScores();

//Loop to call the game for 10 rounds
function bowlingGame() {
	for (var i = 0, Turns = 10; i < Turns; i++) {
		console.log("***** " + "Round "+ (i+1) + " *****");
		playRound();
	}
};
//Game. one round.
// forEach team -> forEach player object
function playRound() {
	Teams.forEach(function(team){
		team.forEach(function(player){

			console.log("--- " + player.name + " From Team " + player.team + " is up. ---");

			var Pins = [true,true,true,true,true,true,true,true,true,true]; // 10 Pins
			var Total = 0; //Total first throw
			var Total2 = 0; //Total second throw
			var isStrike = true;

			Pins.forEach(function(pin, i){ 			//First throw
				if (Math.random()>= 0.3) { 			//chance per pin
					Pins[i] = false
					player.score++
					Total++
				} else {
					isStrike = false
				}
			});

			console.log(player.name + " threw over " + Total + " on their first throw.");

			if(isStrike == true){ 					//Check if first throw is a strike
				console.log("Hot damn! " + player.name + " threw a strike!");
				return true;
			}

			Pins.forEach(function(pin, i){			//Second throw
				if (pin && Math.random()>= 0.5) { 	//chance per pin
					Pins[i] = false
					player.score++
					Total2++
				} 
			});

			console.log(player.name + " threw over " + Total2 + " on their second throw.");
			console.log("That makes a total of " + (Total + Total2) + " knocked over.");

		})
	})
};
//log scores
function showScores () { 

	console.log("The scores are in. Let's summarize:");

	Teams.forEach(function(team, team_num){

		console.log("Team " + (team_num+1));

		team.forEach(function(player){

			console.log(player.name + " finished the game with a score of " + player.score);

			if (player.score > Winner[0].score) { //check if score is higher than highscore
				Winner = [player];
			}
			else if (player.score == Winner[0].score) { //check if its a tie with highscore holder
				Winner.push(player);
			}

		})
	})
	console.log("* * *  WINNERS  * * *");
	Winner.forEach(function(winner){
		console.log("Name: " + winner.name + " Score: " +winner.score+ " Team: " +winner.team);
		//alert("Name: " + winner.name + " Score: " +winner.score+ " Team: " +winner.team);
	})
};