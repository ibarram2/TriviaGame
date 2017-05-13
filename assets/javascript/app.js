//alert("test");
	

function submitAnswers () {

	var totalQ = 5;
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	//worked var test = document.forms[q1].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
//console.log(test);
	//alert(q5);

	//validate Answer
	
	for(i = 1; i <= totalQ; i++) {
		if(eval("q"+i) == null || eval('q'+i) == ''){
			alert("Question "+ i +" is missing a selection!");
			return false;
		}
	}

	//Decla re correct answers
	var correctAnswer = ["a","b","c","d","a"];

	//check answers
	if(q1 == correctAnswer[0]) {
		score++;
	}

	if(q2 == correctAnswer[1]) {
		score++;
	}

	if(q3 == correctAnswer[2]) {
		score++;
	}

	if(q4 == correctAnswer[3]) {
		score++;
	}

	if(q5 == correctAnswer[4]) {
		score++;
	}

	alert("You answered " + score +" out of 5 correctly!");

}

