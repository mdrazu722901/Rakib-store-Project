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


function menuClick() {
    if (screen.width === 600 || screen.width < 600) {
        console.log("width 600 caught")
        document.getElementById("deleteMenu").style.display = "none";

        const menuBar = document.getElementById("menuBar");
        menuBar.style.display = "block";


        const menu = document.getElementById("menu");
        menu.style.marginLeft = "-800px";
        menu.style.transition = "0.1s";
        menu.style.position = "absolute"

        const user = document.getElementById("user");
        user.style.display = "none";
    }

}


// ..............................................order kori javaScript code.........

let orderbtns = document.querySelectorAll(".orderBtn");
// console.log(orderbtns);
for (const element of orderbtns) {
    element.addEventListener("click", function (e) {
        // console.log(e.target.parentNode.children);
        let orderItems = e.target.parentNode.children;
        orderCardCreate(orderItems);
    })
}


function orderCardCreate(element) {

    // ......................................................................
    document.getElementById("slideRegion").style.display = "none";
    document.getElementById("titleSection").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("contace").style.display = "none";
    // ...........................................................................

    // ............................................................................
    document.getElementById("orderProduct").style.display = "block";
    // .........................................................................



    console.log(element);
    let [img, br1, br2, h3, br3, h4, p] = element;

    const selectOrderProduct = document.getElementById("selectOrderProduct");

    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
      <div class="orderProductImgeJS"><img src="${img.currentSrc}">
      </div>
      <div>
      <h1>${h3.innerText}</h1>
      <h2>${h4.innerText}</h2>
      <br>
      <br>
      <br>
        <div style="display: flex">
        <input type="number" id="quantity" name="quantity" min="1" max="100">
        <select id="cars" name="cars">
            <option value="Kg">কেজি</option>
            <option value="Pcs">পিস্</option>
            <option value="vati">ভাটি</option>
        </select>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="BackBtnDiv">
        <button onclick="backBtn()">Back>></button>
         </div>
      </div>
      
`
    createDiv.classList.add("orderItemDesign")

    selectOrderProduct.appendChild(createDiv);
};


document.getElementById("backBtn").addEventListener("click", function () {
    console.log("click me");
})

const backBtn = () => {
    console.log("click the back  button")
}