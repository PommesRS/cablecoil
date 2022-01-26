const anim1 = document.querySelector(".anim1");
const video = anim1.querySelector("video");

const anim2 = document.querySelector(".anim2");
const video2 = anim2.querySelector("video");
//END SECTION
const end = document.querySelector(".anim1");


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 900,
  triggerElement: video,
  triggerHook: 0
})
  .addTo(controller)

let scene2 = new ScrollMagic.Scene({
  duration: 900,
  triggerElement: video2,
  triggerHook: 0
})
  .setPin(video2)
  .addTo(controller);

//Video Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1500;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

