// select the element to perform click event
const calcBtn = document.getElementById("calculate");

// call the addEventListener() on the element
calcBtn.addEventListener("click", () => {
  // arrow function syntax (es6 javascript)
  //   all the values to compute inside the function
  let result = 0;
  var numberOne = document.getElementById("input-1").value;
  var numberTwo = document.getElementById("input-2").value;
  const resField = document.getElementById("result-field");
  var operator = document.getElementById("operation").value;

  // switch to create a conditional logic
  switch (operator) {
    case "Add":
      result = numberOne + numberTwo;
      break;
    case "Subtract":
      result = numberOne - numberTwo;
      break;
    case "Multiply":
      result = numberOne * numberTwo;
      break;
    case "Divide":
      if (numberTwo === 0) {
        console.log("Invalid operation! dividing by zero");
      } else {
        result = numberOne / numberTwo;
      }
      break;
    default:
      console.log("Please select a valid operation");
      break;
  }
  //   convert the result type from number to text
  result.toString();
  //   set the value attribute to result
  resField.value = result;
});
