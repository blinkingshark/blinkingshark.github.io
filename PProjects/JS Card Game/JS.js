var pack1 = [[1,1,5,5,5,5,5]];//PlayerNumebr,CardNotUsed,Strength,Energy, Dexterity, Accuracy, Defence
var pack2 = [[2,1,5,5,5,5,5]];//PlayerNumber,CardNotUsed,Stringth,Energy, Dexterity, Accuracy, Defence

var playerOneScore = 0;
var playerTwoScore = 0;


var GenerateRandomNumber = function(){
    return Math.floor(Math.random()*10);
}
var PushToArray = function(currentArray){
    var arrayNumber = currentArray[0][0];
    currentArray.push([arrayNumber,1,GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber()]);
    
}


PushToArray(pack1);
PushToArray(pack1);
PushToArray(pack1);
PushToArray(pack1);
PushToArray(pack1);

PushToArray(pack2);
PushToArray(pack2);
PushToArray(pack2);
PushToArray(pack2);
PushToArray(pack2);

//console.log(pack1);
//console.log(pack2);

var Combat = function(object1, object2){
    console.log(object1);
    console.log(object2);
    
    object1[1]=0;
    object2[1]=0;
    
    var winStrength =-2;
    var winEnergy =-2;
    var winDexterty =-1;
    var winAccuracy =-1;
    var winDefece =-1;

    var strength = object1[2]-object2[2];
    var energy = object1[3]-object2[3];
    var dexterity = object1[4]-object2[4];
    var accuracy = object1[5]-object2[5];
    var defece = object1[6]-object2[6];
    

    

    if (strength>0){
    winStrength = 2;
    }
    if (energy>0){
        winEnergy = 2;
    }
    if (dexterity>0){
       winDexterty =1;
    }
    if (accuracy>0){
        winAccuracy = 1;
    }
    if (defece>0){
        winDefece = 1;
    }


    console.log(winStrength);
    console.log(winEnergy);
    console.log(winDexterty);
    console.log(winAccuracy);
    console.log(winDefece);

    console.log("--------------");

    console.log("Total" + (winStrength+winEnergy+winDexterty+winAccuracy+winDefece));

    console.log("--------------");
    
    if ( (winStrength + winEnergy + winDexterty + winAccuracy+winDefece) > 0 ){
        //console.log("First Arg Wins !");
        if(object1[0] == 1){
            playerOneScore ++;            
        }
        else{
            playerTwoScore ++;
        }
        return object1;
        
        //It will be great if I can add eventHandlers
    }
    else {

        //console.log("Second Arg Wins !");
        if(object2[0] == 1){
            playerOneScore ++;            
        }
        else{
            playerTwoScore ++;
        }

        return object2;
        //It will be great if I can add eventHandlers
    }

    
}


//Because of loading delay
window.onload = function (){
    document.getElementById("combat").addEventListener("click", CombatInitialization);
    document.getElementById("pushTOArray").addEventListener("click", PushToArrayFunction);
    FillTheDeck();
    
}

var PushToArrayFunction = function(){
    PushToArray(pack1);
    PushToArray(pack2);
    //console.log(pack1.length);
}

var CombatInitialization = function(){
        
    //Checking the selection and Combating
    var pack1SendingArg=0;
    if (document.getElementById("player1_radio_1").checked == true){
        pack1SendingArg=1;
    }
    else if (document.getElementById("player1_radio_2").checked == true){
        pack1SendingArg=2;
    }
    else if (document.getElementById("player1_radio_3").checked == true){
        pack1SendingArg=3;
    }
    else if (document.getElementById("player1_radio_4").checked == true){
        pack1SendingArg=4;
    }
    else if (document.getElementById("player1_radio_5").checked == true){
        pack1SendingArg=5;
    }
    else{
        alert("No Selection Other");
    }


    var pack2SendingArg=0;
    if (document.getElementById("player2_radio_1").checked == true){
        pack2SendingArg=1;
    }
    else if (document.getElementById("player2_radio_2").checked == true){
        pack2SendingArg=2;
    }
    else if (document.getElementById("player2_radio_3").checked == true){
        pack2SendingArg=3;
    }
    else if (document.getElementById("player2_radio_4").checked == true){
        pack2SendingArg=4;
    }
    else if (document.getElementById("player2_radio_5").checked == true){
        pack2SendingArg=5;
    }
    else{
        alert("No Selection Other");
    }

    
    Combat(pack1[pack1SendingArg], pack2[pack2SendingArg]);

    document.querySelector("#player1Score").textContent = playerOneScore;
    document.querySelector("#player2Score").textContent = playerTwoScore;

    var i=0;
    //console.log(pack1);
    //console.log(pack2);
    //Disabling used elements
    for(i=1; i<6; i++){
        //console.log("Mysterious"+i);
        if(pack1[i][1]==0){
            document.getElementById("player1_radio_"+i).disabled = true;      
            //console.log("Mysterious Player 1"+i);
        }
        if(pack2[i][1]==0){
            //console.log("Mysterious Player 2"+i);
            
            document.getElementById("player2_radio_"+i).disabled = true;          
        }

        //Unchecking
        document.getElementById("player1_radio_"+i).checked = false;
        document.getElementById("player2_radio_"+i).checked = false;        
    }
}



//Setting The Deck
var FillTheDeck = function(){
    var i;
    var j;
     
    for (i=1; i<6; i++){//card
            
            document.querySelector("#Player1_Card"+i+"_Row1").textContent = "Card_"+ i;
            document.querySelector("#Player1_Card"+i+"_Row2").textContent = pack1[i][2];
            document.querySelector("#Player1_Card"+i+"_Row3").textContent = pack1[i][3];
            document.querySelector("#Player1_Card"+i+"_Row4").textContent = pack1[i][4];
            document.querySelector("#Player1_Card"+i+"_Row5").textContent = pack1[i][5];
            document.querySelector("#Player1_Card"+i+"_Row6").textContent = pack1[i][6];

            document.querySelector("#Player2_Card"+i+"_Row1").textContent = "Card_"+ i;
            document.querySelector("#Player2_Card"+i+"_Row2").textContent = pack2[i][2];
            document.querySelector("#Player2_Card"+i+"_Row3").textContent = pack2[i][3];
            document.querySelector("#Player2_Card"+i+"_Row4").textContent = pack2[i][4];
            document.querySelector("#Player2_Card"+i+"_Row5").textContent = pack2[i][5];
            document.querySelector("#Player2_Card"+i+"_Row6").textContent = pack2[i][6];

            
    }
    
}



