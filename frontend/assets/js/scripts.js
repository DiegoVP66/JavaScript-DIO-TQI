var currentNumberWrapper = document.getElementById("currentNumber");
currentNumberWrapper.style.color = "blue";
var currentNumber = 0;

let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");

increment.addEventListener("click", function () {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;
  currentNumber > 9
    ? (increment.disabled = true)
    : (decrement.disabled = false);
  numberColor();
});

decrement.addEventListener("click", function () {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
  increment.disabled = false;
  currentNumber <= -10
    ? (decrement.disabled = true)
    : (increment.disabled = false);
  numberColor();
});

const numberColor = () => {
  currentNumber < 0
    ? (currentNumberWrapper.style.color = "red")
    : (currentNumberWrapper.style.color = "blue");
};

/*
function increment() {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;
  console.log(currentNumberWrapper.innerHTML);
}

function decrement() {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
  console.log(currentNumberWrapper.innerHTML);
}*/
