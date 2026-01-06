function openSection(id) {
  closeSections();
  document.getElementById(id).classList.add("active");
}

function closeSections() {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
}

function blowCandles() {
  const candle = document.querySelector(".candle");
  if (candle) candle.style.display = "none";  // hide the candle
  document.getElementById("cakeText").textContent =
    "Dúfam že sa ti to splní ❤️";
}


function openLetter() {
  const letter = document.querySelector(".letter");
  letter.classList.toggle("show");  // add/remove class
}

const flowerEmojis = ["🌸", "🌼", "🌺", "💐"];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("falling-flower");
  flower.textContent =
    flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = 20 + Math.random() * 30 + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.querySelector(".flowers-bg").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 500);
