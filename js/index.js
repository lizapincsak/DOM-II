// Your code goes here
// 1 mouseover
const signUpButton = document.querySelectorAll('.btn');

signUpButton.forEach(b => {
    b. addEventListener('mouseover', function(event){
        event.target.style.color = 'orange';
    })
})

// 2 wheel?? hella complicated
let scale = 1;
const zoom = (event) => {
//   event.preventDefault();
  if (event.deltaY < 0) {
    scale *= event.deltaY * -1.1;
  } else {
    scale /= event.deltaY * 1.1;
  }
  scale = Math.min(Math.max(.1, scale), 3);
  el.style.transform = `scale(${scale})`;
}
const el = document.querySelector('.intro');
document.onwheel = zoom;

// 3 dblclick works
const destination = document.querySelector('.content-destination');

destination.addEventListener('dblclick', function (event){
    destination.classList.toggle('large');
})

//4 select
document.getElementById("myText").onselect = function(event) {
    myFunction ();
}
function myFunction() {
    document.getElementById('demo').innerHTML = "You selected some text!";
}

// 5 onresize
document.getElementById("resize").onresize = function(event) {
    myFunctionResize();
}
var x = 0;
function myFunctionResize() {
    var txt = x += 1;
    document.getElementById('demoResize').innerHTML = txt;
}

//6 click
const homeButton = document.querySelector('.home');

homeButton.addEventListener('click', function(event){
    event.target.style.color = "pink";
})

//7 keydown
document.addEventListener('keydown', function(event){
    //if event object contains the key 'escape', kill modal
    if(event.key === "Escape"){
        destination.classList.add('off');
    }
    // debugger;
})

//8 & 9 focus and blur
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
})
//scroll <p id = "destP"></p> not working
document.getElementById('myDiv').onscroll = function(){
    myScrollFunction()
}

function myScrollFunction(){
    document.getElementById("destP").innerHTML = "You scrolled!"
}

