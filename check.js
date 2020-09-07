
function check(){
  if(validateID()==false  || validatequestion()==false || validatepassword()==false){
    return false;
  }else{
  return true;
 }
}

function validateID(){
	if (document.forms[0].username.value=="") {
	alert("The userID could not be empty");
	document.getElementById("question1").style.backgroundColor="yellow";      
    return false;
    }else{
    	document.getElementById("question1").style.backgroundColor="white";
    	return true
    }
}


function validatequestion(){
	if (document.forms[0].answer.value=="") {
   	alert("The birthday could not be empyt");
   	document.getElementById("question2").style.backgroundColor="yellow";      
    return false;
   }
   else{
   	document.getElementById("question2").style.backgroundColor="white";
    return true;
   }
}

function validatepassword(){
	if (document.forms[0].passwordChange.value=="") {
   	alert("You need to rest the password");
   	document.getElementById("question3").style.backgroundColor="yellow";      
    return false;
   }
   else{
   	document.getElementById("question3").style.backgroundColor="white";
    return true;
   }
}
