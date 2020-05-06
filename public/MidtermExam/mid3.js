let a;
let c = 2;
let r = 3;
let num = Number(0);

for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
        a[i][j] = num;
        num++;
    }
}

console.log(a[1]);