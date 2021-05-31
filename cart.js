const cart = document.getElementById('productsList')

let cartItem = document.createElement('h1')
let cartImage = document.createElement('img')


let teddyName = localStorage.getItem('name')
let teddyPrice = localStorage.getItem('price')
let teddyColor = localStorage.getItem('color')
console.log(teddyName, teddyPrice, teddyColor)

productsList.append(teddyName, teddyPrice, teddyColor)