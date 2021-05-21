const getId = window.location.search;
console.log(getId);
const urlParams = new URLSearchParams(getId);
const product = urlParams.get("_id");
console.log(product);


async function teddyDetails() {
  await fetch(`http://localhost:3000/api/teddies/${product}`)
    .then((response) => response.json())
    .then((teddyInfos) => {
    let products = document.getElementById('products')

    let teddyName = document.createElement('h1')
    let teddyPrice = document.createElement('p')
    let image = document.createElement('img')
    let teddyDescription = document.createElement('p')

    teddyName.textContent = teddyInfos.name;
    teddyPrice.textContent = "Prix : " + teddyInfos.price/100 + '€';
    image.src = teddyInfos.imageUrl;
    teddyDescription.textContent = teddyInfos.description;

    products.append(teddyName, teddyPrice,image, teddyDescription)

    
    
    
    
    let colors = teddyInfos.colors
    for (let color of colors) {
      let selectColor = document.getElementById('selectColor')

      let colorOption = document.createElement('option')
      colorOption.innerText = `${color}`

      selectColor.appendChild(colorOption)

    }





     let cartButton = document.createElement('p')
     cartButton.innerHTML = `<button id="addCart">Ajouter au panier</button>`
     products.appendChild(cartButton)

  
     let colorValue = document.getElementById('selectColor').value
     
     cartButton.onclick = function() {
       localStorage.setItem('name', teddyInfos.name)
       localStorage.setItem('color', colorValue)
       localStorage.setItem('price', teddyInfos.price/100 + "€")
       console.log(localStorage)
     }

    })
}

teddyDetails(product)