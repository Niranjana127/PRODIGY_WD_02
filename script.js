let timer;
let seconds = 0;
let isRunning = false;
let lapCount = 0;

/* FORMAT TIME */
function formatTime(sec){
  let hrs = Math.floor(sec / 3600);
  let mins = Math.floor((sec % 3600) / 60);
  let secs = sec % 60;

  return `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

/* START */
function startStopwatch(){
  if(!isRunning){
    timer = setInterval(() => {
      seconds++;
      document.getElementById("display").innerText = formatTime(seconds);
    },1000);
    isRunning = true;
  }
}

/* PAUSE */
function pauseStopwatch(){
  clearInterval(timer);
  isRunning = false;
}

/* RESET */
function resetStopwatch(){
  clearInterval(timer);
  seconds = 0;
  lapCount = 0;
  isRunning = false;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("lapTable").innerHTML = "";
}

/* LAP */
function lapTime(){
  if(isRunning){
    lapCount++;
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${lapCount}</td>
      <td>${formatTime(seconds)}</td>
    `;

    document.getElementById("lapTable").appendChild(row);
  }
}
