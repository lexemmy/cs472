function Animal(name, speed) {
  this.name = name
  this.speed = speed
}

Animal.prototype.run = function () {
  this.speed++
}

Animal.compareBySpeed = function (a1, a2) {
  return a1.speed - a2.speed
}

function Rabbit(name, speed) {
  Animal.call(this, name, speed)
}

Rabbit.prototype.hide = function () {
  console.log(this.name + ' hides')
}

Object.setPrototypeOf(Rabbit, Animal)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)

let animal1 = new Rabbit('jane', 0)

console.log(animal1)
animal1.run()
console.log(animal1)
animal1.hide()
