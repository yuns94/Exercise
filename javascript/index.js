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

/* 정의 명은 중복 불가 , 함수명은 중복 가능.
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(20, 10);
const multiply = calculator.multiply(2, 5);
const squared = calculator.squared(2, 2);

console.log(plus, minus, multiply, squared);

*/

/*
const title = document.querySelector("#title");

title.innerHTML = " Hello!";

const superEventHandler = {
  handleClick: function handleClick() {
    title.style.color = "orange";
    title.innerHTML = "The mouse is here!";
  },

  handleMouseleave: function handleMouseleave() {
    title.style.color = "blue";
    title.innerHTML = "The mouse is gone!";
  },

  windowContextmenu: function windowContextmenu() {
    title.style.color = "green";
    title.innerHTML = "That was a right click!";
  },

  windowResize: function windowResize() {
    title.style.color = "purple";
    title.innerHTML = "You just resized!";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleClick);

title.addEventListener("mouseleave", superEventHandler.handleMouseleave);

window.addEventListener("contextmenu", superEventHandler.windowContextmenu);

window.addEventListener("resize", superEventHandler.windowResize);

*/

/*

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}

function click() {
  title.addEventListener("click", handleClick);
}

click();

*/

const body = document.querySelector("body");

const OVER_CLASS = "over";

const DOWN_CLASS = "down";

function resize() {
  const width = window.innerWidth;

  if (width >= 300) {
    body.className = OVER_CLASS;
  } else if (width >= 200 && width < 300) {
    body.className = "";
  } else {
    body.className = DOWN_CLASS;
  }
  console.log(window.innerWidth);
}

window.addEventListener("resize", resize);
