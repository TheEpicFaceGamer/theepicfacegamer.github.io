import { clear } from '../../util/screens.js';
var screen = document.querySelector(".terminal");
var myVideo = document.getElementById("myVid");
clear();
screen.style.display = 'none';
myVideo.style.display = 'block';
function playVideo() { 
 myVideo.play(); 
} 
playVideo()

const output = [
" "
];

export { output };