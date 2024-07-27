function createCounter(incrementButtonId, resetButtonId, countId) {
    let count = 0;

    document.getElementById(incrementButtonId).addEventListener("click", function() {
        count++;
        document.getElementById(countId).textContent = count;
    });

    document.getElementById(resetButtonId).addEventListener("click", function() {
        count = 0;
        document.getElementById(countId).textContent = count;
    });
}

createCounter("increment-button1", "reset-button1", "count1");
createCounter("increment-button2", "reset-button2", "count2");
createCounter("increment-button3", "reset-button3", "count3");
createCounter("increment-button4", "reset-button4", "count4");
createCounter("increment-button5", "reset-button5", "count5");
createCounter("increment-button6", "reset-button6", "count6");
