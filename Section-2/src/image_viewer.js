import '../styles/image_views.css';
import  sml from '../assets/small.jpg';
import  big from'../assets/big.jpg';

const smlImage = document.createElement('img');

smlImage.src = sml;

document.body.appendChild(smlImage);

const bigImage = document.createElement('img');

bigImage.src = big;

document.body.appendChild(bigImage);