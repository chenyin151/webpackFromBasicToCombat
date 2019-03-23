// import avatar from './avatar.jpg';
const avatar = require('./avatar.jpg')
import './index.css';
console.log('ddd', avatar)
var img=new Image();
img.src=avatar;
img.classList.add('avatar');
var root = document.getElementById('root');
root.append(img);