// import avatar from './avatar.jpg';
import './index.scss';
import createAvatar from './createAvatar'
import style from './index.scss';
const avatar = require('./avatar.jpg')

console.log('ddd', avatar)
var img=new Image();
img.src=avatar;
img.classList.add(style.avatar);
var root = document.getElementById('root');
createAvatar();
root.append(img);