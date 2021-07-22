/* Display des informations relatives à la commande */

function displayOrder(){
const firstName = localStorage.getItem("firstName")
const lastName = localStorage.getItem("lastName")
const totalPrice = localStorage.getItem("totalPrice")
const orderId = localStorage.getItem("orderId")

    if (orderId === null) {
        document.getElementById("confirm").innerHTML= `
        <p>Veuillez passer commande sur notre site avant de consulter cette page</p>
        `
    }
    else {
        
        document.getElementById("confirm").innerHTML= `

        <h1>Merci ${firstName} ${lastName}, votre commande a été validée</h1>
        
        <p>Vous trouverez les informations relatives à votre commande ci-dessous :</p>
        <p><b>Montant total :</b> ${totalPrice} €</p>
        <p><b>Numéro de commande :</b> ${orderId}</p>`
        localStorage.clear();
        localStorage.setItem("panier", JSON.stringify([]));
    }
}
displayOrder()