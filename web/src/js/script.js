const year = document.getElementById("year");
const countdown = document.getElementById("countdown");

const targetDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0).getTime();

const generateCountdown = () => {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  year.textContent = currentDate.getFullYear();
  countdown.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
};

setInterval(generateCountdown, 1000);
