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

