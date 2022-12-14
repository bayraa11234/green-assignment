// const todoTarget = document.querySelector('#todoTarget');

let n = prompt('Таах утга оруулна уу?');

const testTarget = document.querySelector('#testTarget');
const inputTarget = document.querySelector('#inputTarget');

// console.log(todoTarget.childNodes);
// const firstLi = todoTarget.querySelectorAll("li")[0];
// console.log(firstLi);
// parentNode.removeChild(childNode);
// firstLi.parentNode.removeChild(firstLi);

inputTarget.addEventListener("keypress",function(e){
    if(e.key === "Enter"){

        if(Number(e.target.value) === Number(n)){
            document.querySelector(".TestTarget").innerHTML ="😍"+ e.target.value + " Зөв таалаа 🥰";
            document.querySelector(".testTarget").innerHTML = "🤩  🎈  🥳 ";
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
            document.querySelector(".testTarget").innerHTML ="😵 "+ e.target.value + " Утга ороогүй байна 😵";
        }
        // result(todoTarget);
    
    }
    
});