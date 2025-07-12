const timerValue = document.getElementById("timer");
console.log("timerValue = ", timerValue);

let intervalId;

setInterval(() => {
    if (!timerValue) {
        return;
    }
    
    const currentText = Number(timerValue.textContent);
    
    if (currentText <= 0) {
        alert("Вы победили в конкурсе");
        clearInterval(intervalId);
        return;
    }
    
    timerValue.textContent = currentText - 1;
}, 1000);
