const input = document.getElementById("input");
const enter = document.getElementById("enter");
const enterLink = document.getElementById("enterLink");
const hint = document.getElementById("hint");

function enterPassword() {
    if (input.value === "perrito" || input.value === "perrita") {
        enterLink.href ="main.html";
    } else if (input.value === "") {
        alert("Type in a password!")
    } else {
        alert("Incorrect password! Try again :(");
    };
}

function getHint() {
    const hintArray = ["The spanish word for \"puppy\"!", "A young dog (in spanish)", "Someone who likes chew toys (in spanish)"];
    const randomNumber = Math.floor(Math.random() * 4);
    alert(hintArray[randomNumber]);
}

enter.addEventListener("click", enterPassword);
enter.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enterPassword();
    }
});

hint.addEventListener("click", getHint);