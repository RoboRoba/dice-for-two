const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
const randomNumber2 = Math.trunc(Math.random() * 6 + 1);

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!✨";
} else {
  document.querySelector("h1").innerHTML = `Player ${
    randomNumber1 > randomNumber2 ? "1" : "2"
  } Wins! 🙌`;
}
