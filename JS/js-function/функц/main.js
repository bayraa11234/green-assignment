//ogogdson 2 toonii ihiig butsaah function
function ihToo(){
let a = prompt('ehnii utga');
let b = prompt('daraagiin utga');

const arr = [a, b];
console.log(Math.max(...arr));
}
//ogogdson too arrayt baigaa esehiig shalgah
function adilUtga(){
    let c = 32
    let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
    for(let val of arr){
        if(c === val){
            console.log(`${c} ni arrayin ${val} gesen utgatai tentsuu baina`)
        }
        else{
            console.log('-1');
        }
    }
}
adilUtga();
//Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
    function temdegtMor(){
        let temdeg = '+';
        let arr = ['!', '@', '#', '^', '%', '&', '*','-', '+'];
        for(let i = 0; i<=arr.length; i++){
            if(temdeg === arr[i]){
                console.log(`${temdeg} ni arrayiin ${arr[i]} tei adilhan baina`);
            }
            else{
                console.log('-1');
            }
        }
    }
    temdegtMor();
//Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич
function randomNumber(){
    let d = 2;
    let e = 16;
    console.log(`random too generate:${Math.round((Math.random()*(e-d))+d)}`);
}
randomNumber();
//Өгөгдсөн array - ийн дундажыг олох функц бич.
//Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
function arrAverage(){
    let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
    let sum = 0;
    for(let value of arr){
        sum+=value
    }
    console.log(`${sum} ni arrayiin niilber`);
    console.log(`${sum/arr.length} ni arrayiin dundaj`);
}
arrAverage();
//Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function primeNumber(){
let n = 18;
let i = 2;
let isPrime = true;
while (i <= n / 2) {
    if (isPrime) {
        isPrime = n % i !== 0;
        i++;
    }
    else {
        i = n;
    }
}
console.log(`${n} ni anhnii utga ${isPrime}`);
}
primeNumber();
//Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том болон жижиг үсэг болгох функц бич.
function Word(){
    let word = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
}
Word();