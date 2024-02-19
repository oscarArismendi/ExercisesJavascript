const answer = "hangman";
let cntimg = 1;
let ongoing = true;
function verifyWord(){
    userInput = document.getElementById("user-input").value;
    resultVerify= document.getElementById("result-verify").innerHTML;
    let cnt = 0;
    let j = 0;
    for(let i=0 ; i < answer.length ; i++){
        if(userInput === answer[i]){
            cnt++;
            resultVerify = resultVerify.substr(0,j)+userInput+resultVerify.substr(j+1);
        }
        j += 2; 
    }
    document.getElementById("result-verify").innerHTML = resultVerify;
    if(cnt === 0 && ongoing){
        document.getElementById('hangmanImg').src="../images/hangman" + cntimg + ".png";
        cntimg++;
    }
    
    if(cntimg === 8){
        ongoing =  false;
        alert("GameOver")
    } else if(resultVerify.split(" ").join("") === answer){
        ongoing = false;
        alert("You Win")
    }
}

function resetGame(){
    document.getElementById('hangmanImg').src="../images/hangman" + 0 + ".png";
    document.getElementById("result-verify").innerHTML = "_ _ _ _ _ _ _";
    cntimg = 1;
    ongoing = true;
}