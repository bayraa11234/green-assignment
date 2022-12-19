let SCORE = 0;
let n = prompt('Таах утга оруулна уу?');

const testTarget = document.querySelector('#testTarget');
const inputTarget = document.querySelector('#inputTarget');
const scoreTarget = document.querySelector("#scoreTarget");
const body = document.getElementsByTagName("body")[0];

function updateScore (point){
    SCORE += point;
    scoreTarget.innerHTML = SCORE;
}

inputTarget.addEventListener("keypress",function(e){
    if(e.key === "Enter"){

        if(Number(e.target.value) === Number(n)){
            document.querySelector(".TestTarget").innerHTML ="😍"+ e.target.value + " Зөв таалаа 🥰";
            document.querySelector(".testTarget").innerHTML = "🤩  🎈  🥳 ";
            body.style.backgroundColor = '#60b347';
            // document.getElementsByTagName("body").style.backgroundColor ="blue";
        }
        if(Number(e.target.value)){
            if(Number(e.target.value) > Number(n)){
                document.querySelector(".TestTarget").innerHTML ="";
                document.querySelector(".testTarget").innerHTML = "🧐 " + e.target.value + " Их байна 😜";
            }
            if(Number(e.target.value) < Number(n)){
                document.querySelector(".TestTarget").innerHTML ="";
                document.querySelector(".testTarget").innerHTML = "🤔 "+e.target.value + " Бага байна 🤪";
            }
        }
        else{
            document.querySelector(".TestTarget").innerHTML ="";
            document.querySelector(".testTarget").innerHTML ="😵 "+ e.target.value + " Тоон утга ороогүй байна 😵";
        }

        // result(todoTarget);
    
    }
    
});