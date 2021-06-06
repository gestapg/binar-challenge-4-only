const playerPick = document.querySelectorAll("#player-area img");
const resultDisplay = document.getElementById("result-area");
const refresh = document.querySelector(".new-game");

function getComPick() {
  const com = Math.trunc(Math.random() * 3) + 1;
  if (com === 1) return "batu";
  if (com === 2) return "kertas";
  return "gunting";
}

const getResult = function (comPick, playerPick) {
  if (playerPick === comPick) return "DRAW";
  if (playerPick === "batu") return comPick === "gunting" ? "PLAYER 1 <br> WIN" : "COM <br> WIN";
  if (playerPick === "kertas") return comPick === "batu" ? "PLAYER 1 <br> WIN" : "COM <br> WIN";
  if (playerPick === "gunting") return comPick === "kertas" ? "PLAYER 1 <br> WIN" : "COM <br> WIN";
};

let playing = true;

playerPick.forEach(function (i) {
  i.addEventListener("click", function () {
    if (playing) {
      // Player 1 pick choice
      const playerPick = i.className;
      console.log(`Player 1 memilih : ${playerPick}`);
      const playerHighlight = document.querySelector(`.btn--${playerPick}`);
      playerHighlight.classList.add("hidden");

      // Computer pick choice
      const comPick = getComPick();
      console.log(`Computer memilih : ${comPick}`);
      const comHighlight = document.querySelector(`.comp--${comPick}`);
      comHighlight.classList.add("hidden");

      // Showing the result
      const hasil = getResult(comPick, playerPick);
      console.log(`Hasilnya : ${hasil}`);
      resultDisplay.innerHTML = hasil;
      if (hasil === "DRAW") {
        resultDisplay.classList.add("draw");
      } else {
        resultDisplay.classList.add("hasil");
      }

      // Player 1 cannot pick again unless its refreshed
      playing = false;
    }
  });
});

refresh.addEventListener("click", function () {
  location.reload();
});
