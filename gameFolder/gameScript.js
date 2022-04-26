const btn = document.querySelectorAll(".options");
const points = document.querySelectorAll(".points");
const announcer = document.querySelector("#announcer");
const lines = document.querySelectorAll(".lines");
const computerSelection = document.querySelector("#resultComputer");
const rps = ["rock", "paper", "scissors"];
const content = document.querySelector("#computer");
const content2 = document.querySelector("#divisor");
const content3 = document.querySelector("#human");
const main = document.querySelector('#game')


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
function animation() {
    const humanSelection = this.id;
    const computerPlaySelec = computerPlay()

    setTimeout(() => {
        btn.forEach(button => button.classList.add("deleteAnimation"));
        computerSelection.classList.add("deleteAnimation");
    }, 500);
    
    setTimeout(() => {
        btn[1].classList.remove('deleteAnimation');
        btn[1].classList.add('optionSelection');
        btn[1].innerHTML = `<img src="../Images/${humanSelection}.png" alt='${humanSelection}'></>`;
        computerSelection.classList.remove('deleteAnimation');
        computerSelection.classList.add('optionSelectionComp');
        //computerSelection.style = 'transform: rotate(180deg);'
        computerSelection.innerHTML = `<img src="../Images/${computerPlaySelec}.png" alt='${computerPlaySelec}'></>`;
    }, 2000);
  
    setTimeout(() => game(humanSelection, computerPlaySelec), 3000)

    setTimeout(() => {
        btn.forEach(button => button.classList.remove("deleteAnimation"));
        btn[1].classList.remove('optionSelection');
        btn[1].innerHTML = `<img src="../Images/paper.png" alt='paper'></>`;
        //computerSelection.style = 'transform: rotate(180deg);'
        computerSelection.classList.remove('optionSelectionComp');
        computerSelection.innerHTML = `（╬ಠ益ಠ）`;
    }, 5500);

}

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

function game(humanSelection, computerPlaySelec) {

    playRound(humanSelection, computerPlaySelec)

    points.forEach(point => {
        if (point.id == "humanPoints") {
            point.textContent = humanPoints;
        } else if (point.id == "computerPoints") {
            point.textContent = computerPoints;
        }
    })


    if (humanPoints == 5) {
        setTimeout(() => [content, content2, content3].forEach(content => content.classList.add('deleteAnimation')), 2100)
        setTimeout(() => [content, content2, content3].forEach(content => content.style = 'display: none ;'), 2900)
        setTimeout(() => {
            const retryMenu = document.createElement('div');
            retryMenu.style = "display:flex; align-items:center; justify-content:center; flex-direction: column;"
            retryMenu.innerHTML = `<h1 class="announcerWin" style = "font-size: 63px;">YOU WON!</h1> <button onClick="window.location.reload()" style = "cursor:pointer; border:none; border-radius: 17px; background-color:#0C1713; color:#65B891; font-size: 34px; padding: 20px; ">retry?</button>`;
            main.style = "display:flex; justify-content: center; flex-direction: none;"
            main.appendChild(retryMenu);
            
        },3000)
        result = "YOU WON!";

    } else if (computerPoints == 5) {
        setTimeout(() => [content, content2, content3].forEach(content => content.classList.add('deleteAnimation')), 2100)
        setTimeout(() => [content, content2, content3].forEach(content => content.style = 'display: none ;'), 2900)
        setTimeout(() => {
            const retryMenu = document.createElement('div');
            retryMenu.style = "display:flex; align-items:center; justify-content:center; flex-direction: column;"
            retryMenu.innerHTML = `<h1 class="announcerLose" style = "font-size: 63px;">GAME OVER</h1> <button onClick="window.location.reload()" style = "cursor:pointer; border:none; border-radius: 17px; background-color:#0C1713; color:#CC2936; font-size: 34px; padding: 20px;">retry?</button>`;
            main.style = "display:flex; justify-content: center; flex-direction: none;"
            main.appendChild(retryMenu);
            
        }, 3000)
        result = "YOU LOST!";
    }

    announcerText()
    
}

btn.forEach(button => button.addEventListener('click', animation))

btn.forEach(button => button.addEventListener('click', () => {
    button.style = "pointer-events: none;"
    setTimeout(() => button.style = "pointer-events: auto;", 5500);
}))


function removeClass(e) {
    if (e.propertyName !== 'color' && e.propertyName !== "border-color") return;

    this.classList.remove('announcerWin', 'announcerTie', 'announcerLose');

    if (this.id == "announcer") {
        announcer.textContent = "Select";
    }

}
announcer.addEventListener("transitionend", removeClass)
lines.forEach(line => line.addEventListener("transitionend", removeClass))









