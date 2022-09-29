const meowSound = document.getElementById("meowSound");
const imKispySfx = document.getElementById("imKispySfx");
const trustSfx = document.getElementById("trustSfx");
imKispySfx.preload = "auto";
meowSound.preload = "auto";
trustSfx.preload = "auto";

let tapCount = 0;
let headSpinCounter = 1;
let reverseHeadSpin = false;

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

const playSfx = (sound) => {
  return new Promise(function (resolve, reject) {
    sound.play();
    setTimeout(() => {
      resolve();
    }, sound.duration * 1000);
  });
};

const rollHead = () => {
  if (headSpinCounter >= 8) {
    reverseHeadSpin = true;
  }
  if (headSpinCounter <= 1) {
    reverseHeadSpin = false;
  }
  kispy.style.backgroundImage =
    "url(assets/kispyPng" + headSpinCounter + ".png)";
  headSpinCounter += reverseHeadSpin ? -1 : 1;
};

const spinHeadNotch = () => {
  kispy.style.backgroundImage =
    "url(assets/kispyPng" + headSpinCounter + ".png)";
  headSpinCounter += 1;
  if (headSpinCounter >= 9) {
    headSpinCounter = 1;
  }
};

const jump = () => {
  return new Promise(function (resolve, reject) {
    let jump = setInterval(function () {
      kispy.classList.add("jump");
    }, 50);
    setTimeout(function () {
      kispy.classList.remove("jump");
      clearInterval(jump);
      resolve();
    }, 500);
  });
};

const headSpin = () => {
  let chase = setInterval(function () {
    spinHeadNotch();
  }, 50);
  setTimeout(function () {
    clearInterval(chase);
  }, 1000);
};

const headRoll = (time = 800) => {
  let chase = setInterval(function () {
    rollHead();
  }, 50);
  setTimeout(function () {
    clearInterval(chase);
  }, time);
};

const meow = async () => {
  playSfx(meowSound);
  headSpin();
};

const talk = () => {
  spinHeadNotch();
  playSfx(imKispySfx);
};

const trustMe = () => {
  trustSfx.play();
  headSpin();
};
const speak = async () => {
  spinHeadNotch();
  await playSfx(imKispySfx);
  spinHeadNotch();
  await playSfx(meowSound);
  headSpin();
  jump();
  await playSfx(trustSfx);
};
