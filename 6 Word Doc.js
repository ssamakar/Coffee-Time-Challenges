// Challenge: I open up a Word document and type all the numbers 1-10000, separated by spaces, (I did not use any 'thousands' punctuation; just raw numbers). Then, my daughter came along and used search and replace, and changed all the digits '0' into spaces. If I now sum up all the numbers in the document what is the total? (Any number delineated by one or more spaces is a distinct number).

var finished = 0;

var oneToTenThousand = [];

for (var i = 1; i<=10000; i++){
	oneToTenThousand.push(i);
}

for (var j = 0; j < oneToTenThousand.length; j++){
	num = oneToTenThousand[j].toString();
	for (var k = 0; k < num.length; k++){
		x = num.charAt(k);
		if (x != "0"){
			console.log(x);
			finished += parseInt(x);
		}
	}
}