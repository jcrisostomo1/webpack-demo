import _ from 'lodash';
import myName from './myName';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import './style.css';

function component() {
  const element = document.createElement('div');
  
  // Lodash, now imported by this script
  element.textContent = myName("Josh Crisostomo");
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

	console.log(Data);
  console.log(Notes);
	
  return element;
}
  
document.body.appendChild(component());