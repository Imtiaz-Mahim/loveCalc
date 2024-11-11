

const rate = document.querySelector(".rate");
const Percent = document.querySelector(".ratePer");
const calcBtn = document.querySelector(".btn button");
const refresh = document.querySelector(".refresh");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");

let previousName1 = "";
let previousName2 = "";
let targetedNum = null;
let interval;

// Refresh button function
function refreshB() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  rate.innerHTML = "";
  Percent.innerHTML = "";
  name1.value = "";
  name2.value = "";
  previousName1 = "";
  previousName2 = "";
  targetedNum = null;
}
refresh.addEventListener("click", refreshB);

function btnclick() {
  const namePattern = /^[A-Za-z]+$/;

  if (!name1.value) {
    alert("You seem to have forgotten to enter Your Name");
    return;
  }
  if (!namePattern.test(name1.value)) {
    alert("Please Input a Valid Name");
    return;
  }
  if (!name2.value) {
    alert("You seem to have forgotten to enter your Love's name");
    return;
  }
  if (!namePattern.test(name2.value)) {
    alert("Please Input a Valid Name");
    return;
  }

  const crntName1 = name1.value.toLowerCase();
  const crntName2 = name2.value.toLowerCase();

  if (
    (crntName1 === previousName1 && crntName2 === previousName2) ||
    (crntName1 === previousName2 && crntName2 === previousName1)
  ) {
    return;
  }

  do {
    targetedNum = Math.floor(Math.random() * 100 + 1);
  } while (targetedNum <= 43);

  previousName1 = crntName1;
  previousName2 = crntName2;

  let currentNum = 0;
  rate.innerHTML = currentNum;
  Percent.innerHTML = "%";

  interval = setInterval(() => {
    rate.innerHTML = currentNum;
    if (currentNum === targetedNum) {
      clearInterval(interval);
      interval = null;
      
    } else {
      currentNum++;
    }
  }, 80);
}


calcBtn.addEventListener("click", btnclick);