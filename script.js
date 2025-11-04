const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	const result=[];
	let current=[];
	let currentSum=0;

	for(let num of arr){
		if(currentSum+num>n){
			result.push(current);
			current=[num];
			currentSum=num;
		}else{
			current.push(num);
			currentSum+=num;
		}
	}
	if(current.length>0){
		result.push(current);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
