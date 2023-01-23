function rockpaperscissors(p1,p2){
    if(p1===p2){
        console.log("It's a draw.");
    }
    else if(p1==="Rock" && p2==="Scissors"
            || p1==="Scissors" && p2==="Paper"
            || p1==="Paper" && p2==="Rock"){
                console.log("Winner is P1");
            }
    else{
        console.log("Winner is P2");
    }


}
rockpaperscissors("Rock","Scissors");
rockpaperscissors("Rock","Paper");
rockpaperscissors("Rock","Rock");