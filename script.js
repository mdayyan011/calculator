function prevvalue(){
  return document.getElementById("numbers_prev").innerText;
}

function printprev(num){
   document.getElementById("numbers_prev").innerText=num;
}
function resultvalue(){
  return document.getElementById("numbers_results").innerText;
}

function printresult(num){
  document.getElementById("numbers_results").innerText=num;
}


//OPERATORS

var operators=document.getElementsByClassName("operators");
for(var i=0;i<operators.length;i++){
  operators[i].addEventListener('click',function()
  {
     if(this.id=="C")
     {
       printprev("");
       printresult("");
     }
    else if(this.id=="backspace"){
			var output=resultvalue().toString();
			if(output){
				output= output.substr(0,output.length-1);
				printresult(output);
			}
		}

     else{
			var output=resultvalue();
			var history=prevvalue();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output=resultvalue();
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printresult(result);
					printprev("");
				}
				else{
					history=history+this.id;
					printprev(history);
					printresult("");
				}
			}
     }
  })
}

//NUMBERS

var numbers=document.getElementsByClassName("numbers_keypad");
for(var i=0;i<numbers.length;i++){
  numbers[i].addEventListener('click',function()
  {
    var val=resultvalue();
    if(val!=NaN){
      val=val+this.id;
      printresult(val);
    }
  }
  )}