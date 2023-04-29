const images = [
  "cotton.jpg",
  "azalea.jpg",
  "sakura.jpg",
  "cosmos.jpg",
  "sunflower.jpg",
  "hydrangea.jpg",
  "rose.jpg",
  "tulip.jpg",
  "lavender.jpg",
  "lotus.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `bg/${chosenImage}`;

document.body.appendChild(bgImage);

if (bgImage === "cotton.jpg") {
  flowerName.innerText = `목화`;
} else if (images.length === 1) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 2) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 3) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 4) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 5) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 6) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 7) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 8) {
  flowerName.innerText = `철쭉`;
} else if (images.length === 9) {
  flowerName.innerText = `철쭉`;
}
