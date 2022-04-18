const secondHand = document.querySelector(".seconds");
const minsHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

function setDate() {
  const now = new Date();
  const hour = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  const secondsDegrees = (seconds / 60) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
