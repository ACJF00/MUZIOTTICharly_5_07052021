const cart = document.getElementById('productsList')

let cartItem = document.createElement('h1')
let cartImage = document.createElement('img')


let teddyName = localStorage.getItem('name')
let teddyPrice = localStorage.getItem('price')
let teddyColor = localStorage.getItem('color')
console.log(teddyName, teddyPrice, teddyColor)





document.getElementById('clearCart').onclick = function() {clearCart()}
function clearCart() {
      localStorage.clear()
      localStorage.setItem("panier", JSON.stringify([]))
      document.location.reload()
    }

  /** document.getElementById('createCart').onclick = function() {createCart()}
    function createCart() {

    } */ 
