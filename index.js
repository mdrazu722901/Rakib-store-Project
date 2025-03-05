
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

// ..................................................................................
const products = [
    { name: "জিলাফি", Pcs: "১০ টাকা", perPrice: 10, Kg: "২০০ টাকা", img: "photo/jilafi.jpg", Comment: "", id: 1 },
    { name: "নিমকি", Pcs: "৫ টাকা", perPrice: 5, Kg: "২০০ টাকা", img: "photo/nimki.jpg", Comment: "", id: 2 },
    { name: "সিংগারা", Pcs: "১০ টাকা পিস্", perPrice: 10, img: "photo/singora.jpg", Comment: "", id: 3 },
    { name: "চমুচা", Pcs: "১০ টাকা", perPrice: 10, img: "photo/somuca.jpeg", Comment: "আমাদের কাছ থেকে পিস্ বা কেজি হিসাবে পাবেন", id: 4 },
    { name: "পরােটা", Pcs: "১০ টাকা", perPrice: 10, img: "photo/porota.jpeg", Comment: "আমাদের কাছ থেকে পিস্ বা কেজি হিসাবে পাবেন", id: 5 },
    { name: "ভাজি", Pcs: "১৫ টাকা ভাটি", perPrice: 15, img: "photo/Baji.jpeg", Comment: "", id: 6 },
    { name: "অঙ্গুলী", Pcs: "২০০ টাকা", perPrice: 5, Kg: "২০০ টাকা", img: "photo/anguli.jpeg", Comment: "", id: 7 },
];

allProduct(products);
orderCardCreate(products);

function allProduct(products) {
    const underProductSectionDiv = document.getElementById("underProductSection");
    //    console.log(products.length, products[6])

    for (let i = 0; i < products.length; i++) {
        let element = products[i];

        const cardDivMake = document.createElement("div");
        cardDivMake.classList.add("card");
        cardDivMake.innerHTML = `
                <img src="${element.img}" alt="">
                <br>
                <p>${element.id}</p>
                <br>
                <h3>নাম:${element.name}</h3>
                <br>
                <h4>দাম:${element.Pcs}</h4>
                <p>${element.Comment}</p>
                <button class="orderBtn">অর্ডার করি</button>
`

        underProductSectionDiv.appendChild(cardDivMake);
    }
}

function orderCardCreate(allProduct) {

    let allBtn = document.getElementsByClassName("orderBtn");

    for (let i = 0; i < allBtn.length; i++) {

        let btn = allBtn[i];
        let product = allProduct[i];

        btn.addEventListener("click", function (event) {
            let orderBtnParentutton = event.target.parentNode.children;
            let [img, br, p] = orderBtnParentutton;

            if (p.innerHTML == product.id) {
                forCardAdd(product);
                cardInfo(product);
                const underProductSectionDiv = document.getElementById("underProductSection").style.display = 'none';
                const title = document.getElementById("titleSection").style.display = 'none';
                const slideRegion = document.getElementById("slideRegion").style.display = 'none';
                const contectSection = document.getElementById("contace").style.display = 'none';
                const aboutSection = document.getElementById("about").style.display = 'none';
                const footerSection = document.getElementById("lastSection").style.display = 'none';
            }
        })
    }
};

function forCardAdd(product) {
    // console.log(product);
    const selectProductSection = document.getElementById("forcardAddSection");

    if (product.name == "জিলাফি" || product.name == "নিমকি") {
    }


    const cardDivMake = document.createElement("div");
    cardDivMake.classList.add("card");
    cardDivMake.innerHTML = `
            <img src="${product.img}" alt="">
            <br>
            <p>${product.id}</p>
            <br>
            <h3>নাম:${product.name}</h3>
            <br>
            <h4>দাম:${product.Pcs}</h4>
            <br>
            <br>
            <div style="display:flex">
            <input type="input" style="width:20px" id="input">
                <select id="selectSection">
                    <option id="kg">Kg</option>
                    <option  id="Pcs">Pcs</option>
                    <option id="vati">Vati</option>
                    <option selected>select</option>
                </select>
            </div>
            <br>
            <p id="Subtotal"></p>
                <br>
                <br>
            <button id="addtoCard">কার্ডএ যুক্ত করি</button>
`
    selectProductSection.appendChild(cardDivMake);
}




function cardInfo(product) {
    document.getElementById("addtoCard").addEventListener("click", function () {
        console.log(product);

        let inputFild = document.getElementById("input");
        let inputFildValueConvert = Number(inputFild.value);


        let selectSection = document.getElementById("selectSection");


        console.log(selectSection.value)

        if (inputFildValueConvert && selectSection) {
            if (product.name == "জিলাফি" || product.name == "নিমকি") {
                if (selectSection.value == "Kg") {
                    let subtotal = inputFildValueConvert * 200
                    document.getElementById("Subtotal").innerText = subtotal;

                    productWithSubtotalPrice(product)
                }
                else if (selectSection.value == "Pcs") {
                    if (product.name == "জিলাফি") {
                        let subtotal = inputFildValueConvert * 10
                        document.getElementById("Subtotal").innerText = subtotal;

                        productWithSubtotalPrice(product)
                    }
                    else if (product.name == "নিমকি") {
                        let subtotal = inputFildValueConvert * 5
                        document.getElementById("Subtotal").innerText = subtotal;
                    }
                }
                else {
                    let error = "Pcs/Kg Select koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }
            else if (product.name == "সিংগারা" || product.name == "চমুচা" || product.name == "পরােটা") {

                if (selectSection.value == "Pcs") {

                    let subtotal = inputFildValueConvert * 10
                    document.getElementById("Subtotal").innerText = subtotal;

                    productWithSubtotalPrice(product)
                }
                else {
                    let error = "Pcs Select Koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }

            else if (product.name == "অঙ্গুলী") {

                if (selectSection.value == "Kg") {

                    let subtotal = inputFildValueConvert * 200
                    document.getElementById("Subtotal").innerText = subtotal;

                    productWithSubtotalPrice(product)
                }
                else {
                    let error = "Kg Select Koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }
            else if (product.name == "ভাজি") {

                if (selectSection.value == "Vati") {

                    let subtotal = inputFildValueConvert * 10
                    document.getElementById("Subtotal").innerText = subtotal;

                    productWithSubtotalPrice(product)
                }
                else {
                    let error = "vati Select Koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }
        }
        else {
            let error = "somthing went wrong";
            document.getElementById("Subtotal").innerText = error;

        }



    })

}


function productWithSubtotalPrice(product) {
    let subtotal = document.getElementById("Subtotal");
    let inputFild = document.getElementById("input");
    let selectSection = document.getElementById("selectSection");

    const allItemCardHereDiv = document.getElementById("allItemCardHere");
    let crectProductShotList = document.createElement("div");
    crectProductShotList.classList.add("subtotalStyle")
    crectProductShotList.innerHTML = `
              <p>${product.name}</p>
              <p>${inputFild.value} ${selectSection.value}</p>
              <p>${subtotal.innerText}</p>
              

        `
    allItemCardHereDiv.appendChild(crectProductShotList);

    let allItemCardHere = document.getElementById("allItemCardHere");
    let allItemCardHereLength = allItemCardHere.children.length;
    console.log(allItemCardHereLength);

    document.getElementById("cardItemCount").innerHTML = allItemCardHereLength;
}











const backBtn = () => {
    console.log("click the back  button")
    document.getElementById("slideRegion").style.display = "block";
    document.getElementById("titleSection").style.display = "block";
    document.getElementById("product").style.display = "block";
    document.getElementById("contace").style.display = "block";
    // ...........................................................................

    // ...........................................................................
    document.getElementById("orderProduct").style.display = "none";
    // ...........................................................................

    let selectProduct = document.getElementById("selectOrderProduct");
    selectProduct.remove(selectProduct.childNodes);
    location.reload();
};