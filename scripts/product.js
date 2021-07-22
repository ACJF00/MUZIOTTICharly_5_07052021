const getId = window.location.search;
const urlParams = new URLSearchParams(getId);
const product = urlParams.get("_id");

/* Remplissage du panier avec les informations produits */
function fillCart(teddyInfos) {
  let nounours = {
     name: `${teddyInfos.name}`,
     price: `${teddyInfos.price}`,
     color: `${document.getElementById('selectColor').value}`,
     id: `${teddyInfos._id}`,
   }
   
   let panier = localStorage.getItem("panier")
   panier = JSON.parse(panier)
   if (panier === null) {
     panier = []
   }
   panier.push (nounours)
   localStorage.setItem("panier", JSON.stringify(panier))
 }


/* Display des informations produits en fonction des données de l'API */
async function teddyDetails() {
  await fetch(`http://localhost:3000/api/teddies/${product}`)
    .then((response) => response.json())
    .then((teddyInfos) => {
    let products = document.getElementById('products')

    let teddyName = document.createElement('h1')
    let teddyPrice = document.createElement('p')
    let image = document.createElement('img')
    let teddyDescription = document.createElement('p')
    let teddyId = document.createElement('p')

    teddyName.textContent = teddyInfos.name;
    teddyPrice.textContent = "Prix : " + teddyInfos.price/100 + '€';
    image.src = teddyInfos.imageUrl;
    teddyDescription.textContent = teddyInfos.description;
    teddyId.textContent = teddyInfos._id;

    products.append(teddyName, teddyPrice, image, teddyDescription)

    
    
    
    /* Display des couleurs sous forme de menu déroulant */
    let colors = teddyInfos.colors
    for (let color of colors) {
      let selectColor = document.getElementById('selectColor')

      let colorOption = document.createElement('option')
      colorOption.innerText = `${color}`

      selectColor.appendChild(colorOption)

    }

    let colorValue = document.getElementById('selectColor').value


    document.getElementById('fillCart').onclick = function() {fillCart(teddyInfos)}
    })
  }

teddyDetails(product)

