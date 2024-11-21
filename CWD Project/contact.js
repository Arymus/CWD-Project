const user = document.getElementById("name");
const message = document.getElementById("message");
const submit = document.getElementById("send");
const form = document.querySelector(".form");

function sendEmail() {
    if (message.value === "" || user.value === "") {
        alert("Please fill out both fields.");
    } else {
        alert("You thought the email would send on it's own? Stop being lazy.");
        form.remove();
        const email = `${user}: ${message}`;
        const emailInput = document.createElement("p");
        emailInput.innerText = email;
        emailInput.classList.add("email");
        form.appendChild(emailInput);
    };
}

send.addEventListener("click", sendEmail);

