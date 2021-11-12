var readlineSync = require('readline-sync');
var chalk = require('chalk');

var name = readlineSync.question('\n\nWhat is your name? : ');

console.log(chalk.blue("Welcome " + name + "!\nMyself ANIKET🙃"));
console.log("\nLets see how well you know me 😁");
console.log("--------------------------------------");
var score = 0;

var question = [
  question1 = {
    q : "What is my hobby?",
    options : ["sleeping", "gym", "reading", "watching"],
    ans : "sleeping"
  },

  question2 = {
    q : "What is my favorite place?",
    options : ["New York", "London", "Dubai", "Tokyo"],
    ans : "Tokyo",
  }, 

  question3 = {
    q : "Food I like the most?",
    options : ["Fish", "Veggies", "Chicken", "Panner"],
    ans : "Chicken",
  },

  question4 = {
    q : "What's my favorite color?",
    options : ["Black", "Blue", "Voilet", "Red"],
    ans : "Blue",
  },

  question5 = {
    q : "Which is my favorite sport?",
    options : ["Football", "Cricket", "Tennis", "Volley Ball"],
    ans : "Football",
  },

  question6 = {
    q : "which is my favorite subject",
    options : ["Maths", "Science", "Computer Science", "English"],
    ans : "Computer Science",
  },

  question7 = {
    q : "What is my favorite fruit",
    options : ["Apple", "Mango", "Watermelon", "Banana"],
    ans : "Mango",
  }
];

for (var i = 0; i < question.length; i++) {
  var userAns = readlineSync.keyInSelect(question[i].options,question[i].q );
  if (question[i].options[userAns] == question[i].ans) {
    score += 1;
    console.log(chalk.green("-> Right answer 😎"));
  } else {
    console.log(chalk.red("-> Wrong answer 😓"));
  }
  console.log(chalk.hex('#800080')("Your score is : " + score));
}

console.log(chalk.yellow("\n---------------------------------------"));
console.log(chalk.hex('#CC11AA')("\n YOUR FINAL SCORE IS : " + score));
console.log(chalk.yellow("---------------------------------------"));