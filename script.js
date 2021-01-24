var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

var player1 = "images/dice" + p1 + ".png";
var player2 = "images/dice" + p2 + ".png";
document.querySelector(".img1").setAttribute("src", player1);
document.querySelector(".img2").setAttribute("src", player2);

if(p1===p2) {
    document.querySelector("h1").textContent = "Phew! It's a Draw";
}

else if(p1>p2) {
    document.querySelector("h1").textContent = "Yayy! Player1 won";
}

else {
    document.querySelector("h1").textContent = "Yayy! Player2 won";
}