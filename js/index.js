document.querySelector(".start").addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var firstImg = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", firstImg);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var secondImg = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", secondImg);
    if (randomNumber1 === randomNumber2) {
        document.querySelector(".second").textContent = "🚩Draw!🚩";
    }
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".second").textContent = "🚩Player1 Wins!";
    }
    if (randomNumber1 < randomNumber2) {
        document.querySelector(".second").textContent = "Player2 Wins!🚩";
    }
})
