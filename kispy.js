const meowSound = document.getElementById("meowSound");
const imKispySfx = document.getElementById("imKispySfx");

let tapCount = 0;
let headSpinCounter = 1;

const advanceHeadSpin = () => {
  if (headSpinCounter == 8) {
    headSpinCounter = 1;
  }
  kispy.style.backgroundImage =
    "url(assets/kispyPng" + headSpinCounter + ".png)";
  headSpinCounter += 1;
};

const headSpin = () => {
  let chase = setInterval(function () {
    advanceHeadSpin();
  }, 50);

  setTimeout(function () {
    clearInterval(chase);
  }, 1000);
};

const fun = () => {
  headSpin();
  meow();
};

const talk = () => {
  advanceHeadSpin();
  imKispySfx.play();
};
const meow = () => {
  meowSound.play();
};
