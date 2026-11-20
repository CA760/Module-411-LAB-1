function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    typeof price !== "number" || isNaN(price) ||
    typeof quantity !== "number" || isNaN(quantity) ||
    typeof taxRate !== "number" || isNaN(taxRate) ||
    typeof discount !== "number" || isNaN(discount)
  ) {
    return "Invalid input.";
  }

  let subtotal = price * quantity;
  let discounted = subtotal - discount;
  let totalCost = discounted * (1 + taxRate);

  return totalCost;
}

// Test the function
console.log(calculateTotalCost(10, "charles", 0.08));       
console.log(calculateTotalCost(10, 3, 0.08, 5));    
console.log(calculateTotalCost(25, 2, 0.06, 10));   
console.log(calculateTotalCost(10, 3, 0.08, "5")); 