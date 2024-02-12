let listVerifyNumber = [];

const numberVerify = function () {
    userNumber = document.getElementById("user-number").value;
    //reverse the text
    userNumber = userNumber.split("").reverse("").join("");
    let i = 2;
    let totSum = 0;
    for(let number of userNumber){// of give the value in give the key
        totSum += parseInt(number)*i;
        i++; 
        if(i > 7){
            i = 2;
        }
    }
    totSum %= 11;
    totSum = 11- totSum;
    userNumber = userNumber.split("").reverse("").join("");
    let result = userNumber+"-"+totSum.toString();
    let numberFound = false;
    for(let number of listVerifyNumber){
        if(number === result ){
            result = "Already in the database"
            numberFound = true;
        }
    }
    if(!numberFound){
        listVerifyNumber.push(result);
    }
    document.getElementById("result-verify").innerHTML="Result: "+result;
};

function showVerifyNumbers() {
    let divBefore = document.querySelectorAll(".holder");
    // divBefore = [...divBefore];
    n = divBefore.length;
    console.log(n);
    for(let i = 0;i < n;i++){
        divBefore[i].remove();
    }
    for(let num of listVerifyNumber) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("holder");
        let newContent = document.createTextNode(num); 
        newDiv.appendChild(newContent);
        document.getElementById("box-list").appendChild(newDiv)
    }

};

