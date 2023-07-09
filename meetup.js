function addUser() {
    var user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "meetup_page.html";
}

function login_button() {
    localStorage.setItem("login_button");
    window.location("meetup_page.html");
}