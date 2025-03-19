
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


// ...............................for-menu-responsive...........................

if (screen.width === 600 || screen.width < 600) {
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

function allProduct(products) {
    const underProductSectionDiv = document.getElementById("underProductSection");

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
                <button class="orderBtn" onclick="orderCardCreate('${element.id}')">অর্ডার করি</button>
`

        underProductSectionDiv.appendChild(cardDivMake);
    }
}

function orderCardCreate(productID) {

    const productSelect = products.filter(element => element.id == productID);
    const findSelectProduct = productSelect[0];

    const underProductSectionDiv = document.getElementById("underProductSection").style.display = 'none';
    const title = document.getElementById("titleSection").style.display = 'none';
    const slideRegion = document.getElementById("slideRegion").style.display = 'none';
    const LocationShareSection = document.getElementById("LocationShareSection").style.display = 'none';
    const aboutSection = document.getElementById("about").style.display = 'none';
    const footerSection = document.getElementById("lastSection").style.display = 'none';

    makeProductCard(findSelectProduct)
};

function makeProductCard(SelectedProduct) {
    const selectProductSection = document.getElementById("forcardAddSection");

    if (SelectedProduct) {
        const cardDivMake = document.createElement("div");
        cardDivMake.classList.add("card");
        cardDivMake.innerHTML = `
            <img src="${SelectedProduct.img}" alt="">
            <p>${SelectedProduct.id}</p>
            <h3>নাম:${SelectedProduct.name}</h3>
            <h4>দাম:${SelectedProduct.Pcs}</h4>
            <div style="display:flex">
            <input type="input" style="width:20px" id="input">
                <select id="selectFild">
                    <option id="kg">Kg</option>
                    <option  id="Pcs">Pcs</option>
                    <option id="vati">Vati</option>
                    <option selected>select</option>
                </select>
            </div>
            <p id="Subtotal"></p>
            <button id="addtoCard">কার্ডএ যুক্ত করি</button>
`
        selectProductSection.appendChild(cardDivMake);
        cardInfo(SelectedProduct);
    }

}




function cardInfo(product) {
    console.log(product)
    document.getElementById("addtoCard").addEventListener("click", function () {

        let input = document.getElementById("input");
        let inputValue = Number(input.value);


        let selectFild = document.getElementById("selectFild");

        if (inputValue && selectFild) {
            if (product.name == "জিলাফি" || product.name == "নিমকি") {
                if (selectFild.value == "Kg") {
                    let subtotal = inputValue * 200
                    document.getElementById("Subtotal").innerText = subtotal;

                    itemShortList(product)
                }
                else if (selectFild.value == "Pcs") {
                    if (product.name == "জিলাফি") {
                        let subtotal = inputValue * 10
                        document.getElementById("Subtotal").innerText = subtotal;

                        itemShortList(product)
                    }
                    else if (product.name == "নিমকি") {
                        let subtotal = inputValue * 5
                        document.getElementById("Subtotal").innerText = subtotal;
                        itemShortList(product)
                    }
                }
                else {
                    let error = "Pcs/Kg Select koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }
            else if (product.name == "সিংগারা" || product.name == "চমুচা" || product.name == "পরােটা") {

                if (selectFild.value == "Pcs") {

                    let subtotal = inputValue * 10
                    document.getElementById("Subtotal").innerText = subtotal;

                    itemShortList(product)
                }
                else {
                    let error = "Pcs Select Koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }

            else if (product.name == "অঙ্গুলী") {

                if (selectFild.value == "Kg") {

                    let subtotal = inputValue * 200
                    document.getElementById("Subtotal").innerText = subtotal;

                    itemShortList(product)
                }
                else {
                    let error = "Kg Select Koren";
                    document.getElementById("Subtotal").innerText = error;
                }
            }
            else if (product.name == "ভাজি") {

                if (selectFild.value == "Vati") {

                    let subtotal = inputValue * 10
                    document.getElementById("Subtotal").innerText = subtotal;

                    itemShortList(product)
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
        subtotalPrice();


    })

}


function itemShortList(product) {
    let subtotal = document.getElementById("Subtotal");
    let input = document.getElementById("input");
    let selectFild = document.getElementById("selectFild");

    const allItemCardHereDiv = document.getElementById("allItemCardHere");
    let crectProductShotList = document.createElement("div");
    crectProductShotList.classList.add("subtotalStyle")

    crectProductShotList.innerHTML = `
              <p>${product.name}</p>
              <p>${input.value} ${selectFild.value}</p>
              <p class="ProductPrice">${subtotal.innerText}</p>
              <p><i class="fa-solid fa-trash deleteBtn"></i></p>
              `
    allItemCardHereDiv.appendChild(crectProductShotList);
    let deleteBtn = document.getElementsByClassName("deleteBtn");
    deleteBtnWork(deleteBtn)

}



function deleteBtnWork(deleteBtn) {
    for (const element of deleteBtn) {
        element.addEventListener("click", function (e) {
            e.target.parentNode.parentNode.remove(e.target);
            subtotalPrice();
        })
    }
};

function subtotalPrice() {
    let allProducts = document.getElementById("allItemCardHere");

    productCounter(allProducts.children);
    let StorePrice = 0;
    let allProductChildElements = allProducts.children;
    for (const element of allProductChildElements) {
        let [element1, element2, element3, element4] = element.children;
        let priceNumberConvert = Number(element3.innerText);
        StorePrice = priceNumberConvert + StorePrice;
    }
    document.getElementById("TotalProductPrice").innerText = StorePrice;
    return StorePrice;
}

function productCounter(countProduct) {
    let count = countProduct.length;
    document.getElementById("cardItemCount").innerHTML = count;
}


ConformBtnFunc();
function ConformBtnFunc() {
    document.getElementById("conformBtn").addEventListener("click", function () {
        let allProducts = document.getElementById("allItemCardHere");
        let Counter = allProducts.children.length;
        if (0 < Counter) {
            document.getElementById("InfoCollectSection").style.display = "block";
            document.getElementById("buyItemSection").style.display = "none";
            console.log(typeof Counter, Counter);
            ShowPurchaseInfo();
        }
        else {
            alert("please add one item in the card")
        }
    });
}

document.getElementById("meno-section").style.display = "none";
finalMemoFunc();
function finalMemoFunc() {

    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("info").style.display = "none"
        document.getElementById("meno-section").style.display = "block";
        homePage();
    })
};

function ShowPurchaseInfo(allConformProducts) {
    let ConformProductPrice = subtotalPrice();
    let contant = document.getElementById("contant");

    let allProducts = document.getElementById("allItemCardHere");

    console.log(allProducts.children);
    let productChild = allProducts.children;
    for (const element of productChild) {

        let createDiv = document.createElement("div");
        createDiv.classList.add("showParchaseInfo-ProductDetails");

        console.log(element);
        let [e1, e2, e3, e4] = element.children;
        console.log(e1.innerText);

        createDiv.innerHTML = `
         <p>${e1.innerText}</p>
         <p>${e2.innerText}</p>
         <p>${e3.innerText}</p>
        `
        contant.appendChild(createDiv);
    }



    document.getElementById("Tpirce").innerText = ConformProductPrice;
};


window.onload = function () {
    document.getElementById("aginConform&Download").addEventListener("click", function () {
        const showParchaseInfo = document.getElementById("showParchaseInfo");
        showParchaseInfo.style.padding = "150px 200px";
        showParchaseInfo.style.marginLeft = "150px";
        showParchaseInfo.style.fontSize = "20px";
        html2pdf().from(showParchaseInfo).save();
        document.getElementById("meno-section").style.display = "none";
        document.getElementById("Home").style.display = "none";
        document.getElementById("HeadLine").style.display = "none";
        document.getElementById("seccessfullSection").style.display = "block";
    })
};

const backHomeBtn = () => {
    location.reload();
}


// ........................................shopCard.........................................

const shopCard = () => {
    orderCardCreate();
    homePage();
}

let homePage = () => {
    let shortLIstCard = document.getElementById("allItemCardHereMianDiv");
    let checkClass = shortLIstCard.classList.contains("allItemCardHereMianDiv-Class");
    console.log(checkClass)

    if (checkClass) {
        const menuReloadBrowser = () => {
            location.reload();
        }
    }

}
