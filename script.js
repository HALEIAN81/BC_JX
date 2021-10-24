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

var userNamePrompt = prompt("What is your username sir or maam?");
var passwordPrompt = prompt("What's your password stupid?");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, that is not the correct password and username combination!!!");
    }
}

signIn(userNamePrompt, passwordPrompt);