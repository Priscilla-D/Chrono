let timer, audio, span, startBtn, stopBtn, resetBtn, hr, min, sec, ms;

window.onload = function () {
  span = document.getElementsByTagName("span");
  startBtn = document.getElementById("start");
  stopBtn = document.getElementById("stop");
  resetBtn = document.getElementById("reset");
  audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  (hr = 0), (min = 0), (sec = 0), (ms = 0);
};

function updateChrono() {
  ms += 1;
  if (ms === 10) {
    ms = 0;
    sec += 1;
  }
  if (sec === 60) {
    sec = 0;
    min += 1;
  }
  if (min === 60) {
    min = 0;
    hr += 1;
  }

  span[0].innerHTML = hr + "h";
  span[1].innerHTML = min + "min";
  span[2].innerHTML = sec + "sec";
  span[3].innerHTML = ms + "ms";
}

function start() {
  timer = setInterval(updateChrono, 100);
  startBtn.disabled = true;
  audio.play();
}

function stop() {
  clearInterval(timer);
  startBtn.disabled = false;
  audio.play();
}

function reset() {
  clearInterval(timer);
  startBtn.disabled = false;
  (hr = 0), (min = 0), (sec = 0), (ms = 0);
  span[0].innerHTML = hr + "h";
  span[1].innerHTML = min + "min";
  span[2].innerHTML = sec + "sec";
  span[3].innerHTML = ms + "ms";
}
