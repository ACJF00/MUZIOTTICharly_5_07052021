const cart = document.getElementById("productsList");

let cartItem = document.createElement("h1");
let cartImage = document.createElement("img");

let teddyName = localStorage.getItem("name");
let teddyPrice = localStorage.getItem("price");
let teddyColor = localStorage.getItem("color");
let teddyId = localStorage.getItem("id");

/* Display des informations du panier */
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
          <h3 id="price">${cartProduct.price / 100} €</h3>
          </div>
      `;
    }
  }
}
cartTotal();

/* Calcul et display du prix total */
function displayTotalPrice() {
  const teddyPrices = JSON.parse(localStorage.getItem("panier"));

  let sum = 0;
  for (let teddyPrice of teddyPrices) {
    sum += teddyPrice.price / 100;
  }
  if (sum === 0) {
  } else {
    document.getElementById(
      "totalPrice"
    ).innerHTML = `<h2>Prix total : ${sum} €</h2>`;
    localStorage.setItem("totalPrice", JSON.stringify(sum))
  }
}
displayTotalPrice();

/* Vider le panier */
document.getElementById("clearCart").onclick = function () {
  clearCart();
};
function clearCart() {
  localStorage.clear();
  localStorage.setItem("panier", JSON.stringify([]));
  document.location.reload();
}

/* Fonction de validation des données du formulaire */
function validateEmail() {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
  ) {
    return true;
  }
  alert("Vous avez entré une adresse email incorrecte");
  return false;
}

/* RegEx */
function validateFirstName() {
  if (
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(
      firstName.value
    )
  ) {
    return true;
  }
  alert("Vous n'avez pas renseigné votre prénom correctement");
  return false;
}

function validateLastName() {
  if (
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(lastName.value)
  ) {
    return true;
  }
  alert("Vous n'avez pas renseigné votre nom correctement");
  return false;
}

function validateAddress() {
  if (/^[#.0-9a-zA-Z\s,-]+$/.test(address.value)) {
    return true;
  }
  alert("Vous n'avez pas renseigné une adresse correcte");
  return false;
}

function validateCity() {
  if (/^[a-zA-Z.-]+(?:[\s-][\/a-zA-Z.]+)*$/.test(city.value)) {
    return true;
  }
  alert("Vous n'avez pas renseigné un nom de ville correct");
  return false;
}

/* Soumission du formulaire */
document.getElementById("submit").onclick = function () {

let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);

  let tableauId = [];

  for (let elem of panier) {
    tableauId.push(elem.id);
  }

  const order = {
    contact: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      city: city.value,
    },
    products: tableauId,
  };

  if (validateFirstName() == false) {
    return false;
  } else if (validateLastName() == false) {
    return false;
  } else if (validateEmail() == false) {
    return false;
  } else if (validateAddress() == false) {
    return false;
  } else if (validateCity() == false) {
    return false;
  } else {
    orderValidation(order)
  }

  alert(`Merci ${firstName.value}, votre commande a bien été prise en compte`);
};


/* Order validation */
async function orderValidation(panier) {

  let options = {
    method: "POST",
    body: JSON.stringify(panier),
    headers: {
      "Content-Type": "application/json",
    },
  };


  await fetch("http://localhost:3000/api/teddies/order", options)
    .then(response => response.json())
    .then(result =>{
      localStorage.setItem("orderId", result.orderId),
      localStorage.setItem("firstName", firstName.value),
      localStorage.setItem("lastName", lastName.value)
      })
      location.href = 'confirm.html'
}

