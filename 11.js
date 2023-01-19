function derivative(b, m) {
	if(b===0){
		return 0;
	}
	else if(b===1){
		return 1;
	}
	else{
		return b*m**(b-1);
	}
}