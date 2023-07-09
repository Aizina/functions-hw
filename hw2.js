//TAKS 1

const arr2 = [0, 1, 2, 3, 4, 5, 6, 0, 0, 7, 8, 9, 10, null, 'lalalala'];

function countZerosOddsEvens(arr) {
  let zeroNumber = arr.filter(element => element === 0).length;
  let evenNumber = arr.filter(element => typeof element === 'number' && element % 2 === 0).length;
  let oddNumber = arr.filter(element => typeof element === 'number' && element % 2 !== 0).length;
  
  console.log("Number of even elements:", evenNumber);
  console.log("Number of odd elements:", oddNumber);
  console.log("Number of elements equal to Zero:", zeroNumber);
}

countZerosOddsEvens(arr2);

// TASK 2

function isPrime(x) {
  let i;

  if (x < 2 || x > 1000) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(100)); 

// TASK 3

function findSum(number1) {
    return function returnSum(number2) {
      return number1 + number2;
    };
  }
  
  const sum = findSum(5);
  console.log(sum(3));


// TASK 4

function showIntervalNumbers(a, b) {
  let currentNumber = a;

  const intervalId = setInterval(() => {
    console.log(currentNumber);
    if (currentNumber === b) {
      clearInterval(intervalId);
    }
    currentNumber++;
  }, 100  );
}

showIntervalNumbers(5, 10)

// TASK 5

const getNumberPower = (x, n) => Math.pow(x, n);
console.log(getNumberPower(2,5));


