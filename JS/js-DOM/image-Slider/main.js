
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
var photo3 = document.getElementById('photo3');
var photo4 = document.getElementById('photo4');
var photo5 = document.getElementById('photo5');

// function Photo1(){
//     if(photo1.style.width === "200px"){
//         photo1.classList.add('photo');
//     }else{
//         photo1.classList.remove('photo');
//     }
// }
photo1.addEventListener("click", Photo1);
document.getElementById('photo2').addEventListener("click", Photo2);
document.getElementById('photo3').addEventListener("click", Photo3);
document.getElementById('photo4').addEventListener("click", Photo4);
document.getElementById('photo5').addEventListener("click", Photo5);
console.log((photo1.style.width));
function Photo1(){
            photo1.classList.add('photo');
            photo2.classList.remove('photo');
            photo3.classList.remove('photo');
            photo4.classList.remove('photo');
            photo5.classList.remove('photo');
}
function Photo2(){
    photo1.classList.remove('photo');
            photo2.classList.add('photo');
            photo3.classList.remove('photo');
            photo4.classList.remove('photo');
            photo5.classList.remove('photo');
}
function Photo3(){
    photo1.classList.remove('photo');
    photo2.classList.remove('photo');
    photo3.classList.add('photo');
    photo4.classList.remove('photo');
    photo5.classList.remove('photo');
}
function Photo4(){
    photo1.classList.remove('photo');
    photo2.classList.remove('photo');
    photo3.classList.remove('photo');
    photo4.classList.add('photo');
    photo5.classList.remove('photo');
}
function Photo5(){
    photo1.classList.remove('photo');
    photo2.classList.remove('photo');
    photo3.classList.remove('photo');
    photo4.classList.remove('photo');
    photo5.classList.add('photo');
}

