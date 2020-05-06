let a1 = [];

for(let i = 0; i < 3; ++i){
    a1[i] = new Array();
    for(let j = 0; j < 2; ++j){
        a1[i][j] = 2*i + j;
    }
}

let a2 = [];

console.log(a1);
console.log(a2);