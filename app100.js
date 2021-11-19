//  get modal elements
let instruction = document.getElementById('instruction');
let win = document.getElementById('win');
let loose = document.getElementById('loose');

// get display elements
let tryNbrDisplay = document.getElementById('tryNbr');
let nbrTestFrame = document.getElementById('case').getElementsByTagName('span');
let upOrDown = document.getElementById('upOrDown');
let arrow = document.getElementById('arrow').querySelector("div");
let actualNbr = document.getElementsByClassName('nbr');

// get click element
let start = document.getElementById('start');
let test = document.getElementById('testBtn');
let reStart = document.getElementById('reStart');

/** GAME **/
let tryNbr = 0;

// number to find
let nbrToFind = 0;
function randomNbr (){
    nbrToFind = Math.ceil(Math.random() * 100);
    actualNbr[0].innerHTML = nbrToFind.toString();
    actualNbr[1].innerHTML = nbrToFind.toString();
    console.log(nbrToFind);
}

// start
start.addEventListener('click', function (){
    instruction.style.display = "none";

    randomNbr();
})

// test
test.addEventListener('click', function (){
    // get input value
    let nbr = parseInt(document.getElementById("nbr").value);
    document.getElementById("nbr").value = "";
    if(isNaN(nbr) || nbr < 0 || nbr > 100 ){
        alert('veuillez entrer un nombre entre 1 et 100');
    }
    else {
        // check
        if(nbrToFind === nbr){
            win.style.display = "flex";
            reStart.addEventListener('click', function (){
                // game
                randomNbr()
                // clear nbrTest[i] + set tryNbr to 0 + clear input value
                for(let i =0 ; i < nbrTestFrame.length ; i++){
                    nbrTestFrame[i].innerHTML = "";
                }
                tryNbr = 0;
                tryNbrDisplay.innerHTML = tryNbr.toString();
                win.style.display = 'none';
            })
        }
        else if (nbrToFind > nbr){
            tryNbr++;
            upOrDown.innerHTML = "plus grand";
            arrow.style.backgroundImage = 'url("arrow-up-6-xxl.png")';
        }
        else {
            tryNbr++;
            upOrDown.innerHTML = "plus petit";
            arrow.style.backgroundImage = "url('arrow-down-6-xxl.png')";
        }
    }

})

