let PlayGame = (hand1,hand2) => {
  let Words = ['rock', 'paper', 'scissors'];
  let i = Words.indexOf(hand1.toLowerCase());
  let ii = Words.indexOf(hand2.toLowerCase());
  let SumN = i + ii;
  let Outcome='Hand two wins!'
  , Winner = 'Hand one wins!'
  , Tie = "It's a tie!";

  if (i == ii) {
      //Msg = 'Tie';
      Outcome = Tie;
  }
  else if (SumN == 1) {
      //Msg = 'Paper covers Rock';
      if (i == 1) Outcome = Winner;
  }
  else if (SumN == 2) {
      //Msg = 'Rock destroys Scissors';
      if (i == 0) Outcome = Winner;
  }
  else if (SumN == 3) {
      //Msg = 'Scissors cut Paper';
      if (i == 2) Outcome = Winner;
  };  
  console.log(Outcome)
};


PlayGame('rock','rock');
PlayGame('rock','paper');
PlayGame('rock','scissors');

PlayGame('paper','paper');
PlayGame('paper','scissors');

PlayGame('scissors','scissors');


