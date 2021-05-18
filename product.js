let urlWithParameters = window.location.search; // On récupère les paramètre d'url, donc l'id
let urlParameters = new URLSearchParams(urlWithParameters); // On utilise l'interface URLSearchParams pour détacher les paramètres
let idProduct = urlParameters.get("_id"); // On récupère l'id

get("http://localhost:3000/api/teddies/" + idProduct) // On fait une requête pour obtenir la peluche correspondant à l'id récupérée

console.log(idProduct)