const images = [
  "./images/bob-brewer-aUF0M9jdnUg-unsplash.jpeg",
  "./images/francesco-ungaro-xIfBT-t2dRk-unsplash.jpeg",
  "./images/georgi-s-FkLsM8AwW0Q-unsplash.jpeg",
  "./images/joseph-corl-h4eHV9CRxUc-unsplash.jpeg",
  "./images/muneeb-syed-x9NfeD3FpsE-unsplash.jpeg",
  "./images/tobias-reich-2UqCuvEqYzA-unsplash.jpeg",
  "./images/tobias-reich-kOFvKxzph30-unsplash.jpeg",
];

const container = document.querySelector(".container");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");

let id;

startButton.addEventListener("click", () => {
  appendElements();
});

stopButton.addEventListener("click", () => {
  clearInterval(id);
  i = 0;
});

function appendElements() {
  let i = 1;
  id = setInterval(() => {
    const img = document.createElement("img");
    img.src = images[i];
    container.innerHTML = "";
    container.append(img);
    i++;
    if (i >= images.length) {
      i = 0;
    }
  }, 2000);
}
