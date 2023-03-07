let cards=[]
let sum=0
let hasblackjack=false
let isAlive=false
let message=''
let messageEl=document.querySelector('#message')
let sumEl=document.getElementById('sum')
let cardsEl=document.getElementById('cards')
let player={
    name: 'Elnar',
    money: 600
}

let playerEl=document.getElementById('player1').textContent=player.name + ': $' + player.money  




function renderGame(){

    if(sum<=20)
{
    message=('Do you want to draw a new card?')
}
else if (sum===21) {
    message=("You've got Blackjack!")
    hasblackjack=true
} else {
    message=("You're out of the game")
    isAlive=false
}
messageEl.textContent=message
sumEl.textContent='Sum: ' + sum
cardsEl.textContent='Cards: ' 
for(let i=0; i<cards.length;i++){
    cardsEl.textContent+=' ' + cards[i]
}
}

function newCard(){
    if (isAlive===true && hasblackjack===false){
        let card=getRandomCard()
        cards.push(card)
        sum+=card
        renderGame()
    }

}

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13) +1
    if (randomNumber>10){
        return  10
    }
  
     else if (randomNumber===1){
    return 11
   }
   else {
    return randomNumber
   }
    }

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

