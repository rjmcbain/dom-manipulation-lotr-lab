console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  console.log("hello");
  var newSection = document.createElement("section");
  newSection.setAttribute ("id", "middle-earth");
  for (i=0; i < lands.length; i++){
    var newLand = document.createElement("article");
    var headerText = document.createElement("h1");
    headerText.innerText = lands[i];
    newLand.appendChild(headerText);
    newSection.appendChild(newLand);
  }
body.appendChild(newSection);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  


var hobbitList = document.createElement("ul");
hobbitList.setAttribute("id" , "hobbitslist");


  for (var i = 0; i < hobbits.length; i++){
    var li = document.createElement("li");
    li.innerText = hobbits[i];
    li.setAttribute ("id" , "hobbit" + i );
    hobbitList.appendChild(li);
  }
  var shire = document.querySelectorAll('article')[0];
  shire.appendChild(hobbitList);
}


makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
var theRing = document.createElement("div");
theRing.setAttribute ("id", "the-ring");
theRing.setAttribute("class" , 'magic-imbued-jewelry');
theRing.addEventListener("click" , function() {
    nazgulScreech();
  });
var frodo = document.getElementById("hobbit0");
frodo.appendChild(theRing);



}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement("aside");
  var unOrdered = document.createElement("ul");   
  for (var i = 0; i < buddies.length; i++){
    var li = document.createElement("li");
    li.innerText = buddies[i];              
    li.setAttribute("id" , "buddies" + i);
    unOrdered.appendChild(li);    
  
  }
    aside.appendChild(unOrdered);
    console.log(aside);
    var rivendell = document.querySelectorAll("article");
    console.log(rivendell);
    rivendell[1].appendChild(aside);
}
makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementById('buddies3');
  strider.innerText = "Aragorn";

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var hobbits = document.getElementById('hobbitslist');
console.log(hobbits);
var rivendell = document.querySelectorAll("article");
rivendell[1].appendChild(hobbits);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
