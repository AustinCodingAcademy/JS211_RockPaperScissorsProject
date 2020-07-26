const rockPaperScissors = (hand1, hand2)  => {
    if (hand1=== hand2) {
        return("it's a tie!");
    }
}
else if (hand1 === 'rock' && hand2 === 'paper'){
    // covers hand 1 rock, hand 2 paper
    else if (hand1 === 'rock' && hand2 === 'paper'){
    return("Hand two wins!");
    }
    else if (hand1 === 'rock' && hand2 === 'scissors'){
    // covers hand 1 rock, hand 2 scissors
    else if (hand1 === 'rock' && hand2 === 'scissors'){
    return("Hand one wins!");
    }
    else if (hand1 === 'paper' && hand2 === 'scissors')
    { 
    else if (hand1 === 'paper' && hand2 === 'scissors'){
    return("Hand two wins!");
    }
    else if (hand1 === 'paper' && hand2 === 'rock'){
    return("Hand one wins!");
}

    else if (hand1 === 'paper' && hand2 === 'rock'){
    return("Hand one wins!");
    }
    // covers hand 1 scissors, hand 2 rock
    else if (hand1 === 'scissors' && hand2 === 'rock'){
    return("Hand two wins!");
    }
    // covers hand 1 scissors, hand 2 paper
    else if (hand1 === 'scissors' && hand2 === 'paper'){
    return("Hand one wins!");
}