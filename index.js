document.getElementById("menuBarIcon").addEventListener("click", function () {
    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "none";

    const menu = document.getElementById("menu");
    menu.style.marginTop = "-10px";
    menu.style.transition = "0.8s";
})