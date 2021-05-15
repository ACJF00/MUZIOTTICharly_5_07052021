
async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies')
      .then((response) => response.json())
      .then((nounours) => {
        for (let elem of nounours) {
          let products = document.getElementById('products')
          let divIntrermediaire = document.createElement('div')

          let paragraphe = document.createElement('p')
          paragraphe.innerText = elem.name

          let prix = document.createElement('p')
          prix.innerText = elem.name + " coûte " + elem.price/100 + " €"

          let image = document.createElement('img')
          image.src = elem.imageUrl

          divIntrermediaire.appendChild(paragraphe)
          divIntrermediaire.appendChild(prix)
          divIntrermediaire.appendChild(image)

          products.appendChild(divIntrermediaire)

        }
      })
    }
       
  fillProducts()
