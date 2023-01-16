function numberSquares(n) {
	if(n===0){
		return 0;
	}
	else{
		return n**2 + numberSquares(n-1);
	}
	
}