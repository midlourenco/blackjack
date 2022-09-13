let var1=0
let var2=0
let cards=[]
let sum =0
let gameStatus=""
let isGameOver=false
let isBlackjack = false


let gameBtns = document.querySelectorAll(".btn-new-card")
let startBtn= document.getElementById("start-btn")
let statusMsg = document.getElementById("game-status")
let cardsList = document.getElementById("cards-list")

let player ={
    name: "Petter",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    return Math.round(Math.random()*11)+1
}

function startGame(){
    cards=[]
    sum=0
    cleanOldGame()
    var1= getRandomCard()
    var2= getRandomCard()
    cards.push(var1)
    cards.push(var2)
    
    cards.forEach(element => {
        cardsList.textContent += element +" - "
    });
    gameDinamic()
}

     
function newCard(){
let var3= getRandomCard()
cards.push(var3)
cardsList.textContent += var3 + " - "
gameDinamic()
}

function endGame(){
    gameBtns.forEach(element => {
        element.setAttribute("class", "hide")
    });
    statusMsg.textContent="Game Over"
    startBtn.removeAttribute("class","hide")
    cleanOldGame()
}

function cleanOldGame(){
    document.getElementById("game-score").textContent=""
    cardsList.textContent=""
}

function gameDinamic(){
    sum=0
    cards.forEach(element => {
        sum += element
    });
    

    startBtn.setAttribute("class","hide")
    document.getElementById("game-score").textContent=sum
    document.getElementById("initial-message").setAttribute("class", "hide")


    if(sum<21){
        gameStatus = "Do you want new card?"
        gameBtns.forEach(element => {
            element.removeAttribute("class","hide")
        });
        
    }else if(sum===21){
        gameStatus = "Blackjack! you win!"
        isBlackjack=true
        
    }else {
        gameStatus = "you lost :("
        isGameOver=true
    }
    if(isGameOver || isBlackjack){
        startBtn.removeAttribute("class","hide")
        gameBtns.forEach(element => {
            element.setAttribute("class", "hide")
        });
    }
    statusMsg.textContent=gameStatus
}
