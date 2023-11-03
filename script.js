function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

function setAlarm() {
    const alarmTime = document.getElementById("alarm-time").value;
    const [alarmHours, alarmMinutes] = alarmTime.split(":");
    const now = new Date();
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes, 0, 0);

    const timeDiff = alarmDate - now;
    if (timeDiff > 0) {
        setTimeout(() => {
            alert("Alarm!");
        }, timeDiff);
    } else {
        alert("Invalid alarm time. Please select a future time.");
    }
}
