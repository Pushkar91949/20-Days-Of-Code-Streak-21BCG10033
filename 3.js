function matchHouses(step) {
	if(step===0){
		return 0;
	}
	else if(step<0 || typeof step!=='number'){
		return("Step has to be a positive integer.");
	}
	else{
		return(5*step + 1);
	}
}
matchHouses(9);