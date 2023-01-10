fetch('https://randomuser.me/api')
.then(res=> res.json())
.then((randomuser)=>console.log(randomuser));

// console.log(randomuser);