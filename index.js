document.getElementById("menuBarIcon").addEventListener("click", function () {
    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "none";
    menuBar.style.marginRight = "-300px";

    const menu = document.getElementById("menu");
    menu.style.marginLeft = "-180px";
    menu.style.transition = "1s";
    menu.style.position = "relative"

    const deleteMenu = document.getElementById("deleteMenu");
    deleteMenu.style.display = "block";
    deleteMenu.style.left = "170px"
    deleteMenu.style.transition = "0.8s"

    const user = document.getElementById("user");
    user.style.display = "block";
    user.classList.remove("user");
    user.classList.add("user1")
})


document.getElementById("deleteMenu").addEventListener("click", function () {


    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "block";
    menuBar.style.marginRight = "30px";
    menuBar.style.transition = "1s";

    const menu = document.getElementById("menu");
    menu.style.marginLeft = "-400px";
    menu.style.transition = "0.1s";
    menu.style.position = "absolute"

    const user = document.getElementById("user");
    user.style.display = "none";
    document.getElementById("deleteMenu").style.display = "none"
})