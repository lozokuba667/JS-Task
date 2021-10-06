// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  var numberAsText = number.toString();
  const myArray = numberAsText.split("");
  myArray.reverse();
  var newNumber = myArray.join("");
  newNumber = Number(newNumber);
  return newNumber;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  var sumOfEven = 0;
  for (let i in array) {
    if (array[i] % 2 == 0) {
      sumOfEven += array[i];
    }
  }
  return sumOfEven;
}

console.log("2.", addEven(tab));
