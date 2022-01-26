const cock = document.querySelector(".anim1");
const video = cock.querySelector("video");
//END SECTION
const end = document.querySelector(".placeholder");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: video,
  triggerHook: 0
})

  .addTo(controller);

//Video Animation
let accelamount = 0.5;
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

