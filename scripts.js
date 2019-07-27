var userchoice;
var computerchoice;

var wins = 0;
var losses = 0;
var ties = 0;

var win_round = false;
var lose_round = false;
var tie_round = false;

// 1 is rock
// 2 is paper
// 3 is scissors

function makeChoice() {
  computerchoice = Math.floor((Math.random() *3) + 1);

}

/* var boxOne = document.getElementsByClassName('box')[0],
    $boxTwo = $('.box:eq(1)');

document.getElementsByClassName('toggleButton')[0].onclick = function() {
  if(this.innerHTML === 'Play') 
  { 
    this.innerHTML = 'Pause';
    boxOne.classList.add('horizTranslate');
  } else {
    this.innerHTML = 'Play';
    var computedStyle = window.getComputedStyle(boxOne),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxOne.style.marginLeft = marginLeft;
    boxOne.classList.remove('horizTranslate');    
  }  
} */
function wait(){
  return;
}

function resetCards(){

  var userCard = document.getElementById('newid');
  userCard.classList.remove('flip-card-inner');
  var computerCard = document.getElementById('newid2');
  computerCard.classList.remove('flip-card-inner');

  win_round = false;
  lose_round = false;
  tie_round = false;

  document.getElementById('winner').innerHTML="";


}

function resetComputer() {
  var computerCard = document.getElementById('newid2');
  userCard.classList.remove('flip-card-inner');
  setTimeout(wait, 2000);
}

function flipUser() {
  // setTimeout(wait, 300);
  var userCard = document.getElementById('newid');
  userCard.classList.add('flip-card-inner');
}

function flipComputer() {
  var computerCard = document.getElementById('newid2');
  computerCard.classList.add('flip-card-inner');
}

function findWinner(input) {
  resetCards();
  setTimeout(wait, 2000);
  makeChoice();

  // Rock block
  if (input == 1 && computerchoice == 1) {
    document.getElementById('computer-picture').src='rock.png';
    document.getElementById('user-picture').src='rock.png';
    document.getElementById('computer-text').innerHTML="Rock";
    document.getElementById('user-text').innerHTML="Rock";
    // document.getElementById('winner').innerHTML="It's a tie!";
    tie_round = true;
    ties++;
  }
  if (input == 1 && computerchoice == 2) {
    document.getElementById('computer-picture').src='paper.png';
    document.getElementById('user-picture').src='rock.png';
    document.getElementById('computer-text').innerHTML="Paper";
    document.getElementById('user-text').innerHTML="Rock";
    // document.getElementById('winner').innerHTML="You Lose!";
    lose_round = true;
    losses++;
  }
  if (input == 1 && computerchoice == 3) {
    document.getElementById('computer-picture').src='scissors.png';
    document.getElementById('user-picture').src='rock.png';
    document.getElementById('computer-text').innerHTML="Scissors";
    document.getElementById('user-text').innerHTML="Rock";
    // document.getElementById('winner').innerHTML="You Win!";
    win_round = true;
    wins++;
  }

  // Paper block
  if (input == 2 && computerchoice == 1) {
    document.getElementById('computer-picture').src='rock.png';
    document.getElementById('user-picture').src='paper.png';
    document.getElementById('computer-text').innerHTML="Rock";
    document.getElementById('user-text').innerHTML="Paper";
    // document.getElementById('winner').innerHTML="You Win!";
    win_round = true;
    wins++;
  }
  if (input == 2 && computerchoice == 2) {
    document.getElementById('computer-picture').src='paper.png';
    document.getElementById('user-picture').src='paper.png';
    document.getElementById('computer-text').innerHTML="Paper";
    document.getElementById('user-text').innerHTML="Paper";
    // document.getElementById('winner').innerHTML="It's a tie!";
    tie_round = true;
    ties++;
  }
  if (input == 2 && computerchoice == 3) {
    document.getElementById('computer-picture').src='scissors.png';
    document.getElementById('user-picture').src='paper.png';
    document.getElementById('computer-text').innerHTML="Scissors";
    document.getElementById('user-text').innerHTML="Paper";
    // document.getElementById('winner').innerHTML="You Lose!";
    lose_round = true;
    losses++;
  }

  // Scissors block
  if (input == 3 && computerchoice == 1) {
    document.getElementById('computer-picture').src='rock.png';
    document.getElementById('user-picture').src='scissors.png';
    document.getElementById('computer-text').innerHTML="Rock";
    document.getElementById('user-text').innerHTML="Scissors";
    // document.getElementById('winner').innerHTML="You Lose!";
    lose_round = true;
    losses++;
  }
  if (input == 3 && computerchoice == 2) {
    document.getElementById('computer-picture').src='paper.png';
    document.getElementById('user-picture').src='scissors.png';
    document.getElementById('computer-text').innerHTML="Paper";
    document.getElementById('user-text').innerHTML="Scissors";
    // document.getElementById('winner').innerHTML="You Win!";
    win_round = true;
    wins++;
  }
  if (input == 3 && computerchoice == 3) {
    document.getElementById('computer-picture').src='scissors.png';
    document.getElementById('user-picture').src='scissors.png';
    document.getElementById('computer-text').innerHTML="Scissors";
    document.getElementById('user-text').innerHTML="Scissors";
    // document.getElementById('winner').innerHTML="It's a tie!";
    tie_round = true;
    ties++;
  }

  setTimeout(flipUser, 200);
  setTimeout(flipComputer, 1000);

  // window.setTimeOut(flipComputer(), 50);
  setTimeout(function thing() {
  document.getElementById('display-wins').innerHTML="<h2>Wins:   " +  wins + "</h2>";
  document.getElementById('display-losses').innerHTML="<h2>Losses:  " +  losses + "</h2>";
  document.getElementById('display-ties').innerHTML="<h2>Ties:   " + ties + "</h2>";

  if (win_round == true) {
    document.getElementById('winner').innerHTML="You Win!";
  }
  if (lose_round == true) {
    document.getElementById('winner').innerHTML="You Lose!";
  }
  if (tie_round == true) {
    document.getElementById('winner').innerHTML="It's a tie!";
  }

  }, 1500);

}

// TODO:
// * Card front image alignment
// * Card back div formating
// * Reset button
// * Reset function for return to cardback
// * Overall formatting

// * Timer on the result
// * longer time on card back


