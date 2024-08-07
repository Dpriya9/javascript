// display content
const displyaContent = (contents) => {
  inputData.value += contents;
};

// clear screen
const clearScreen = () => {
  inputData.value = "";
  inputData.placeholder = "0";
};

// evaluate expression
const exprEval = () => {
  try {
    inputData.value = eval(inputData.value);
  } catch {
    inputData.value = "";
    inputData.placeholder = "Syntax ERROR!!!";
  }
};

// remove
const removeLast = () => {
  inputData.value = inputData.value.slice(0, -1);
};
