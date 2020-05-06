let a = [];

for (let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * 100 + 1);
}

function callback(a) {
    let num = 0;
    if(a[i] % 2 == 0){
        return num++;
    }
}

let sum = a.reduce(callback);
console.log(a);