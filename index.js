var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0
console.log("-------------------- NARUTO * QUIZ --------------------")
console.log()
console.log("This quiz is based on the anime series 'NARUTO'!\n")
var userName = readlineSync.question("Enter your name to start the quiz :"+" ");

console.log();

console.log(chalk.bgBlue("Hello "+chalk.bold.underline(userName)+" Welcome to the Naruto quiz "));

console.log();
console.log("|||||||||||||||| ** INSTRUCATIONS ** ||||||||||||||||")
console.log(" # This quiz has 5 questions.")
console.log(" # Every right answer awards you 8 points.")
console.log(" # To answer the questions type the options given i.e, a/b/c/d.")
console.log(" # No negative points for wrong answers.")
console.log(" # ENJOY!!")

console.log()

function play(question,answer) {
  var question = readlineSync.question(question);

  if(question.toLowerCase()===answer) {
    console.log(chalk.bgGreenBright.black.bold("\n"+question+" is Right Answer!"));
    score = score + 8;
  } else {
    console.log(chalk.bgRedBright("OOPS! Wrong answer!")+" "+" try next question! ")
  }
  console.log("Your current score :"+" "+score)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
}

var question1 = {
  question : chalk.bgRed("Who is the Pervy sage in Naruto ? \n")+
  "a. Naruto.\n"+
  "b. RockLee.\n"+
  "c. Gaara.\n"+
  "d. Jiraiya.\n\n"+
  "Type your option :"+" ",
  answer : "d"
};

var question2 = {
  question : chalk.bgRed("Who is know as the 'Copycat ninja' ? \n")+
  "a. Might guy.\n"+
  "b. Itachi.\n"+
  "c. Kakashi.\n"+
  "d. Ino.\n\n"+
  "Type your option :"+" ",
  answer : "c"
};

var question3 = {
  question : chalk.bgRed("Naruto's favorite food? \n")+
  "a. Noodles.\n"+
  "b. Ichiraku Ramen.\n"+
  "c. Gulab Jamun.\n"+
  "d. Samosa\n\n"+
  "Type your option :"+" ",
  answer : "b"
};

var question4 = {
  question : chalk.bgRed("Who is the jinchūriki of the Eight-Tails? \n")+
  "a. Minato.\n"+
  "b. Killer Bee.\n"+
  "c. Sakura.\n"+
  "d. Sasuke.\n\n"+
  "Type your option :"+" ",
  answer : "b"
};

var question5 = {
  question : chalk.bgRed("Itachi was a member of the ____ ? \n")+
  "a. Army.\n"+
  "b. Anbu Black ops.\n"+
  "c. Shinobi school.\n"+
  "d. Team-7.\n\n"+
  "Type your option :"+" ",
  answer : "b"
};

var questions = [question1,question2,question3,question4,question5]

for(var i = 0; i<questions.length;i++) {
  q = questions[i].question;
  a = questions[i].answer;
  play(q,a);
}

if(score===40) {
  console.log("You are awesome! You got all the answers right.!")
}
var user1 = {
  name : "Vishal Pawar",
  score: 40
};
var user2 = {
  name : "Krishna",
  score: 32
};
var scoreboard = [user1,user2];

if(score>user1.score) {
  user2.name = user1.name;
  user2.score = user1.score;

  user1.name = userName;
  user1.score = score;
}
else if(score>user2.score) {
  user2.name = userName;
  user2.score = score;
}

console.log("\n$$ "+chalk.bgBlue.bold.underline("SCOREBOARD")+" $$");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
for(var h=0;h<scoreboard.length; h++)
{
  console.log(h+1+" | "+scoreboard[h].name+" | "+scoreboard[h].score)
}