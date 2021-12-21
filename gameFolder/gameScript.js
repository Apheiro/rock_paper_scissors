/*
The big comments are to help me remember what are the functionalities of the code I made because. I am
new to programming (づ￣ 3￣)づ
*/

const rps = ["rock", "paper", "scissors"];
let computerPoints = 0;
let humanPoints = 0;
let result;
let roundStage = 0;

/*
Global scope variables
*/

function computerPlay() {

    function ranNumber() {
        let number = Math.floor(Math.random() * rps.length);
        return number;
    }

    return rps[ranNumber()]
}

/*
Here it finishes the function with which the computers can select a random decision, in this function 
I put math.random multiplied by the quantity of indexes that I have in my array, all this inside a 
math.floor that is in charge to erase all the decimals of the result of the multiplication, and this
result serves to select in the index of my array 
*/

function playRound(humanSelection) {
    const computerSelection = computerPlay()
    humanSelection = humanSelection.toLowerCase()

    if (humanSelection != "rock" && humanSelection != "paper" && humanSelection != "scissors") {
        result = "Put your choice rock-paper-scissors"

    } else if (humanSelection == computerSelection) {
        result = "tie";
        roundStage++

    } else if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "scissors" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "rock")) {
        humanPoints++
        roundStage++
        result = "You Win!";


    } else {
        computerPoints++
        roundStage++
        result = "You Lose";

    }
}

/*
this function decides who is the winner of the round in the game. In this case I create a variable with
the name "result" and I have made a condition that assigns a value to my variable depending on the case, and at the end of the function
console.log shows the result. (this variable and console.log is only for test my code in the final result
this can be change!!)
*/

function game() {
    while (humanPoints < 5 && computerPoints < 5) {
        playRound(prompt("What is your choice?"))
        console.log(humanPoints)
        console.log(computerPoints)
        if (humanPoints < 5) {
            console.log(result)
        } else if (humanPoints == 5) {
            console.log("YOU WON!")
        } else if (computerPoints == 5) {
            console.log("YOU LOST")
        }
    }
}

game()