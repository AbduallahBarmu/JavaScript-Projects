/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var scores , roundScore , activePlayer , dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0   ;


//document.querySelector('#current-' + activePlayer).textContent = dice ;
// document.querySelector('#current- ' + activePlayer )innerHTML = '<em>'+ dice + '</em>';

var x = document.querySelector('#current-0' ).textContent ;
console.log(x);

document.querySelector('.dice' ).style.display ='none' ;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



// make event and function for the button

document.querySelector('.btn-roll').addEventListener('click', function(){
  // 1- random number
  var dice = Math.floor(Math.random() * 6) + 1  ;  // generat integer by using(floor) and random number
  // 2- display the result
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';

  diceDom.src = 'dice-' + dice + '.png'   // taek the name of image and edit it
  // 3- update the round score if the rolled number was NOT a 1
  if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore ;
  }else {
      // next player
      nextPlayer();
  }

});


document.querySelector('.btn-hold').addEventListener('click' , function(){

    // add current score to global scores
    scores[activePlayer] += roundScore;

    // ubdate the UI
    document.querySelector('#score-' + activePlayer ).textContent = scores[activePlayer];

    // check if player won the game
    if( scores[activePlayer] >= 20 ){
      document.querySelector('#name-' + activePlayer).textContent ='winner!';
      document.querySelector('.dice').style.display = 'none';  // to maek image disapper after swaping the" active"  for next playe
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner!');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else {
          // next player
          nextPlayer();
    }
});




function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
  roundScore = 0 ;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';  // to maek image disapper after swaping the" active"  for next player
}
