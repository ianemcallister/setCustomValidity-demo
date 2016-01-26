/*
check the passwords
 */
 function checkPasswords(firstPasswordInput, secondPasswordInput) {
 	//passwords object for iterations
 	var passwords = {
 		0: firstPasswordInput,
 		1: secondPasswordInput
 	};

 	//declare an array for error messages
 	var errorMessages = {
 		0: [],
 		1: []
 	};

 	//for each password define the pattern that the password must match
 	var constraints = {
 		0: ['[\!\@\#\$\%\^\&\*]', " no required symbols found"],
 		1: ['[0-9]', " no numbers found"],
 		2: ['[a-z]', " no lowercase letters found"],
 		3: ['[A-Z]', " no uppercase letters found"],
 		4: ['[^A-z0-9\!\@\#\$\%\^\&\*]', " illegal characters found"]
 	};

 	//check both passwords for all specs
 	for(i = 0; i < 2; i ++) 
 	{
 	 	//clear CustomValidity
 	 	passwords[i].setCustomValidity("");

 	 	//check if too short or too long
 	 	if(passwords[i].value.length < 16) 
 	 	{
 	 		//log the error
 	 		errorMessages[i].push(" less than 16 characters");
 	 	}
 	 	else if(passwords[i].value.length > 100) 
 	 	{
 	 		//log the error
 	 		errorMessages[i].push(" more than 100 characters");
 	 	}

 	 	//if the password is within bounds check for other qualities
 	 	for(j = 0; j < 4; j++) 
 	 	{
	 	 	var constraint = new RegExp(constraints[j][0], "");
	 	 		
	 	 	//check the password against the constraint
	 	 	if(!(constraint.test(passwords[i].value))) 
	 	 	{
	 	 		//log the error
		 	 	errorMessages[i].push(constraints[j][1]);
		 	}
	 	 		
 	 	}

 	 	//check restricted characters
 	 	var constraint = new RegExp(constraints[4][0], "");

 	 	//run the gate
 	 	if(constraint.test(passwords[i].value))
 	 	{
  			//log the error
 	 		errorMessages[i].push(constraints[4][1]);
		}

 	 	//confirm that the passwords match
 	 	if(!(passwords[0].value === passwords[1].value))
 	 	{
 	 		//log the error
 	 		if(i==0)
 	 		{
	 	 		//log the error
	 	 		errorMessages[i].push(" does not match the confirmation password");
	 	 	}
			else
			{
				//log the error
				errorMessages[i].push(" does not match the original password");
			}
 	 	}

 	 	//log the error messages to the console
 	 	console.log("(" + i + ") " + passwords[i].value + " " + errorMessages[i].join());
 	 	
 	 	//join the error messages and add to custom validity
 	 	passwords[i].setCustomValidity(errorMessages[i].join());
 	}

 }

/*
Grabbing a few inputs to help get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
on submit
 */  
submit.onclick = function () {
	//check the passwords
	checkPasswords(firstPasswordInput, secondPasswordInput);
};

