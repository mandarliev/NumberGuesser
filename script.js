let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, closestGuess) => {
    const humanDifference = Math.abs(closestGuess - humanGuess)
    const computerDifference = Math.abs(closestGuess - computerGuess)
    return humanDifference <= computerDifference
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
