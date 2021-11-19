//  get modal elements
let instruction = document.getElementById('instruction');
let win = document.getElementById('win');
let loose = document.getElementById('loose');

// get display elements
let tryNbr = document.getElementById('tryNbr');
let nbrTest = document.getElementById('case').getElementsByTagName('span');
let upOrDown = document.getElementById('upOrDown');
let arrow = document.getElementById('arrow').querySelector("div");

// get click element
let start = document.getElementById('start');
let test = document.getElementById('testBtn');

// game
// number to find
let nbrToFind = Math.ceil(Math.random() * 100)
console.log(nbrToFind);

start.addEventListener('click', function (){
    instruction.style.display = "none";
})

test.addEventListener('click', function (){
    // get input value
    let nbr = parseInt(document.getElementById('nbr').value);
    console.log(nbr);
    // check
    if(nbrToFind === nbr){
        win.style.display = "flex";
    }
})
