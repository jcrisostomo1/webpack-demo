import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
	const btn = document.createElement('button');

	btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  
  // Lodash, now imported by this script
  //element.textContent = myName("Josh Crisostomo");

  return element;
}
  
document.body.appendChild(component());