const reviews = [
  {
    img:
      "img/rule1.png",
  },
  {
    img:
      "img/rule2.png",
  }
];

const img = document.getElementById("ruleimg");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
});

let showrule = function(rule) {
  const item = reviews[rule];
  img.src = item.img;
}

let showNextrule = function () { 
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showrule(currentItem);
 }

let showPreviousrule = function(){
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showrule(currentItem);
}

