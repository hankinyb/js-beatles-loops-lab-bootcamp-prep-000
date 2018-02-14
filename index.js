function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

function johnLennonFacts() {
    var facts = [];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        facts.push(facts[i] +"!!!");
        i++;
    }
    return facts;
}

function iLoveTheBeatles(i) {
  var love = [];
    do {love.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  
  return love;
}