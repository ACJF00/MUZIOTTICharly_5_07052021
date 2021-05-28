const cart = document.getElementById('productsList')

// Create (html elements) ************ 
let cartItem = document.createElement('h1')
let cartImage = document.createElement('img')


// Retrieve from products to localStorage ************
let teddyName = localStorage.getItem('name')
let teddyPrice = localStorage.getItem('price')
let teddyColor = localStorage.getItem('color')
console.log(teddyName, teddyPrice, teddyColor)

productsList.append(teddyName, teddyPrice, teddyColor)