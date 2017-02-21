var inquirer = require("inquirer");
var basicQuestions = require("./basic-questions.json");
var counter = 0;
var correctAnswerCount = 0;

var BasicCard = function(frontArg, backArg){
 this.frontArg = frontArg;
 this.backArg = backArg;
};


var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }//if


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nCorrect!");
          correctAnswerCount++;
        }//if

        else{
          console.log("\nWrong!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswerCount);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();

var questionOne = new BasicCard("What is Mr. Big's real name?", "John");
// console.log(questionOne.frontArg, questionOne.backArg);

var questionTwo = new BasicCard("Who does Carrie write a column for?", "The Daily Star");

var questionThree = new BasicCard("What is Aiden's job?", "furniture designer");

var questionFour = new BasicCard("How does Berger break-up with Carrie?", "A post-it note");

var questionFive = new BasicCard("What does Berger buy to symbolize his break-up?", "motorcycle");

module.exports = BasicCard;
