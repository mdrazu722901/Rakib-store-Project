document.getElementById("menuBarIcon").addEventListener("click", function () {
    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "none";
    menuBar.style.marginRight = "-300px";

    const menu = document.getElementById("menu");
    menu.style.marginTop = "-10px";
    menu.style.transition = "0.8s";

    const deleteMenu = document.getElementById("deleteMenu").style.display = "block";

    const user = document.getElementById("user");
    user.style.display = "block";
    user.classList.remove("user");
    user.classList.add("user1")
})


document.getElementById("deleteMenu").addEventListener("click", function () {

    const menu = document.getElementById("menu");
    menu.style.marginTop = "-300px";
    menu.style.transition = "0.8s";


    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "block";
    menuBar.style.marginRight = "5px";
    menuBar.style.transitionDelay = "3s"

    const user = document.getElementById("user");
    user.style.display = "none";
})