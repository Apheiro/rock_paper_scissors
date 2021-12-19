/*
The big comments are to help me remember what are the functionalities of the code I made because. I am
new to programming (づ￣ 3￣)づ
*/

let computerPoints = document.querySelector("#computerPoints");
let humanPoints = document.querySelector("#humanPoints");;

function computerPlay() {

    function ranNumber() {
        let number = Math.floor(Math.random() * 3);
    return number;
    }

    const rps = ["rock","paper","scissors"];
    return rps[ranNumber()];
}

/*
Here it finishes the function with which the computers can select a random decision, in this function 
I put math.random multiplied by the quantity of indexes that I have in my array, all this inside a 
math.floor that is in charge to erase all the decimals of the result of the multiplication, and this
result serves to select in the index of my array 
*/

function playRound(playerSelection, computerSelection) {
    let result;
    computerSelection = computerPlay()

    if (playerSelection == computerSelection) {
        result = "tie";

    } else if ( 
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        result = "You Win!";
        

    } else {
        result = "You Lost";
        
    }
    console.log(result)

}

/*
this function decides who is the winner of the round in the game. In this case I create a variable with
the name "result" and I have made a condition that assigns a value to my variable depending on the case, and at the end of the function
console.log shows the result. (this variable and console.log is only for test my code in the final result
this can be change!!)
*/


