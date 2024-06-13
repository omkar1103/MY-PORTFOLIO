document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("icon");
    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
    }
});