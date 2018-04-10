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
//rounds/turns
var Turns = 10;
//winner 
var Winner = [{name:"", score:0, team:1}];

bowlingGame();
showScores();
scoresTable();

//get random int up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Loop to call the game for 10 rounds
function bowlingGame() {
	for (var i = 0; i < Turns; i++) {
		console.log("\n***** " + "Round "+ (i+1) + " *****");
		playRound();
	}
};
//Game. one round.
// forEach team -> forEach player object
function playRound() {
	Teams.forEach(function(team){
		team.forEach(function(player){

			console.log("\n--- " + player.name + " From Team " + player.team + " is up. ---");
			var Total1 = 0;
			var Total2 = 0;

			Total1 = getRandomInt(11); //Total first throw
			player.score = player.score + Total1;

			if (Total1 == 10) {
				console.log("Hot damn! " + player.name + " threw a strike!");
				return true;
			} else {
				Total2 = getRandomInt(11 - Total1);
				player.score = player.score + Total2;
				console.log(player.name + " threw over " + Total1 + " on their first throw.");
				console.log(player.name + " threw over " + Total2 + " on their second throw.");
				console.log("That makes a total of " + (Total1 + Total2) + " knocked over.");
			}
		})
	})
};
//log scores
function showScores() { 
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
		if(winner.score == Turns * 10){
			alert("Name: " + winner.name + " had a perfect game!"); //alert for a perfect game
		}
	})
};
//output scores table.
function scoresTable() {
	var table = document.getElementsByTagName('body')[0].appendChild(document.createElement('table')); //create the table
		var headingRow = table.appendChild(document.createElement('tr')); //create the table header
			var nameHeader = headingRow.appendChild(document.createElement('th'));
				nameHeader.innerHTML = 'NAME';
			var scoreHeader = headingRow.appendChild(document.createElement('th'));
				scoreHeader.innerHTML = 'SCORE';
			var teamHeader = headingRow.appendChild(document.createElement('th'));
				teamHeader.innerHTML = 'TEAM';

	Teams.forEach(function(team){
		team.forEach(function(player){ 
			var row = table.appendChild(document.createElement('tr')); //create a <tr></tr> for each player

			var playerName = row.appendChild(document.createElement('td'));
				playerName.innerHTML = player.name;
			var playerScore = row.appendChild(document.createElement('td'));
				playerScore.innerHTML = player.score;
			var playerTeam = row.appendChild(document.createElement('td'));
				playerTeam.innerHTML = player.team;

			row.style.color = '#FFF'; // Default Text color
			if(player.team == 1) row.style.backgroundColor = '#6069bc'; //Default team 1 background color
			if(player.team == 2) row.style.backgroundColor = '#a54545'; //Default team 2 background color

			Winner.forEach(function(winner){
				if (winner == player) { //if the player is the winner .. add styling
					if(player.team == 1) row.style.backgroundColor = '#00a9ff'; //winner team 1 background color
					if(player.team == 2) row.style.backgroundColor = '#ff0c00'; //winner team 2 background color
				}
			})
		})
	})
};



















