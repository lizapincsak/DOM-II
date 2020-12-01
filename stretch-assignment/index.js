//Navbar
// const navBar = document.querySelectorAll('.nav-link');
// const mainTitle = document.querySelector('.logo-heading');

// //part 2
// const introPara = document.querySelector('.intro p');

// //part 3
// const subTitle = document.querySelectorAll('.text-content h2');
// const mainContent = document.querySelectorAll('.text-content p')
// const images = document.querySelectorAll('.img-content');

//part4 
console.log('working');

//part 5
const signUpButton = document.querySelectorAll('.btn');
console.log(signUpButton);

//mouseover
signUpButton.addEventListener('mouseover', function(event){
    debugger;
    console.log('happy')
    event.target.style.color = 'orange';
})