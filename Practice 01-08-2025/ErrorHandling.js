// basic
try {
  let x = y + 1;
} catch (err) {
  console.log("An error occurred:", err.message);
}

// finnally
try {
  let result = 10 / 0;
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("This will always run.");
}

// throw custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err.message);
}
