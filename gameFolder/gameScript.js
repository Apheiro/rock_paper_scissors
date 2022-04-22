
const btn = document.querySelectorAll(".options");
const points = document.querySelectorAll(".points");
const announcer = document.querySelector("#announcer");
const lines = document.querySelectorAll(".lines");
const rps = ["rock", "paper", "scissors"];
let computerPoints = 0;
let humanPoints = 0;
let result;
let roundStage = 0;

/*<------------------------------------------------------------------------------->*/

function computerPlay() {

    function ranNumber() {
        let number = Math.floor(Math.random() * rps.length);
        return number;
    }

    return rps[ranNumber()]
}

/*<------------------------------------------------------------------------------->*/

function playRound(humanSelection, computerSelection) {

    if (humanSelection != "rock" && humanSelection != "paper" && humanSelection != "scissors") {
        result = "Put your choice rock-paper-scissors"
    } else if (humanSelection == computerSelection) {
        result = "tie";
        roundStage++
    } else if ((humanSelection == "rock" && computerSelection == "scissors") ||
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

/*<------------------------------------------------------------------------------->*/

function announcerText() {
    announcer.textContent = result;
    if (result == "You Win!" || result == "YOU WON!") {
        announcer.classList.add('announcerWin');
        lines.forEach(line => line.classList.add('announcerWin'));
        
    } else if (result == "You Lose" || result == "YOU LOST!") {
        announcer.classList.add("announcerLose");
        lines.forEach(line => line.classList.add('announcerLose'));

    } else {
        announcer.classList.add("announcerTie");
        lines.forEach(line => line.classList.add('announcerTie'));
        
    }
}


function removeClass(e) {
    if (e.propertyName !== 'color' && e.propertyName !== "border-color") return;
    this.classList.remove('announcerWin')
    this.classList.remove('announcerLose')
    this.classList.remove('announcerTie')

    if (this.id == "announcer") {
        announcer.textContent = "Select";
    }

}

announcer.addEventListener("transitionend", removeClass)

lines.forEach(line => line.addEventListener("transitionend", removeClass))

function game() {
    const humanSelection = this.id;
    const computerSelection = computerPlay()

    playRound(humanSelection, computerSelection)

    points.forEach(point => {
        if (point.id == "humanPoints") {
            point.textContent = humanPoints;
        } else if (point.id == "computerPoints") {
            point.textContent = computerPoints;
        }
    })


    if (humanPoints == 5) {
        result = "YOU WON!";
    } else if (computerPoints == 5) {
        result = "YOU LOST!";
    }

    announcerText()
    
}

btn.forEach(button => button.addEventListener('click', game))











