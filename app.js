document.getElementById("generate-btn").addEventListener("click", function() {
    var lowerBound = parseInt(document.getElementById("lower-bound").value);
    var upperBound = parseInt(document.getElementById("upper-bound").value);

    if (isNaN(lowerBound) || isNaN(upperBound)) {
        document.getElementById("result").innerText = "Please enter valid number";
    } else if (lowerBound >= upperBound) {
        document.getElementById("result").innerText = "Lower bound should be less than upper bound";
    } else {
        var randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
        document.getElementById("result").innerText = "Random Number: " + randomNumber;
    }
});