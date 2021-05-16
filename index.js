
async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies')
      .then((response) => response.json())
      .then((nounours) => {
        for (let elem of nounours) {
          let products = document.getElementById('products')
          let divIntrermediaire = document.createElement('div')

          let paragraphe = document.createElement('h1')
          paragraphe.innerText = elem.name

          let prix = document.createElement('p')
          prix.innerText = elem.name + " coûte " + elem.price/100 + " €"

          let image = document.createElement('img')
          image.src = elem.imageUrl

          let button = document.createElement('p')
          button.innerHTML = '<button><a href="./pages/produit.html/'+elem._id +'">Voir le produit</a></button>'
         

          divIntrermediaire.appendChild(paragraphe)
          divIntrermediaire.appendChild(prix)
          divIntrermediaire.appendChild(image)
          divIntrermediaire.appendChild(button)

          products.appendChild(divIntrermediaire)

        }
      })
    }
       
  fillProducts()
