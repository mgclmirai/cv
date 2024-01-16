function perform() {
  const userNumbersInput = document.getElementById("userNumbers").value;
  const userNumbersArray =
    userNumbersInput.split(",").map((num) => parseFloat(num.trim())) || [];

  const sum = userNumbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  document.getElementById("reduceResult").textContent = sum;

  const filterArray = userNumbersArray.filter((value) => value > 0);
  document.getElementById("filterResult").textContent = filterArray;

  const squareArray = userNumbersArray.map((value) => value * value);
  document.getElementById("mapResult").textContent = squareArray;

  const sortArray = userNumbersArray.sort((a, b) => a - b);
  document.getElementById("sortResult").textContent = sortArray;
}
