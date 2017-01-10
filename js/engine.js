var a, b, op, ans, m;
var score = 0, ex = 1, level = 1;

function makeQuestion(mode){
  document.getElementById("answer").value = ""; 
  m = mode;
  a = Math.floor(Math.random()*20);
  b = 1+Math.floor(Math.random()*19);
  switch(mode){
	  case 1: 
		ans = a+b;
		op = " + ";
		break;
	  case 2:
		if(a<b){
			var temp = a;
			a = b;
			b = temp; }
		ans = a-b;
		op = " - ";
		break;
	  case 3:
		ans = a*b;
		op = " &#10005; ";
		break;
	  case 4:
	    ans = Math.round(a*100/b)/100;
	    op = " &divide; ";
	    break;
	}
  document.getElementById("question").innerHTML = a+op+b;
  document.getElementById("ex1").innerHTML = "Exercise No: "+ex+"   Level: "+level;
  document.getElementById("score").innerHTML = "Score: "+score;
}

function gameOver(){
	document.getElementById("question").innerHTML = "Game Over. You have scored "+score+" points.";
}

function handle(event){
	if(event.keyCode ==13){
		event.preventDefault();
		check();
	}
}

function check(){
  var text = document.getElementById("answer");
  var ansfloat = parseFloat(text.value);
  if (ansfloat==ans){
     response="Correct";
     score = score+5;
     ex++;
  } else {
     response="Incorrect <br> Correct answer is "+a+op+b+"="+ans;
  }
  var responsediv = document.getElementById("feedback");
  responsediv.innerHTML = response;
  if(ex%10==0) level++;
  if(level<=5) makeQuestion(m);
  else gameOver();
}
