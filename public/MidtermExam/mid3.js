let a = [];

for(let i = 0; i < 3; ++i)
    for(let j = 0; j < 2; ++j){
        a[i][j] = i*2 + j;
    }

console.log(a);