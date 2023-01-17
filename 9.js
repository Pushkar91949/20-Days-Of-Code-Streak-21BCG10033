function doesTriangleFit(brick, hole) {
	function area(arr){
		const p=arr[0]+arr[1]+arr[2];
		const s=p/2;
		return (s*(s-arr[0])*(s-arr[1])*(s-arr[2]))**0.5;
	}
	function doestexist(arr){
		if(arr[0]+arr[1]>=arr[2] && arr[0]+arr[2]>=arr[1] && arr[2]+arr[1]>=arr[0]){
			return true;
		}
		else{
			return false;
		}
	}
	if(doestexist(brick) && doestexist(hole)){
		let brickA=area(brick);
		let holeA=area(hole);
		if(holeA>=brickA){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}