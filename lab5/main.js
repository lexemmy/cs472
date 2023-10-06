'use strict'

function max(a, b) {
  return a > b ? a : b
}

function maxOfThree(a, b, c) {
  return Math.max(a, b, c)
}

function isVowel(character) {
  return character.length === 1
    ? 'aeiou'.includes(character.toLowerCase())
    : false
}

function sum(numbers) {
  return numbers.reduce((total, current) => total + current, 0)
}

function multiply(numbers) {
  return numbers.reduce((product, current) => product * current, 1)
}

function reverse(str) {
  return str.split('').reverse().join('')
}

function findLongestWordLength(words) {
  return words.reduce((max, word) => Math.max(max, word.length), 0)
}

function filterLongWords(words, i) {
  return words.filter((word) => word.length > i)
}

function computeSumOfSquares(numbers) {
  return numbers.reduce((total, num) => total + num ** 2, 0)
}

function printOddNumbersOnly(numbers) {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0)
  oddNumbers.forEach((oddNumber) => console.log(oddNumber))
}

function computeSumOfSquaresOfEvensOnly(numbers) {
  const sumOfSquares = numbers
    .filter((number) => number % 2 === 0)
    .map((evenNumber) => evenNumber ** 2)
    .reduce((total, square) => total + square, 0)

  return sumOfSquares
}

function printFibo(n, a, b) {
  if (n < 1) return

  let sequence = [a, b]

  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2]
    sequence.push(nextNumber)
  }

  console.log(sequence.join(', '))
}

function testMax() {
  const result1 = max(5, 10)
  const result2 = max(10, 5)
  const result3 = max(5, 5)

  console.log(result1 === 10 ? 'max Test 1 Passed' : 'max Test 1 Failed')
  console.log(result2 === 10 ? 'max Test 2 Passed' : 'max Test 2 Failed')
  console.log(result3 === 5 ? 'max Test 3 Passed' : 'max Test 3 Failed')
}

function testMaxOfThree() {
  const result1 = maxOfThree(5, 10, 7)
  const result2 = maxOfThree(10, 5, 2)
  const result3 = maxOfThree(5, 5, 5)

  console.log(
    result1 === 10 ? 'maxOfThree Test 1 Passed' : 'maxOfThree Test 1 Failed'
  )
  console.log(
    result2 === 10 ? 'maxOfThree Test 2 Passed' : 'maxOfThree Test 2 Failed'
  )
  console.log(
    result3 === 5 ? 'maxOfThree Test 3 Passed' : 'maxOfThree Test 3 Failed'
  )
}

function testIsVowel() {
  const result1 = isVowel('A')
  const result2 = isVowel('b')
  const result3 = isVowel('e')
  const result4 = isVowel('Z')

  console.log(
    result1 === true ? 'isVowel Test 1 Passed' : 'isVowel Test 1 Failed'
  )
  console.log(
    result2 === false ? 'isVowel Test 2 Passed' : 'isVowel Test 2 Failed'
  )
  console.log(
    result3 === true ? 'isVowel Test 3 Passed' : 'isVowel Test 3 Failed'
  )
  console.log(
    result4 === false ? 'isVowel Test 4 Passed' : 'isVowel Test 4 Failed'
  )
}

function testSum() {
  const result1 = sum([1, 2, 3, 4])
  const result2 = sum([0, 0, 0, 0])
  const result3 = sum([])

  console.log(result1 === 10 ? 'sum Test 1 Passed' : 'sum Test 1 Failed')
  console.log(result2 === 0 ? 'sum Test 2 Passed' : 'sum Test 2 Failed')
  console.log(result3 === 0 ? 'sum Test 3 Passed' : 'sum Test 3 Failed')
}

function testMultiply() {
  const result1 = multiply([1, 2, 3, 4])
  const result2 = multiply([1, 0, 5])
  const result3 = multiply([])

  console.log(
    result1 === 24 ? 'multiply Test 1 Passed' : 'multiply Test 1 Failed'
  )
  console.log(
    result2 === 0 ? 'multiply Test 2 Passed' : 'multiply Test 2 Failed'
  )
  console.log(
    result3 === 1 ? 'multiply Test 3 Passed' : 'multiply Test 3 Failed'
  )
}

function testReverse() {
  const result1 = reverse('jag testar')
  const result2 = reverse('')
  const result3 = reverse('abcdefg')

  console.log(
    result1 === 'ratset gaj' ? 'reverse Test 1 Passed' : 'reverse Test 1 Failed'
  )
  console.log(
    result2 === '' ? 'reverse Test 2 Passed' : 'reverse Test 2 Failed'
  )
  console.log(
    result3 === 'gfedcba' ? 'reverse Test 3 Passed' : 'reverse Test 3 Failed'
  )
}

function testFindLongestWordLength() {
  const result1 = findLongestWordLength(['apple', 'banana', 'cherry', 'date'])
  const result2 = findLongestWordLength(['', 'a', 'ab'])
  const result3 = findLongestWordLength([])

  console.log(
    result1 === 6
      ? 'findLongestWordLength Test 1 Passed'
      : 'findLongestWordLength Test 1 Failed'
  )
  console.log(
    result2 === 2
      ? 'findLongestWordLength Test 2 Passed'
      : 'findLongestWordLength Test 2 Failed'
  )
  console.log(
    result3 === 0
      ? 'findLongestWordLength Test 3 Passed'
      : 'findLongestWordLength Test 3 Failed'
  )
}

function testFilterLongWords() {
  const result1 = filterLongWords(['apple', 'banana', 'cherry', 'date'], 5)
  const result2 = filterLongWords(['', 'a', 'ab'], 2)
  const result3 = filterLongWords([], 3)

  console.log(
    JSON.stringify(result1) === '["banana","cherry"]'
      ? 'filterLongWords Test 1 Passed'
      : 'filterLongWords Test 1 Failed'
  )
  console.log(
    JSON.stringify(result2) === '[]'
      ? 'filterLongWords Test 2 Passed'
      : 'filterLongWords Test 2 Failed'
  )
  console.log(
    JSON.stringify(result3) === '[]'
      ? 'filterLongWords Test 3 Passed'
      : 'filterLongWords Test 3 Failed'
  )
}

function testComputeSumOfSquares() {
  const result1 = computeSumOfSquares([1, 2, 3])
  const result2 = computeSumOfSquares([0, 0, 0])
  const result3 = computeSumOfSquares([])

  console.log(
    result1 === 14
      ? 'computeSumOfSquares Test 1 Passed'
      : 'computeSumOfSquares Test 1 Failed'
  )
  console.log(
    result2 === 0
      ? 'computeSumOfSquares Test 2 Passed'
      : 'computeSumOfSquares Test 2 Failed'
  )
  console.log(
    result3 === 0
      ? 'computeSumOfSquares Test 3 Passed'
      : 'computeSumOfSquares Test 3 Failed'
  )
}

function testPrintOddNumbersOnly() {
  const capturedOutput = captureConsoleOutput(() => {
    printOddNumbersOnly([1, 2, 3, 4, 5])
  })

  const outputLines = capturedOutput
    .split('\n')
    .filter((line) => line.trim() !== '')

  console.log(
    outputLines.join(', ') === '1, 3, 5'
      ? 'printOddNumbersOnly Test 1 Passed'
      : 'printOddNumbersOnly Test 1 Failed'
  )
}

function testComputeSumOfSquaresOfEvensOnly() {
  const result1 = computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5])
  const result2 = computeSumOfSquaresOfEvensOnly([2, 4, 6, 8])
  const result3 = computeSumOfSquaresOfEvensOnly([])

  console.log(
    result1 === 20
      ? 'computeSumOfSquaresOfEvensOnly Test 1 Passed'
      : 'computeSumOfSquaresOfEvensOnly Test 1 Failed'
  )
  console.log(
    result2 === 120
      ? 'computeSumOfSquaresOfEvensOnly Test 2 Passed'
      : 'computeSumOfSquaresOfEvensOnly Test 2 Failed'
  )
  console.log(
    result3 === 0
      ? 'computeSumOfSquaresOfEvensOnly Test 3 Passed'
      : 'computeSumOfSquaresOfEvensOnly Test 3 Failed'
  )
}

function testPrintFibo() {
  const capturedOutput1 = captureConsoleOutput(() => {
    printFibo(1, 0, 1)
  })

  const capturedOutput2 = captureConsoleOutput(() => {
    printFibo(2, 0, 1)
  })

  const capturedOutput3 = captureConsoleOutput(() => {
    printFibo(3, 0, 1)
  })

  const capturedOutput4 = captureConsoleOutput(() => {
    printFibo(6, 0, 1)
  })

  const capturedOutput5 = captureConsoleOutput(() => {
    printFibo(10, 0, 1)
  })

  console.log(
    capturedOutput1.trim() === '0'
      ? 'printFibo Test 1 Passed'
      : 'printFibo Test 1 Failed'
  )

  console.log(
    capturedOutput2.trim() === '0, 1'
      ? 'printFibo Test 2 Passed'
      : 'printFibo Test 2 Failed'
  )

  console.log(
    capturedOutput3.trim() === '0, 1, 1'
      ? 'printFibo Test 3 Passed'
      : 'printFibo Test 3 Failed'
  )

  console.log(
    capturedOutput4.trim() === '0, 1, 1, 2, 3, 5'
      ? 'printFibo Test 4 Passed'
      : 'printFibo Test 4 Failed'
  )

  console.log(
    capturedOutput5.trim() === '0, 1, 1, 2, 3, 5, 8, 13, 21, 34'
      ? 'printFibo Test 5 Passed'
      : 'printFibo Test 5 Failed'
  )
}

// Helper function to capture console output
function captureConsoleOutput(callback) {
  const originalConsoleLog = console.log
  let output = ''
  console.log = (message) => {
    output += message + '\n'
  }
  callback()
  console.log = originalConsoleLog
  return output
}

testMax()
testMaxOfThree()
testIsVowel()
testSum()
testMultiply()
testReverse()
testFindLongestWordLength()
testFilterLongWords()
testComputeSumOfSquares()
testPrintOddNumbersOnly()
testComputeSumOfSquaresOfEvensOnly()
testPrintFibo()
