//  get modal elements
let instruction = document.getElementById('instruction');
let info = document.getElementById('info');

// get display elements
let tryNbrDisplay = document.getElementById('tryNbr');
let nbrTestFrame = document.getElementById('case').getElementsByTagName('span');
let upOrDown = document.getElementById('upOrDown');
let arrow = document.getElementById('arrow').querySelector("div");
let actualNbr = document.getElementById('nbr');
let wOrL = document.getElementById('weenOrLoos');

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
    actualNbr.innerHTML = nbrToFind.toString();
    console.log(nbrToFind);
}

// start
start.addEventListener('click', function (){
    document.getElementById("inNbr").focus();
    instruction.style.display = "none";
    randomNbr();
})

// test
test.addEventListener('click', function (){
    // get input value
    let nbr = parseInt(document.getElementById("inNbr").value);
    console.log("nbr = " + nbr);
    document.getElementById("inNbr").value = "";
    if(isNaN(nbr) || nbr <= 0 || nbr > 100 ){
        alert('veuillez entrer un nombre entre 1 et 100');
    }
    else {
        // check
        if(nbrToFind === nbr){
            wOrL.innerHTML = "Vous avez gangné !!!"
            info.style.display = "flex";
            reStart.addEventListener('click', function (){
                // game
                randomNbr()
                // clear nbrTest[i] + set tryNbr to 0 + clear input value
                for(let i =0 ; i < nbrTestFrame.length ; i++){
                    nbrTestFrame[i].innerHTML = "";
                }
                tryNbr = 0;
                tryNbrDisplay.innerHTML = tryNbr.toString();
                info.style.display = 'none';
                upOrDown.innerHTML = "";
                arrow.style.backgroundImage = "unset";
            })
        }
        else if (nbrToFind > nbr){
            nbrTestFrame[tryNbr].innerHTML = nbr.toString();
            tryNbr++;
            upOrDown.innerHTML = "plus grand";
            arrow.style.backgroundImage = 'url("arrow-up-6-xxl.png")';
        }
        else {
            nbrTestFrame[tryNbr].innerHTML = nbr.toString();
            tryNbr++;
            upOrDown.innerHTML = "plus petit";
            arrow.style.backgroundImage = "url('arrow-down-6-xxl.png')";
        }
        tryNbrDisplay.innerHTML = tryNbr.toString();
        document.getElementById("inNbr").focus();
        if(tryNbr === 10){
            wOrL.innerHTML = "Vous avez perdu !!!"
            info.style.display = "flex";
        }
    }
})

