function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var shout = [];
  var i = 0;
  while (i < facts.length) {
        shout.push(facts[i] +"!!!");
        i++;
  }    
  return shout;
}