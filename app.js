"use strict";

const numbers = document.querySelectorAll(".number");
const submit = document.querySelector(".btn");
const feedbackCard = document.querySelector(".feedback-card");
const thanksCard = document.querySelector(".thanks-card");
const selectedNumber = document.querySelector(".selected-number");

function selectingNumber() {
  // Removing class, so after clicking on second element, the first goes back to the original style
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("number-active");
  }

  // After removing all the styles, we can add a new one that will only works on one element at a time
  this.classList.add("number-active");
  submit.classList.add("btn-active");
}
numbers.forEach((number) => number.addEventListener("click", selectingNumber));

function submittingNumber(e) {
  e.preventDefault;
  // Looping through number to see wheter a number has applied style, if so, feedbackCard will dissapear and thanksCard will show up upon clicking submit button
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].classList.contains("number-active")) {
      feedbackCard.style.display = "none";
      thanksCard.style.display = "block";
      // Setting textContent of the number on thanksCard to the specific iterator that fires up the event
      selectedNumber.textContent = numbers[i].textContent;
    }
  }
}
submit.addEventListener("click", submittingNumber);
