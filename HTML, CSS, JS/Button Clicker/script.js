function likeCounter(button) {
    var likes = parseInt(button.innerText);
    button.innerText = likes + 1 + " likes";
    alert("Ninja was liked!");
}

function removeButton(element) {
    element.remove()
}

function logout(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
    
}