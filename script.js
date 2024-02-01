function validEmail(str) {
  //your JS code here.
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression and return the result
  return emailRegex.test(email);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
