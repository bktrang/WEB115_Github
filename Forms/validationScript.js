    // JavaScript code for form validation
let myForm = document.getElementById("myForm");
let inputField = myForm.elements.inputField;

// Form submit listener
myForm.addEventListener("submit", validateInput);


// function to validate input data
function validateInput() 
{
	// Prevent form from submitting
  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  // Retrieve the input field value 
  let inputValue = inputField.value;
  //console.log(inputValue);


  // Regular expression pattern for alphanumeric input
  let alpNumExp = new RegExp(/^[a-z0-9]+$/i);
  //console.log(alpNumExp);


  // Check if the input value matches the pattern 
  let validInput = alpNumExp.test(inputValue);
  //console.log(validInput);

    // Valid input: display confirmation and submit the form
  if(validInput)
  {
    alert("Your valid alphanumberic input is: " + inputValue);
    myForm.submit();
  }
  // Invalid input: display error message
  else
  {
    alert("Error*: Invalid input! Only alphanumeric value is allowed");
  }

}