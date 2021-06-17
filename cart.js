const cart = document.getElementById("productsList");

let cartItem = document.createElement("h1");
let cartImage = document.createElement("img");

let teddyName = localStorage.getItem("name");
let teddyPrice = localStorage.getItem("price");
let teddyColor = localStorage.getItem("color");
let teddyId = localStorage.getItem("id")

function cartTotal() {
  const cart = localStorage.getItem("panier");

  if (cart === "[]") {
    document.getElementById("cartResume").innerHTML =
      '<h1 id="empty">Le panier est vide</h1>';
  } else {
    let cartProducts = JSON.parse(localStorage.getItem("panier"));

    for (cartProduct of cartProducts) {
      document.getElementById("productDetails").innerHTML += `
          <div id="container">
          <h1 id="name">${cartProduct.name}</h1>
          <h2 id="color">${cartProduct.color}</h2>
          <h3 id="price">${cartProduct.price/100} €</h3>
          </div>
      `;
    }
  }
}
cartTotal();



function displayTotalPrice() {
  const teddyPrices = JSON.parse(localStorage.getItem("panier"));

  let sum = 0
  for (let teddyPrice of teddyPrices) {
    sum += teddyPrice.price/100
  }
  if (sum === 0) {
  } else {
      document.getElementById("totalPrice").innerHTML = `<h2>Prix total : ${sum} €</h2>`;
    }

}
displayTotalPrice()






document.getElementById("clearCart").onclick = function () {
  clearCart();
};
function clearCart() {
  localStorage.clear();
  localStorage.setItem("panier", JSON.stringify([]));
  document.location.reload();
}



document.getElementById("bouton").onclick = function () {

let panier = localStorage.getItem("panier")
panier = JSON.parse(panier)

let tableauID = []

for (let elem of panier){
tableauID.push(elem.id)
}

const order =
  {
    "contact" : {
    firstName : firstName.value,
    lastName : lastName.value,
    email : email.value,
    adress : adress.value,
    city : city.value,
  },
    products: 
      tableauID
  }
  

  localStorage.setItem("contact", JSON.stringify(order));
  document.location.reload

  alert(`Merci ${firstName.value}, votre commande a bien été prise en compte`);

}






/** document.getElementById('createCart').onclick = function() {createCart()}
    function createCart() {

    } */
