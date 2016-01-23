/*
Your code goes here!
 */
 function checkPasswords(firstPasswordInput, secondPasswordInput) {
 	//passwords object for iterations
 	var passwords = {
 		0: firstPasswordInput,
 		1: secondPasswordInput
 	};

 	//for each password define the pattern that the password must match
 	var constraints = {
 		0: ['[\!\@\#\$\%\^\&\*]', "no required symbols found, please try again"],
 		1: ['[0-9]', "no numbers found, please try again"],
 		2: ['[a-z]', "no lowercase letters found, please try again"],
 		3: ['[A-Z]', "no uppercase letters found, please try again"],
 		4: ['[^A-z0-9\!\@\#\$\%\^\&\*]', "illegal characters found, please try again"]
 	};

 	//check both passwords for all specs
 	for(i = 0; i < 2; i ++) 
 	{
 	 	//clear CustomValidity
 	 	passwords[i].setCustomValidity("");

 	 	//clear total error message
 	 	var errorMessage = "";

 	 	//check if too short or too long
 	 	if(passwords[i].value.length < 16) 
 	 	{
 	 		//log the error
 	 		if(errorMessage == "") errorMessage = "password " + (i+ 1) + ": (" + passwords[i].value + ") is less than 16 characters";
 	 		else errorMessage += ", is less than 16 characters";
 	 	}
 	 	else if(passwords[i].value.length > 100) {
 	 		//log the error
 	 		if(errorMessage == "") errorMessage = "password " + (i+ 1) + ": (" + passwords[i].value + ") is more than 100 characters";
 	 		else errorMessage += ", is more than 100 characters";
 	 	}
 	 	else 
 	 	{
 	 		//if the password is within bounds check for other qualities
 	 		for(j = 0; j < 4; j++) 
 	 		{
	 	 		var constraint = new RegExp(constraints[j][0], "");
	 	 		
	 	 		//check the password against the constraint
	 	 		if(!(constraint.test(passwords[i].value))) 
	 	 		{
	 	 			//log the error
		 	 		if(errorMessage == "") errorMessage = "password " + (i+ 1) + ": (" + passwords[i].value + ") " + constraints[j][1];
		 	 		else errorMessage += ", " + constraints[j][1];
	 	 		}
	 	 		
 	 		}

 	 		//check restricted characters
 	 		var constraint = new RegExp(constraints[4][0], "");

 	 		//run the gate
 	 		if(constraint.test(passwords[i].value))
 	 		{
 	 			//log the error
		 	 	if(errorMessage == "") errorMessage = "password " + (i+ 1) + ": (" + passwords[i].value + ") " + constraints[j][1];
		 	 	else errorMessage += ", " + constraints[j][1];
 	 		}

 	 	}

 	 	//confirm that the passwords match
 	 	if(!(passwords[0].value === passwords[1].value))
 	 	{
 	 		//log the error
 	 		if(i==0)
 	 		{
	 	 		if(errorMessage == "") errorMessage = "password " + (i + 1) + ": (" + passwords[0].value + ") does not match the second password (" + passwords[1].value + ")";
			 	else errorMessage += ", does not match the second password (" + passwords[1].value + ")";
			}
			else
			{
				if(errorMessage == "") errorMessage = "password " + (i + 1) + ": (" + passwords[1].value + ") does not match the second password (" + passwords[0].value + ")";
			 	else errorMessage += ", does not match the second password (" + passwords[0].value + ")";
			}
 	 	}

 	 	//log the error messages to the validity object
 	 	console.log(errorMessage);
 	 	passwords[i].setCustomValidity(errorMessage);	
 	}

 }

 function returnPassValidity(primaryPassword, confirmationPassword)
 {
 	 //for each password define the pattern that the password must match
 	var constraints = {
 		0: ['[\!\@\#\$\%\^\&\*]', "no required symbols, please try again"],
 		1: ['[0-9]', "no numbers, please try again"],
 		2: ['[a-z]', "no lowercase letters, please try again"],
 		3: ['[A-Z]', "no uppercase letters, please try again"],
 		4: ['[^A-z0-9\!\@\#\$\%\^\&\*]', "illegal characters found, please try again"]
 	};

 	//clear total error message
 	var errorMessage = "";

 	//check if too short or too long
 	if(primaryPassword.value.length < 16) 
 	{
 	 	//log the error
 	 	if(errorMessage == "") errorMessage = "password is less than 16 characters";
  		else errorMessage += ", is less than 16 characters";
 	}
 	else if(primaryPassword.value.length > 100) 
 	{
 	 	//log the error
 	 	if(errorMessage == "") errorMessage = "password is more than 100 characters";
 		else errorMessage += ", is more than 100 characters";
 	}
 	else 
 	{
 		//if the password is within bounds check for other qualities
 	 	for(j = 0; j < 4; j++) 
 	 	{
	 	 	var constraint = new RegExp(constraints[j][0], "");
	 	 		
	 	 	//check the password against the constraint
	 	 	if(!(constraint.test(primaryPassword.value))) 
	 	 	{
	 	 		//log the error
		 		if(errorMessage == "") errorMessage = "password has " + constraints[j][1];
		 	 	else errorMessage += ", has " + constraints[j][1];
	 	 	}
	 	 		
 	 	}

 	 	//check restricted characters
 	 	var constraint = new RegExp(constraints[4][0], "");

 	 	//check the password against the constraint
 	 	if(constraint.test(primaryPassword.value))
 	 	{
 	 		//log the error
		  	if(errorMessage == "") errorMessage = "password has " + constraints[j][1];
		 	else errorMessage += ", has " + constraints[j][1];
  		}

 	 	//confirm that the passwords match
 	 	if(!(primaryPassword.value === confirmationPassword.value))
 	 	{
	 	 	if(errorMessage == "") errorMessage = "password does not match the second password.";
			else errorMessage += ", does not match the second password.";
 	 	}

 	}

 	//log the error messages
 	//console.log(errorMessage);

 	//return the erro message
 	return errorMessage;
 }
/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
	//deprecated this function
	//checkPasswords(firstPasswordInput, secondPasswordInput);

	//provide useful feedback
	firstPasswordInput.setCustomValidity(returnPassValidity(firstPasswordInput, secondPasswordInput));
	secondPasswordInput.setCustomValidity(returnPassValidity(secondPasswordInput, firstPasswordInput));

	//log the results
	console.log(returnPassValidity(firstPasswordInput, secondPasswordInput));
};

