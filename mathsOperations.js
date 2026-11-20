function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" || isNaN(price) ||
    typeof quantity !== "number" || isNaN(quantity) ||
    typeof taxRate !== "number" || isNaN(taxRate)
  ) {
    return "Invalid input.";
  }

  let totalCost = (price * quantity) * (1 + taxRate);

  return totalCost;
}

// Test the function
  // 32.4
console.log(calculateTotalCost(25, 5, 0.06));  // 53
console.log(calculateTotalCost(10, "3", 0.08)); // Invalid input.
console.log(calculateTotalCost(10, 3, "tax"));  // Invalid input.
console.log(calculateTotalCost(10, 3, 0.4));