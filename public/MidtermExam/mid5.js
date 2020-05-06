let a = [ "hello.html", "world.js", "readme.txt" ];

for(let i = 0; i < 3; i++){
function getExtension(fileName) {
    let b = a[i].split(".");
    return b[1];
    }
    console.log("."+getExtension(a[i]));
}