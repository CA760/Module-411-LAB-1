function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  firstName = firstName.trim().toLowerCase();
  lastName = lastName.trim().toLowerCase();

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${lastName}, ${firstName}`;
}

// Test the function
console.log(formatFullName("charles", "asare")); 
console.log(formatFullName("Java", "script"));     
console.log(formatFullName("", "Paul"));          
console.log(formatFullName("Bryan", ""));          