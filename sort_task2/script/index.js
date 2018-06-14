"use strict";

const button = document.getElementById("compare_arrays");
const result = document.getElementById("result");
const firstInput = document.getElementById("first_array");
const secondInput = document.getElementById("second_array");

button.addEventListener("click", () =>
  getResultCompareArrays(firstInput, secondInput, result)
);

firstInput.addEventListener("input", function() {
  changeDisabledButtons(this, document.getElementById("second_array"), button);
});

secondInput.addEventListener("input", function() {
  changeDisabledButtons(this, document.getElementById("first_array"), button);
});

function getResultCompareArrays(firstInput, secondInput, result) {
  const firstString = firstInput.value;
  const secondString = secondInput.value;
  const reg = /\d{1,}/g;

  const firstArray = firstString.match(reg);
  const secondArray = secondString.match(reg);

  result.innerHTML = compareArrays(firstArray, secondArray);
}

function compareArrays(firstArray, secondArray) {
  const sortedFirstArray = firstArray.sort((a, b) => a - b);
  const sortedSecondArray = secondArray.sort((a, b) => a - b);

  if (sortedFirstArray.length !== sortedSecondArray.length) {
    return false;
  }

  for (let key in sortedFirstArray) {
    if (sortedFirstArray[key] !== sortedSecondArray[key]) {
      return false;
    }
  }

  return true;
}

function changeDisabledButtons(firstInput, secondInput, button) {
  if (firstInput.value.length > 0 && secondInput.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
