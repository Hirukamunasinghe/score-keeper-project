//PLAYER 1 OBJECT
const p1 ={
    score:0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

//PLAYER 2 OBJECT
const p2 ={
    score:0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

//RESET BUTTON AND WINNING SCORE DISPLAY
const resetButton = document.querySelector('#reset');
const winningScoreDisplay = document.querySelector('#playto')

//INITIALIZING VALUES
let winningScore = 3;
isGameOver = false;

//UPDATESCORE FUNCTION
const updateScores = (player,opponent) =>{
    if(!isGameOver){
        player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//PLAYER 1 BUTTON CLICK
p1.button.addEventListener('click',()=>{
    updateScores(p1,p2)
})

//PLAYER 2 BUTTON CLICK
p2.button.addEventListener('click',()=>{
    updateScores(p2,p1)
})

//RESET BUTTON
const reset = ()=>{
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner','loser')
        p.button.disabled = false;
    }
}

//UPDATING THE WINNING SCORE
winningScoreDisplay.addEventListener('change',()=>{
    winningScore = parseInt(winningScoreDisplay.value)
    reset();
})

//CLICKING THE RESET BUTTON
resetButton.addEventListener('click', reset);

