function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed === true) {
    return "Eligible.";
  } else if (age > 18 && isEmployed === false) {
    return "Conditionally eligible.";
  } else {
    return "Not eligible.";
  }
}

// Test the function
console.log(checkEligibility(25, true));  
console.log(checkEligibility(25, false)); 
console.log(checkEligibility(18, true));  
console.log(checkEligibility(16, false)); 