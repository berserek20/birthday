// 🎂 Set Birthday Date (YYYY, MM-1, DD, HH, MM, SS)
// Example: 10 October 2025, 12:00 AM
const birthdayDate = new Date(2025, 11, 28, 19, 0, 0).getTime();

const countdown = document.getElementById("countdown");

function startCountdown() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "🎉 Happy Birthday! 🎂🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
        ⏳ ${days} Days | ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds
    `;
}

setInterval(startCountdown, 1000);
startCountdown();
