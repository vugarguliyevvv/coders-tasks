// Task 1
function add() {
  let total = 0;

  return function (num) {
    total += num;
    return total;
  };
}

// Task 2
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Task 3
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Hello. My name is ${this.name}. I am ${this.age} years old.`;
};

// Task 4
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`The ${this.name} is eating.`);
};

// Task 5
Array.prototype.last = function () {
  if (this.length === 0) return -1;

  return this[this.length - 1];
};
