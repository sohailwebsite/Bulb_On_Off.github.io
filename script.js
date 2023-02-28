let Bulb_On = document.getElementById("Bulb_On");
let Bulb_Off = document.getElementById("Bulb_Off");
let image = document.getElementById("image");

Bulb_On.addEventListener("click", function () {
  // console.log(image.src);
  image.src = "image/pic_bulbon.gif";
});

Bulb_Off.addEventListener("click", function () {
  // console.log(image.src);
  image.src = "image/pic_bulboff.gif";
});
