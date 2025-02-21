document.getElementById("menuBarIcon").addEventListener("click", function () {
    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "none";

    const menu = document.getElementById("menu");
    menu.style.marginLeft = "-150px";
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
    document.getElementById("deleteMenu").style.display = "none";

    const menuBar = document.getElementById("menuBar");
    menuBar.style.display = "block";


    const menu = document.getElementById("menu");
    menu.style.marginLeft = "-800px";
    menu.style.transition = "0.1s";
    menu.style.position = "absolute"

    const user = document.getElementById("user");
    user.style.display = "none";

});



// ..............................................order kori javaScript code.........

document.getElementsByClassName("orderBtn").addEventListener("click", function(){
    console.log("click me")
});

let orderKori = document.getElementsByClassName("orderBtn");
console.log(orderKori, "order");