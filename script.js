var database = [
    {
        username: "Roldaddy",
        password: "secretagent"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Rocksteady and bee bop"
    },
    {
        username: "johnny",
        timeline: "River runs through it"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password) {
            return true;
            }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, that is not the correct password and username combination!!!");
    }
}

var userNamePrompt = prompt("What is your username sir or maam?");
var passwordPrompt = prompt("What's your password stupid?");

signIn(userNamePrompt, passwordPrompt);