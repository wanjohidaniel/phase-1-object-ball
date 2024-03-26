function gameObject(homeTeamName, homeTeamColor, homeTeamPlayers, awayTeamName, awayTeamColor, awayTeamPlayers){
    return{
        home : {
          teamName : homeTeamName,
          teamColor : homeTeamColor,
          teamPlayers : homeTeamPlayers,  
        },
        away : {
            teamName : awayTeamName,
            teamColor : awayTeamColor,
            teamPlayers : awayTeamPlayers,
        },

    }
}

const homePlayer = {
    "Alan Anderson" : {
    number : 0,
    shoe : 16,
    points : 22,
    rebounds : 12,
    assists : 12,
    steals : 3,
    blocks : 1,
    slamDunks : 1,
   },

    "Reggie Evans" : {
    number : 30,
    shoe : 14,
    points : 12,
    rebounds : 12,
    assists : 12,
    steals : 12,
    blocks : 12,
    slamDunks : 7,
    },

    "Brook Lopez" : {
    number : 11,
    shoe : 17,
    points : 17,
    rebounds : 19,
    assists : 10,
    steals : 3,
    blocks : 1,
    slamDunks : 15,
    },

    "Mason Plumlee" : {
    number : 1,
    shoe : 19,
    points : 26,
    rebounds : 12,
    assists : 6,
    steals : 3,
    blocks : 8,
    slamDunks : 5,
    },

    "Jason Terry" : {
    number : 31,
    shoe : 15,
    points : 19,
    rebounds : 2,
    assists : 2,
    steals : 4,
    blocks : 11,
    slamDunks : 1,
    },
}

const homePlayers = {
    name : {
    number : "info",
    shoe : "info",
    points : "info",
    rebounds : "info",
    assists : "info",
    steals : "info",
    blocks : "info",
    slamDunks : "info",

    }
}

const awayPlayers = {
    "Jeff Adrien" : {
    number : 4,
    shoe : 18,
    points : 10,
    rebounds : 1,
    assists : 1,
    steals : 2,
    blocks : 7,
    slamDunks : 2,
    },

    "Bismak Biyombo": {
    number : 0,
    shoe : 16,
    points : 12,
    rebounds : 4,
    assists : 7,
    steals : 7,
    blocks : 15,
    slamDunks : 10,
    },

    "DeSagna Diop" : {
    number : 2,
    shoe : 14,
    points : 24,
    rebounds : 12,
    assists : 12,
    steals : 4,
    blocks : 5,
    slamDunks : 5,
    },

    "Ben Gordon" : {
    number : 8,
    shoe : 15,
    points : 33,
    rebounds : 3,
    assists : 2,
    steals : 1,
    blocks : 1,
    slamDunks : 0,
    },

    "Brendan Haywood" : {
    number : 33,
    shoe : 15,
    points : 6,
    rebounds : 12,
    assists : 12,
    steals : 22,
    blocks : 5,
    slamDunks : 12,
    },
}

const gameData = gameObject(
    "Brooklyn Nets", ["Black", "White"], homePlayers,
    "Charlotte Hornets", ["Turquoise", "Purple"], awayPlayers
)

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }

  function numPointsScored(playerName, gameData){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const players = team.players;

        if (playerName in players) {
            return players[playerName].points;
        }
    }
}

function shoeSize(playerName, gameData ){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const players = team.players;

        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
}

function teamColors(teamColor, gameData){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const teamName = team.color;

        if(teamName in team) {
        return color[teamColor].teamColor; 
        }
    }
}

function teamName(teamName, gameData){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const teamName = team.name;

        if(teamName in team) {
        return color[teamName].teamName; 
        }
    }
}

function playerNumbers(playerNumbers, gameData){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const teamName = team.color;

        if(teamName in team) {
        return color[playerNumbers].number; 
        }
    }
}

function playerStats(playerStats, gameData){
    for(const teamKey in gameData){
        const team = gameData[teamKey];
        const playerStats = team.stats;

        if(teamName in team) {
        return color[playerStats].playerStats; 
        }
    }
}