const getId = window.location.search;
console.log(getId);
const urlParams = new URLSearchParams(getId);
const product = urlParams.get("_id");
console.log(product);



function fillCart(teddyInfos) {
  let nounours = {
     name: `${teddyInfos.name}`,
     price: `${teddyInfos.price}`,
     color: `${document.getElementById('selectColor').value}`,
     id: `${teddyInfos._id}`,
   }
   
   let panier = localStorage.getItem("panier")
   panier = JSON.parse(panier)
   panier.push (nounours)
   localStorage.setItem("panier", JSON.stringify(panier))
 }



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

    
    
    
    
    let colors = teddyInfos.colors
    for (let color of colors) {
      let selectColor = document.getElementById('selectColor')

      let colorOption = document.createElement('option')
      colorOption.innerText = `${color}`

      selectColor.appendChild(colorOption)

    }

    let colorValue = document.getElementById('selectColor').value


/**
     let cartButton = document.createElement('p')
     cartButton.innerHTML = `<button id="addCart">Ajouter au panier</button>`
     products.appendChild(cartButton)

  

     
      cartButton.onclick = function() {

      let tableauString = JSON.stringify(tableau)
      let objetString = JSON.stringify(objet)

       localStorage.setItem('name', teddyInfos.name)
       localStorage.setItem('color', colorValue)
       localStorage.setItem('price', teddyInfos.price/100 + "€")
       localStorage.setItem('tableau', tableauString)
       localStorage.setItem('objet', objetString)
       console.log(localStorage)

       let recup = localStorage.getItem("tableau")
       let recupTableau = JSON.parse(recup)
       console.log(recupTableau[1])

       let recupO = localStorage.getItem("objet")
       let recupObject = JSON.parse(recupO)
       console.log(recupObject)
     }
     **/

    document.getElementById('fillCart').onclick = function() {fillCart(teddyInfos)}
    })
  }

teddyDetails(product)

