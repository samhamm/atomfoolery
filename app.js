var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var button = document.getElementById('button');
var meowser = document.getElementById('meowser');


var cat = 'meow';
var meows = 0;
var delayMeow;

function meowing() {
  console.log(cat);
  one.textContent = cat;
  two.textContent = 'That was my cat who just meowed up there.';
}

function meeeeeow() {
  var meowSound = new Audio('meow.mp3');
  meowSound.play();
  console.log('meow sound');
}

function angryMeow() {
  var meowSound = new Audio('angry-cat-sound.wav');
  meowSound.play();
  console.log('meow sound');
}

// function addMeow() {
//   meeeeeow();
//   // delayMeow = window.setTimeout(meeeeeow, 5000);
//   meows += 1;
//   meowser.innerHTML = meows + ' meows added!';
//   var moreMeow = document.createElement('li');
//   moreMeow.textContent = 'MEOW';
//   three.appendChild(moreMeow);
// }

// meowing();

button.addEventListener('click', meeeeeow);

document.getElementById('angry').addEventListener('click', angryMeow);
