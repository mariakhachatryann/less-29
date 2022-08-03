"use strict";

const thumb = document.querySelector(".thumb");
console.log(thumb);

// const img1 = document.querySelector(".img1");
const img1 = thumb.firstElementChild;
// const img2 = document.querySelector(".img2");
const img2 = img1.nextElementSibling;
// const img3 = document.querySelector(".img3");
const img3 = thumb.lastElementChild;

const items = document.querySelectorAll("header > ul > li > a");
//const learnMore = document.querySelector(".content > .textBox > a");
const learnMore = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
const starbucks = document.querySelector(".content > .textBox > h2 > span");

const menu = document.querySelector(".toggle");
// const navigation = document.querySelector(".navigation");
const navigation = document.body.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.firstElementChild.parentElement;


img1.addEventListener("click", function (){
  //document.querySelector(".starbucks").src = "img/img1.png";
  document.body.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.src = "img/img1.png";
  // const circle = document.querySelector(".circle");
  const circle = document.body.firstElementChild.firstElementChild;
  circle.style.cssText = `
    background: #017143;
  `;

  items.forEach(function (item) {
    item.style.cssText = `
    background: #017143;
    `;
  });

  learnMore.style.cssText = `
    background: #017143
  `;

  starbucks.style.cssText = `
    color: #017143
  `;

});

img2.addEventListener("click", function () {
  document.querySelector(".starbucks").src = "img/img2.png";

  const circle = document.querySelector(".circle");
  circle.style.cssText = `
    background: #eb7495;
  `;

  items.forEach(function (item) {
    item.style.cssText = `
    background: #eb7495;
    `;
  });

  learnMore.style.cssText = `background: #eb7495`;

  starbucks.style.cssText = `
    color: #eb7495;
  `;

});

img3.addEventListener("click", function () {
  document.querySelector(".starbucks").src = "img/img3.png";

  const circle = document.querySelector(".circle");
  circle.style.cssText = `
    background: #d752b1;
  `;

  items.forEach(function (item) {
    item.style.cssText = `
    background: #d752b1;
    `;
  });

  learnMore.style.cssText = `background: #d752b1`;

  starbucks.style.cssText = `
    color: #d752b1;
  `;
});


menu.addEventListener("click", function(){
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
});