let url = "https://dummyjson.com/products";
let display = document.querySelector(".main .grid");
let inputElem = document.getElementById("search");

let productdata = [];

fetch(url)
    .then(res => res.json())
    .then(prod => {
        productdata.push(...prod.products);
        productRender();
    });

function productRender() {
    productdata.forEach(element => {
        display.innerHTML += `
            <div class="product">
                <img src="${element.thumbnail}" alt="">
                <div class="detail">
                    <h4>Brand: ${element.brand}</h4>
                    <h5>Title: ${element.title}</h5>
                    <p>Price: ${element.price}</p>
                </div>
            </div>
        `
    });
    inputElem.addEventListener("keyup", () => {
        if (inputElem.value) {
            display.innerHTML = "";
            productdata.filter(filtredelement => {
                if (filtredelement.brand.toLowerCase().includes(inputElem.value.toLowerCase()) || filtredelement.title.toLowerCase().includes(inputElem.value.toLowerCase())) {
                    display.innerHTML += `
                        <div class="product">
                        <img src="${filtredelement.thumbnail}" alt="">
                        <div class="detail">
                        <h4>Brand: ${filtredelement.brand}</h4>
                        <h5>Title: ${filtredelement.title}</h5>
                        <p>Price: ${filtredelement.price}</p>
                        </div>
                        </div>
                        `;

                }
            })
        }
        else {
            display.innerHTML = "";
            productdata.forEach(element => {
                display.innerHTML += `
                       <div class="product">
                           <img src="${element.thumbnail}" alt="">
                           <div class="detail">
                               <h4>Brand: ${element.brand}</h4>
                               <h5>Title: ${element.title}</h5>
                               <p>Price: ${element.price}</p>
                           </div>
                       </div>
                   `
            });
        }
    })
}



