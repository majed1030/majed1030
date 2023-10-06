
var height = 6; //number of guesses
var width = 5; //length of the word 

var row = 0; // current guess (attempt #)
var col = 0; // current letter for that attempt

var gameOver = false;
var word = "SQUID";


window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board 
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <spen id="0-0" class="tile">p</spen>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Listen for Key Press 
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        // alert(e.code);
        if ("keyA" <= e.code && e.code <= "keyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e,code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if (e.code == "Enter") {
            update();
            row += 1; //start new row 
            col = 0; // start at 0 for new row 
        }


        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}


