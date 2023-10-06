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
  if (n < 1) return;

  let sequence = [a, b]

  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2]
    sequence.push(nextNumber)
  }

  console.log(sequence.join(', '))
}

