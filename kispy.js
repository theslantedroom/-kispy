const meowSound = document.getElementById("meowSound");
const imKispySfx = document.getElementById("imKispySfx");
imKispySfx.preload = "auto";
meowSound.preload = "auto";

let tapCount = 0;
let headSpinCounter = 1;

let images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "assets/kispyPng1.png",
  "assets/kispyPng2.png",
  "assets/kispyPng3.png",
  "assets/kispyPng4.png",
  "assets/kispyPng5.png",
  "assets/kispyPng6.png",
  "assets/kispyPng7.png",
  "assets/kispyPng8.png"
);

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
