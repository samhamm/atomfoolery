var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var button = document.getElementById('button');

var cat = 'meow';
var meows = 0;

function meowing() {
  console.log(cat);
  one.textContent = cat;
  two.textContent = 'That was my cat who just meowed up there.';
}

function addMeow() {
  meows += 1;
  console.log(meows + ' meows added!');
  var moreMeow = document.createElement('li');
  moreMeow.textContent = 'MEOW';
  three.appendChild(moreMeow);
}

meowing();

button.addEventListener('click', addMeow);
