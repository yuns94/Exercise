/*     #.2.1

function sayHello(potato, chicken) {
  console.log("Hello!", potato, "You have", chicken);
}

sayHello("Yuns", 27);

*/
/*

function sayHello(name, age) {
  return `Hello! ${name} you are ${age} years old`;
}

const greetYuns = sayHello("Yuns", 27);

console.log(greetYuns);

*/

// 정의 명은 중복 불가 , 함수명은 중복 가능.
const calculator1 = {
  plus: function (a, b) {
    return a + b;
  },
};

//console.log(greetYuns);
const plus = calculator1.plus(5, 5);
console.log(plus);

const calculator2 = {
  minus: function (a, b) {
    return a - b;
  },
};

const minus = calculator2.minus(30, 10);
console.log(minus);
