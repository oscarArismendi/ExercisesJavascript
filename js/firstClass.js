
const tennisGame = function (){
    const player1 = parseFloat(document.getElementById("player1").value)
    const player2 = parseFloat(document.getElementById("player2").value)

    let result = "Not a valid game";
    if((player1 < 6 && player2 < 6) || (Math.max(player1,player2) == 6 && Math.min(player1,player2) > 4 )) {
        result = "The game has not finish";
        console.log(result)
    }   else if((player2 == 6 && (player1 < 5)) || (player2 == 7 && (player1 == 6 || player1 == 5))){
        result = "Player 2 win";
    }   else if((player1 == 6 && player2 < 5) || (player1 == 7 && (player2 == 6 || player2 == 5))){
        result = "Player 1 win";
    }
    document.getElementById("result").innerHTML="Result: "+result;
};

const longestWord = function (){
    let word1 = document.getElementById("word1").value
    let word2 = document.getElementById("word2").value
    console.log(word1,word2)
    let n1 = word1.length;
    let n2 = word2.length;
    let result = "";
    console.log(n1,n2)
    if(n2 > n1){
        [word1,word2] = [word2,word1];
        [n1,n2] = [n2,n1];
    }

    if(n1 === n2){
        result = (`The two words have the same length`);
    } else if(n1-n2 == 1){
        result = `The word ${word1} has ${n1-n2} more letter than  ${word2}`;
    } else{
        result = `The word ${word1} has ${n1-n2} more letters than  ${word2}`;
    }    
    document.getElementById("result-longest-word").innerHTML=result;

}; 