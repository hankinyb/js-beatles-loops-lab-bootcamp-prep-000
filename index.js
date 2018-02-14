function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

function johnLennonFacts() {

  var shout = [];
  var i = 0;
  while (i < facts.length) {
        shout.push(facts[i] +"!!!");
        i++;
  }    
  return shout;
}