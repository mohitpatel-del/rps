function rps() {
    const outcomes = ['Rock', 'Paper', 'Scissor']
    let rand = Math.round(Math.random() * 2)
    let outcome;
    if (rand === 0) {
        outcome = outcomes[0]
    } else if (rand === 1) {
        outcome = outcomes[1]
    } else if (rand === 2) {
        outcome = outcomes[2]
    }
    return outcome
}

const player1Div = document.querySelector('.player1')
const player2Div = document.querySelector('.player2')
const header = document.querySelector('.header')

function win(winner) {
    if (winner === 'player1') {
        header.innerText = "🎊Player 1 Wins🎊"
    } else if (winner === 'player2') {
        header.innerText = "🎊Player 2 Wins🎊"
    } else if (winner === "tie") {
        header.innerText = "🪔Tie🪔"
    }
}

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    const player1 = rps();
    const player2 = rps();

    if (player1 === 'Rock' && player2 === 'Paper') {
        player1Div.innerText = `${player1} 🤜`
        player2Div.innerText = `${player2} 🖐`
        win('player2')
    } else if (player1 === 'Rock' && player2 === 'Scissor') {
        player1Div.innerText = `${player1} 🤜`
        player2Div.innerText = `${player2} 🤞`
        win('player1')
    } else if (player1 === 'Paper' && player2 === 'Scissor') {
        player1Div.innerText = `${player1} 🖐`
        player2Div.innerText = `${player2} 🤞`
        win('player2')
    } else if (player1 === 'Paper' && player2 === 'Rock') {
        player1Div.innerText = `${player1} 🖐`
        player2Div.innerText = `${player2} 🤛`
        win('player1')
    } else if (player1 === 'Scissor' && player2 === 'Rock') {
        player1Div.innerText = `${player1} 🤞`
        player2Div.innerText = `${player2} 🤛`
        win('player2')
    } else if (player1 === 'Scissor' && player2 === 'Paper') {
        player1Div.innerText = `${player1} 🤞`
        player2Div.innerText = `${player2} 🖐`
        win('player1')
    } else if (player1 === 'Rock' && player2 === 'Rock') {
        player1Div.innerText = `${player1}🤜`
        player2Div.innerText = `${player2}🤛`
        win('tie')
    } else if (player1 === 'Paper' && player2 === 'Paper') {
        player1Div.innerText = `${player1}🖐`
        player2Div.innerText = `${player2}🖐`
        win('tie')
    } else if (player1 === 'Scissor' && player2 === 'Scissor') {
        player1Div.innerText = `${player1}🤞`
        player2Div.innerText = `${player2}🤞`
        win('tie')
    }
})