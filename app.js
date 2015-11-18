var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var button = document.getElementById('button');

var cat = 'meow';

function meowing() {
  console.log(cat);
  one.textContent = cat;
  two.textContent = 'That was my cat who just meowed up there.';
}

function addMeow() {
  console.log('meow added!');
  var moreMeow = document.createElement('li');
  moreMeow.textContent = 'MEOW';
  three.appendChild(moreMeow);
}

meowing();

button.addEventListener('click', addMeow);
