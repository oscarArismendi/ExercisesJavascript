
const tennisGame = function (){
    const player1 = parseFloat(document.getElementById("player1").value)
    const player2 = parseFloat(document.getElementById("player2").value)

    let result = "Not a valid game";
    if((player1 < 6 && player2 < 6) || (Math.max(player1,player2) == 6 && Math.min(player1,player2) < 7)) {
        result = "The game has not finish"
        console.log(result)
    }   else if((player2 == 6 && (player1 < 5)) || (player2 == 7 && player1 < 7)){
        result = "Player 2 win";
    }   else if((player1 == 6 && player2 < 5) || (player1 == 7 && player2 < 7)){
        result = "Player 1 win";
    }
    document.getElementById("result").innerHTML="Result: "+result;
};